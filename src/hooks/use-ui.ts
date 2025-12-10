/**
 * Custom hooks for accessing UI store
 */

import { useStore } from '@tanstack/react-store'
import type { UIState } from '../stores/ui.store'
import { uiStore } from '../stores/ui.store'

/**
 * Hook to access the entire UI state
 */
export function useUI() {
  return useStore(uiStore)
}

/**
 * Hook to access a specific UI state property
 */
export function useUIState<K extends keyof UIState>(property: K): UIState[K] {
  return useStore(uiStore, (state) => state[property])
}

/**
 * Hook to access sidebar state
 */
export function useSidebar() {
  return useStore(uiStore, (state) => ({
    width: state.sidebarWidth,
    collapsed: state.sidebarCollapsed,
  }))
}

/**
 * Hook to access preview settings
 */
export function usePreview() {
  return useStore(uiStore, (state) => ({
    scale: state.previewScale,
    viewportSize: state.viewportSize,
  }))
}

/**
 * Hook to access component filters
 */
export function useComponentFilters() {
  return useStore(uiStore, (state) => state.componentFilters)
}

/**
 * Hook to access active section
 */
export function useActiveSection() {
  return useStore(uiStore, (state) => state.activeSection)
}

/**
 * Hook to access export dialog state
 */
export function useExportDialog() {
  return useStore(uiStore, (state) => ({
    open: state.exportDialogOpen,
    format: state.exportFormat,
  }))
}

/**
 * Hook to access component search
 */
export function useComponentSearch() {
  return useStore(uiStore, (state) => state.componentSearch)
}
