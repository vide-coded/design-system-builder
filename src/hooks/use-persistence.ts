/**
 * usePersistence Hook
 *
 * Handles auto-save, load from storage, and storage management
 */

import { useEffect, useRef } from 'react'
import {
  clearAllData,
  deleteDesign,
  duplicateDesign,
  exportDesignAsJSON,
  getCurrentDesignId,
  getDesignsList,
  getStorageInfo,
  importDesignFromJSON,
  loadFromStorage,
  renameDesign,
  type SavedDesign,
  saveToStorage,
  setCurrentDesignId,
} from '@/lib/persistence/local-storage'
import {
  clearURLState,
  copyShareableURL,
  decodeURLToDesign,
  hasDesignInURL,
  updateURL,
} from '@/lib/persistence/url-state'
import { designSystemStore } from '@/stores/design-system.store'

// Auto-save configuration
const AUTO_SAVE_DELAY = 2000 // 2 seconds
const AUTO_SAVE_ENABLED_KEY = 'design-system-builder:auto-save-enabled'

/**
 * Debounce utility
 */
function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: number | null = null

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait) as unknown as number
  }
}

/**
 * Check if auto-save is enabled
 */
function isAutoSaveEnabled(): boolean {
  const enabled = localStorage.getItem(AUTO_SAVE_ENABLED_KEY)
  return enabled !== 'false' // Enabled by default
}

/**
 * Toggle auto-save
 */
export function toggleAutoSave(enabled: boolean): void {
  localStorage.setItem(AUTO_SAVE_ENABLED_KEY, enabled.toString())
}

/**
 * Hook to initialize persistence system
 */
export function usePersistence() {
  const initializedRef = useRef(false)

  useEffect(() => {
    // Only run once
    if (initializedRef.current) return
    initializedRef.current = true

    // Priority 1: Check URL for shared design
    if (hasDesignInURL()) {
      const urlResult = decodeURLToDesign()
      if (urlResult.success && urlResult.design) {
        const design = urlResult.design
        designSystemStore.setState(() => design)
        console.log('✅ Design system loaded from URL')
        // Don't save URL designs to localStorage immediately
        return
      }
      console.warn('⚠️ Failed to load design from URL:', urlResult.error)
    }

    // Priority 2: Load from localStorage
    const design = loadFromStorage()
    if (design) {
      designSystemStore.setState(() => design)
      console.log('✅ Design system loaded from storage')
    }

    // Set up auto-save
    const debouncedSave = debounce(() => {
      if (!isAutoSaveEnabled()) return

      try {
        const state = designSystemStore.state
        const currentId = getCurrentDesignId()
        saveToStorage(state, currentId || undefined)
      } catch (error) {
        console.error('❌ Auto-save failed:', error)
      }
    }, AUTO_SAVE_DELAY)

    // Set up URL update (debounced, separate from localStorage)
    const debouncedURLUpdate = debounce(() => {
      if (!isAutoSaveEnabled()) return

      try {
        const state = designSystemStore.state
        updateURL(state, true) // Use replaceState (no history spam)
      } catch (error) {
        console.error('❌ URL update failed:', error)
      }
    }, AUTO_SAVE_DELAY)

    // Subscribe to store changes
    const unsubscribe = designSystemStore.subscribe(() => {
      debouncedSave()
      debouncedURLUpdate()
    })

    console.log('✅ Auto-save and URL sync initialized')

    // Cleanup on unmount
    return () => {
      unsubscribe()
    }
  }, [])
}

/**
 * Hook for managing saved designs
 */
export function useStorageManager() {
  return {
    // Get all designs
    getDesigns: getDesignsList,

    // Load specific design
    loadDesign: (id: string) => {
      const design = loadFromStorage(id)
      if (design) {
        designSystemStore.setState(() => design)
        setCurrentDesignId(id)
        return true
      }
      return false
    },

    // Save current design
    saveDesign: () => {
      const state = designSystemStore.state
      const currentId = getCurrentDesignId()
      return saveToStorage(state, currentId || undefined)
    },

    // Create new design
    createNewDesign: () => {
      const state = designSystemStore.state
      return saveToStorage(state)
    },

    // Delete design
    deleteDesign,

    // Duplicate design
    duplicateDesign,

    // Rename design
    renameDesign,

    // Export as JSON
    exportAsJSON: (id: string) => {
      const json = exportDesignAsJSON(id)
      if (!json) return null

      // Create download link
      const blob = new Blob([json], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `design-system-${id}.json`
      a.click()
      URL.revokeObjectURL(url)

      return json
    },

    // Import from JSON
    importFromJSON: importDesignFromJSON,

    // Get current design ID
    getCurrentId: getCurrentDesignId,

    // Set current design ID
    setCurrentId: setCurrentDesignId,

    // Clear all data
    clearAll: clearAllData,

    // Get storage info
    getStorageInfo,

    // Auto-save controls
    isAutoSaveEnabled,
    toggleAutoSave,

    // URL sharing
    shareViaURL: async () => {
      const state = designSystemStore.state
      return await copyShareableURL(state)
    },

    clearURL: () => {
      clearURLState(true)
    },
  }
}

export type { SavedDesign }
