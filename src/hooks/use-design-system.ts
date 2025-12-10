/**
 * Custom hooks for accessing design system store
 */

import { useStore } from '@tanstack/react-store'
import { defaultDesignSystem } from '../lib/design-tokens/defaults'
import {
  designSystemStore,
  resetDesignSystem,
  setDesignSystem,
  updateAnimation,
  updateBorderRadius,
  updateBoxShadow,
  updateColors,
  updateSpacing,
  updateTypography,
} from '../stores/design-system.store'
import type {
  BorderRadius,
  BoxShadow,
  DesignSystem,
} from '../types/design-system'

/**
 * Hook to access the entire design system with actions
 */
export function useDesignSystem() {
  const designSystem = useStore(designSystemStore)

  return {
    designSystem,
    // Load entire design system
    loadDesignSystem: setDesignSystem,
    // Color actions
    updateColors,
    // Typography actions
    updateTypography,
    // Spacing actions
    updateSpacing,
    // Border radius actions
    updateBorderRadius: (key: keyof BorderRadius, value: string) => {
      updateBorderRadius({ [key]: value })
    },
    // Box shadow actions
    updateBoxShadow: (key: keyof BoxShadow, value: string) => {
      updateBoxShadow({ [key]: value })
    },
    // Animation actions
    updateAnimation,
    // Reset actions
    resetDesignSystem,
    resetSection: (
      section: 'borders' | 'shadows' | 'colors' | 'typography' | 'spacing',
    ) => {
      switch (section) {
        case 'borders':
          updateBorderRadius(defaultDesignSystem.borderRadius)
          break
        case 'shadows':
          updateBoxShadow(defaultDesignSystem.boxShadow)
          break
        case 'colors':
          updateColors(defaultDesignSystem.colors)
          break
        case 'typography':
          updateTypography(defaultDesignSystem.typography)
          break
        case 'spacing':
          updateSpacing(defaultDesignSystem.spacing)
          break
      }
    },
  }
}

/**
 * Hook to access a specific section of the design system
 */
export function useDesignSystemSection<K extends keyof DesignSystem>(
  section: K,
): DesignSystem[K] {
  return useStore(designSystemStore, (state) => state[section])
}

/**
 * Hook to access colors
 */
export function useColors() {
  return useStore(designSystemStore, (state) => state.colors)
}

/**
 * Hook to access typography
 */
export function useTypography() {
  return useStore(designSystemStore, (state) => state.typography)
}

/**
 * Hook to access spacing
 */
export function useSpacing() {
  return useStore(designSystemStore, (state) => state.spacing)
}

/**
 * Hook to access border radius
 */
export function useBorderRadius() {
  return useStore(designSystemStore, (state) => state.borderRadius)
}

/**
 * Hook to access box shadows
 */
export function useBoxShadow() {
  return useStore(designSystemStore, (state) => state.boxShadow)
}

/**
 * Hook to access animations
 */
export function useAnimation() {
  return useStore(designSystemStore, (state) => state.animation)
}

/**
 * Hook to access z-index scale
 */
export function useZIndex() {
  return useStore(designSystemStore, (state) => state.zIndex)
}

/**
 * Hook to access component tokens
 */
export function useComponentTokens() {
  return useStore(designSystemStore, (state) => state.components)
}

/**
 * Hook to access design system metadata
 */
export function useDesignSystemMetadata() {
  return useStore(designSystemStore, (state) => ({
    name: state.name,
    version: state.version,
    createdAt: state.createdAt,
    updatedAt: state.updatedAt,
  }))
}
