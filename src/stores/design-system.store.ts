/**
 * Design System Store
 * Central state management for all design tokens using TanStack Store
 */

import { Store } from '@tanstack/react-store'
import { defaultDesignSystem } from '../lib/design-tokens/defaults'
import type { DesignSystem } from '../types/design-system'

// Initialize store with default design system
export const designSystemStore = new Store<DesignSystem>(defaultDesignSystem)

/**
 * Update the entire design system
 */
export function setDesignSystem(designSystem: DesignSystem) {
  designSystemStore.setState(() => ({
    ...designSystem,
    updatedAt: new Date().toISOString(),
  }))
}

/**
 * Update design system metadata
 */
export function updateMetadata(metadata: { name?: string; version?: string }) {
  designSystemStore.setState((state) => ({
    ...state,
    ...metadata,
    updatedAt: new Date().toISOString(),
  }))
}

/**
 * Update colors section
 */
export function updateColors(colors: Partial<DesignSystem['colors']>) {
  designSystemStore.setState((state) => ({
    ...state,
    colors: {
      ...state.colors,
      ...colors,
    },
    updatedAt: new Date().toISOString(),
  }))
}

/**
 * Update typography section
 */
export function updateTypography(
  typography: Partial<DesignSystem['typography']>,
) {
  designSystemStore.setState((state) => ({
    ...state,
    typography: {
      ...state.typography,
      ...typography,
    },
    updatedAt: new Date().toISOString(),
  }))
}

/**
 * Update spacing section
 */
export function updateSpacing(spacing: Partial<DesignSystem['spacing']>) {
  designSystemStore.setState((state) => ({
    ...state,
    spacing: {
      ...state.spacing,
      ...spacing,
    },
    updatedAt: new Date().toISOString(),
  }))
}

/**
 * Update border radius section
 */
export function updateBorderRadius(
  borderRadius: Partial<DesignSystem['borderRadius']>,
) {
  designSystemStore.setState((state) => ({
    ...state,
    borderRadius: {
      ...state.borderRadius,
      ...borderRadius,
    },
    updatedAt: new Date().toISOString(),
  }))
}

/**
 * Update box shadow section
 */
export function updateBoxShadow(boxShadow: Partial<DesignSystem['boxShadow']>) {
  designSystemStore.setState((state) => ({
    ...state,
    boxShadow: {
      ...state.boxShadow,
      ...boxShadow,
    },
    updatedAt: new Date().toISOString(),
  }))
}

/**
 * Update animation section
 */
export function updateAnimation(animation: Partial<DesignSystem['animation']>) {
  designSystemStore.setState((state) => ({
    ...state,
    animation: {
      ...state.animation,
      ...animation,
    },
    updatedAt: new Date().toISOString(),
  }))
}

/**
 * Update z-index section
 */
export function updateZIndex(zIndex: Partial<DesignSystem['zIndex']>) {
  designSystemStore.setState((state) => ({
    ...state,
    zIndex: {
      ...state.zIndex,
      ...zIndex,
    },
    updatedAt: new Date().toISOString(),
  }))
}

/**
 * Update component tokens
 */
export function updateComponentTokens(
  components: Partial<DesignSystem['components']>,
) {
  designSystemStore.setState((state) => ({
    ...state,
    components: {
      ...state.components,
      ...components,
    },
    updatedAt: new Date().toISOString(),
  }))
}

/**
 * Reset to default design system
 */
export function resetDesignSystem() {
  designSystemStore.setState(() => ({
    ...defaultDesignSystem,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }))
}
