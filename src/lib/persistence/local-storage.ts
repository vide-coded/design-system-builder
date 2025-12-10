/**
 * localStorage Manager
 *
 * Handles persistence of design systems to browser localStorage with:
 * - Auto-save (debounced every 2 seconds)
 * - Multiple saved designs
 * - Export/import as JSON
 * - Quota error handling
 */

import type { DesignSystem } from '@/types/design-system'

// Storage keys
const STORAGE_KEY_PREFIX = 'design-system-builder'
const CURRENT_DESIGN_KEY = `${STORAGE_KEY_PREFIX}:current`
const DESIGNS_LIST_KEY = `${STORAGE_KEY_PREFIX}:designs`

// Types
export interface SavedDesign {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  data: DesignSystem
}

export interface DesignMetadata {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}

// Generate unique ID
function generateId(): string {
  return `design_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// Get current timestamp
function getTimestamp(): string {
  return new Date().toISOString()
}

/**
 * Save design system to localStorage
 */
export function saveToStorage(design: DesignSystem, id?: string): string {
  try {
    const designId = id || generateId()
    const now = getTimestamp()

    // Get existing design or create new
    let existingDesign: SavedDesign | null = null
    if (id) {
      existingDesign = getDesignById(id)
    }

    const savedDesign: SavedDesign = {
      id: designId,
      name: design.name || 'Untitled Design System',
      createdAt: existingDesign?.createdAt || now,
      updatedAt: now,
      data: design,
    }

    // Save the design
    const designKey = `${STORAGE_KEY_PREFIX}:design:${designId}`
    localStorage.setItem(designKey, JSON.stringify(savedDesign))

    // Update designs list
    const designsList = getDesignsList()
    const existingIndex = designsList.findIndex((d) => d.id === designId)

    const metadata: DesignMetadata = {
      id: designId,
      name: savedDesign.name,
      createdAt: savedDesign.createdAt,
      updatedAt: savedDesign.updatedAt,
    }

    if (existingIndex >= 0) {
      designsList[existingIndex] = metadata
    } else {
      designsList.push(metadata)
    }

    localStorage.setItem(DESIGNS_LIST_KEY, JSON.stringify(designsList))

    // Set as current design
    localStorage.setItem(CURRENT_DESIGN_KEY, designId)

    console.log(`✅ Design system saved: ${savedDesign.name} (${designId})`)
    return designId
  } catch (error) {
    if (error instanceof DOMException && error.name === 'QuotaExceededError') {
      console.error('❌ localStorage quota exceeded')
      throw new Error(
        'Storage quota exceeded. Please export your design system or delete old designs.',
      )
    }
    console.error('❌ Failed to save design system:', error)
    throw new Error('Failed to save design system')
  }
}

/**
 * Load design system from localStorage
 */
export function loadFromStorage(id?: string): DesignSystem | null {
  try {
    const designId = id || localStorage.getItem(CURRENT_DESIGN_KEY)
    if (!designId) {
      console.log('ℹ️ No saved design found')
      return null
    }

    const designKey = `${STORAGE_KEY_PREFIX}:design:${designId}`
    const saved = localStorage.getItem(designKey)

    if (!saved) {
      console.log('ℹ️ Design not found:', designId)
      return null
    }

    const savedDesign: SavedDesign = JSON.parse(saved)
    console.log(`✅ Design system loaded: ${savedDesign.name} (${designId})`)
    return savedDesign.data
  } catch (error) {
    console.error('❌ Failed to load design system:', error)
    return null
  }
}

/**
 * Get design by ID
 */
export function getDesignById(id: string): SavedDesign | null {
  try {
    const designKey = `${STORAGE_KEY_PREFIX}:design:${id}`
    const saved = localStorage.getItem(designKey)
    if (!saved) return null
    return JSON.parse(saved)
  } catch (error) {
    console.error('❌ Failed to get design:', error)
    return null
  }
}

/**
 * Get list of all saved designs (metadata only)
 */
export function getDesignsList(): DesignMetadata[] {
  try {
    const saved = localStorage.getItem(DESIGNS_LIST_KEY)
    if (!saved) return []
    return JSON.parse(saved)
  } catch (error) {
    console.error('❌ Failed to get designs list:', error)
    return []
  }
}

/**
 * Delete design by ID
 */
export function deleteDesign(id: string): boolean {
  try {
    const designKey = `${STORAGE_KEY_PREFIX}:design:${id}`
    localStorage.removeItem(designKey)

    // Update designs list
    const designsList = getDesignsList().filter((d) => d.id !== id)
    localStorage.setItem(DESIGNS_LIST_KEY, JSON.stringify(designsList))

    // If deleted design was current, clear current
    const currentId = localStorage.getItem(CURRENT_DESIGN_KEY)
    if (currentId === id) {
      localStorage.removeItem(CURRENT_DESIGN_KEY)
    }

    console.log(`✅ Design deleted: ${id}`)
    return true
  } catch (error) {
    console.error('❌ Failed to delete design:', error)
    return false
  }
}

/**
 * Duplicate design
 */
export function duplicateDesign(id: string): string | null {
  try {
    const design = getDesignById(id)
    if (!design) return null

    const newDesign: DesignSystem = {
      ...design.data,
      name: `${design.name} (Copy)`,
    }

    return saveToStorage(newDesign)
  } catch (error) {
    console.error('❌ Failed to duplicate design:', error)
    return null
  }
}

/**
 * Rename design
 */
export function renameDesign(id: string, newName: string): boolean {
  try {
    const design = getDesignById(id)
    if (!design) return false

    design.name = newName
    design.data.name = newName
    design.updatedAt = getTimestamp()

    const designKey = `${STORAGE_KEY_PREFIX}:design:${id}`
    localStorage.setItem(designKey, JSON.stringify(design))

    // Update designs list
    const designsList = getDesignsList()
    const index = designsList.findIndex((d) => d.id === id)
    if (index >= 0) {
      designsList[index].name = newName
      designsList[index].updatedAt = design.updatedAt
      localStorage.setItem(DESIGNS_LIST_KEY, JSON.stringify(designsList))
    }

    console.log(`✅ Design renamed: ${newName}`)
    return true
  } catch (error) {
    console.error('❌ Failed to rename design:', error)
    return false
  }
}

/**
 * Export design as JSON
 */
export function exportDesignAsJSON(id: string): string | null {
  try {
    const design = getDesignById(id)
    if (!design) return null

    const exportData = {
      version: '1.0',
      exportedAt: getTimestamp(),
      design: design.data,
    }

    return JSON.stringify(exportData, null, 2)
  } catch (error) {
    console.error('❌ Failed to export design:', error)
    return null
  }
}

/**
 * Import design from JSON
 */
export function importDesignFromJSON(json: string): string | null {
  try {
    const importData = JSON.parse(json)

    if (!importData.design) {
      throw new Error('Invalid design system JSON')
    }

    const design: DesignSystem = importData.design

    // Validate basic structure
    if (!design.colors || !design.typography) {
      throw new Error('Invalid design system structure')
    }

    return saveToStorage(design)
  } catch (error) {
    console.error('❌ Failed to import design:', error)
    throw new Error(
      error instanceof Error ? error.message : 'Failed to import design',
    )
  }
}

/**
 * Get current design ID
 */
export function getCurrentDesignId(): string | null {
  return localStorage.getItem(CURRENT_DESIGN_KEY)
}

/**
 * Set current design ID
 */
export function setCurrentDesignId(id: string): void {
  localStorage.setItem(CURRENT_DESIGN_KEY, id)
}

/**
 * Clear all data (for testing/reset)
 */
export function clearAllData(): void {
  const keys = Object.keys(localStorage)
  const prefix = STORAGE_KEY_PREFIX

  keys.forEach((key) => {
    if (key.startsWith(prefix)) {
      localStorage.removeItem(key)
    }
  })

  console.log('✅ All data cleared')
}

/**
 * Get storage usage info
 */
export function getStorageInfo(): {
  used: number
  available: number
  total: number
  percentage: number
} {
  try {
    let used = 0
    const keys = Object.keys(localStorage)
    const prefix = STORAGE_KEY_PREFIX

    keys.forEach((key) => {
      if (key.startsWith(prefix)) {
        const value = localStorage.getItem(key)
        if (value) {
          used += key.length + value.length
        }
      }
    })

    // Most browsers have 5-10MB limit for localStorage
    const total = 10 * 1024 * 1024 // Assume 10MB
    const available = total - used
    const percentage = (used / total) * 100

    return {
      used,
      available,
      total,
      percentage,
    }
  } catch (error) {
    console.error('❌ Failed to get storage info:', error)
    return { used: 0, available: 0, total: 0, percentage: 0 }
  }
}
