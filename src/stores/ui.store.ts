/**
 * UI Store
 * Manages editor UI state (sidebar, panels, filters, etc.)
 */

import { Store } from '@tanstack/react-store'
import type {
  ComponentCategory,
  DesignSystemSection,
} from '../types/design-system'

export interface UIState {
  // Layout
  sidebarWidth: number
  sidebarCollapsed: boolean
  previewScale: number // Zoom level (0.5, 0.75, 1, 1.25, 1.5)

  // Active section
  activeSection: DesignSystemSection

  // Component filters
  componentFilters: Record<ComponentCategory, boolean>

  // Search
  componentSearch: string

  // Export dialog
  exportDialogOpen: boolean
  exportFormat: 'css' | 'tailwind'

  // Viewport size
  viewportSize: 'mobile' | 'tablet' | 'desktop' | 'auto'
}

const defaultUIState: UIState = {
  // Layout
  sidebarWidth: 320,
  sidebarCollapsed: false,
  previewScale: 1,

  // Active section
  activeSection: 'colors',

  // Component filters (all enabled by default)
  componentFilters: {
    buttons: true,
    forms: true,
    cards: true,
    navigation: true,
    feedback: true,
    overlays: true,
    data: true,
    typography: true,
    layout: true,
    advanced: true,
  },

  // Search
  componentSearch: '',

  // Export dialog
  exportDialogOpen: false,
  exportFormat: 'css',

  // Viewport
  viewportSize: 'auto',
}

// Initialize UI store
export const uiStore = new Store<UIState>(defaultUIState)

/**
 * Update sidebar width
 */
export function setSidebarWidth(width: number) {
  uiStore.setState((state) => ({
    ...state,
    sidebarWidth: Math.max(200, Math.min(600, width)), // Clamp between 200-600px
  }))
}

/**
 * Toggle sidebar collapsed state
 */
export function toggleSidebar() {
  uiStore.setState((state) => ({
    ...state,
    sidebarCollapsed: !state.sidebarCollapsed,
  }))
}

/**
 * Set preview scale (zoom)
 */
export function setPreviewScale(scale: number) {
  uiStore.setState((state) => ({
    ...state,
    previewScale: Math.max(0.25, Math.min(2, scale)), // Clamp between 25%-200%
  }))
}

/**
 * Set active section
 */
export function setActiveSection(section: DesignSystemSection) {
  uiStore.setState((state) => ({
    ...state,
    activeSection: section,
  }))
}

/**
 * Toggle component filter
 */
export function toggleComponentFilter(category: ComponentCategory) {
  uiStore.setState((state) => ({
    ...state,
    componentFilters: {
      ...state.componentFilters,
      [category]: !state.componentFilters[category],
    },
  }))
}

/**
 * Set all component filters
 */
export function setAllComponentFilters(enabled: boolean) {
  uiStore.setState((state) => ({
    ...state,
    componentFilters: Object.keys(state.componentFilters).reduce(
      (acc, key) => {
        acc[key as ComponentCategory] = enabled
        return acc
      },
      {} as Record<ComponentCategory, boolean>,
    ),
  }))
}

/**
 * Set component search query
 */
export function setComponentSearch(query: string) {
  uiStore.setState((state) => ({
    ...state,
    componentSearch: query,
  }))
}

/**
 * Open export dialog
 */
export function openExportDialog(format: 'css' | 'tailwind' = 'css') {
  uiStore.setState((state) => ({
    ...state,
    exportDialogOpen: true,
    exportFormat: format,
  }))
}

/**
 * Close export dialog
 */
export function closeExportDialog() {
  uiStore.setState((state) => ({
    ...state,
    exportDialogOpen: false,
  }))
}

/**
 * Set export format
 */
export function setExportFormat(format: 'css' | 'tailwind') {
  uiStore.setState((state) => ({
    ...state,
    exportFormat: format,
  }))
}

/**
 * Set viewport size
 */
export function setViewportSize(size: UIState['viewportSize']) {
  uiStore.setState((state) => ({
    ...state,
    viewportSize: size,
  }))
}

/**
 * Reset UI state to defaults
 */
export function resetUIState() {
  uiStore.setState(() => defaultUIState)
}
