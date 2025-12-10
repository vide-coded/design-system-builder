/**
 * Export Validation & Warnings
 *
 * Validates design system tokens before export:
 * - Color contrast (WCAG AA compliance)
 * - Missing or incomplete tokens
 * - Invalid values
 * - Large file sizes
 * - Accessibility concerns
 */

import type { ColorScale, DesignSystem } from '@/types/design-system'
import { generateCSS } from './css-generator'
import { generateTailwindConfig } from './tailwind-generator'

export interface ValidationWarning {
  type: 'contrast' | 'missing' | 'invalid' | 'size' | 'accessibility'
  severity: 'error' | 'warning' | 'info'
  message: string
  suggestion?: string
  affectedToken?: string
}

export interface ValidationResult {
  valid: boolean
  warnings: ValidationWarning[]
  cssFileSize: number
  tailwindFileSize: number
}

/**
 * Validate entire design system before export
 */
export function validateDesignSystem(
  designSystem: DesignSystem,
): ValidationResult {
  const warnings: ValidationWarning[] = []

  // Validate colors
  warnings.push(...validateColors(designSystem))

  // Validate typography
  warnings.push(...validateTypography(designSystem))

  // Validate spacing
  warnings.push(...validateSpacing(designSystem))

  // Validate file sizes
  warnings.push(...validateFileSizes(designSystem))

  // Validate accessibility
  warnings.push(...validateAccessibility(designSystem))

  const hasErrors = warnings.some((w) => w.severity === 'error')

  return {
    valid: !hasErrors,
    warnings,
    cssFileSize: calculateCSSFileSize(designSystem),
    tailwindFileSize: calculateTailwindFileSize(designSystem),
  }
}

/**
 * Validate color tokens
 */
function validateColors(designSystem: DesignSystem): ValidationWarning[] {
  const warnings: ValidationWarning[] = []

  // Check primary color contrast with white (for buttons)
  const primaryContrast = calculateContrast(
    designSystem.colors.primary[500],
    '#ffffff',
  )
  if (primaryContrast < 4.5) {
    warnings.push({
      type: 'contrast',
      severity: 'warning',
      message: `Primary color has low contrast with white (${primaryContrast.toFixed(2)}:1)`,
      suggestion:
        'WCAG AA requires 4.5:1 for normal text. Consider using a darker shade for better accessibility.',
      affectedToken: 'colors.primary[500]',
    })
  }

  // Check if color scales are complete
  const colorScales: Array<{ name: string; scale: ColorScale }> = [
    { name: 'primary', scale: designSystem.colors.primary },
    { name: 'secondary', scale: designSystem.colors.secondary },
    { name: 'accent', scale: designSystem.colors.accent },
    { name: 'success', scale: designSystem.colors.success },
    { name: 'warning', scale: designSystem.colors.warning },
    { name: 'error', scale: designSystem.colors.error },
    { name: 'info', scale: designSystem.colors.info },
  ]

  for (const { name, scale } of colorScales) {
    const requiredShades = [
      50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
    ]
    const missingShades = requiredShades.filter(
      (shade) => !scale[shade as keyof ColorScale],
    )

    if (missingShades.length > 0) {
      warnings.push({
        type: 'missing',
        severity: 'error',
        message: `${name} color scale is missing shades: ${missingShades.join(', ')}`,
        suggestion:
          'Generate complete color scale from base color (500 shade).',
        affectedToken: `colors.${name}`,
      })
    }
  }

  // Validate hex color format
  const allColors = [
    ...Object.values(designSystem.colors.primary),
    ...Object.values(designSystem.colors.secondary),
    ...Object.values(designSystem.colors.accent),
    designSystem.colors.background,
    designSystem.colors.foreground,
    designSystem.colors.border,
  ]

  for (const color of allColors) {
    if (!isValidHexColor(color)) {
      warnings.push({
        type: 'invalid',
        severity: 'error',
        message: `Invalid color format: "${color}"`,
        suggestion: 'Colors must be valid hex codes (e.g., #ffffff or #fff)',
      })
    }
  }

  // Check foreground/background contrast
  const fgBgContrast = calculateContrast(
    designSystem.colors.foreground,
    designSystem.colors.background,
  )
  if (fgBgContrast < 7) {
    warnings.push({
      type: 'contrast',
      severity: 'warning',
      message: `Foreground/Background contrast is ${fgBgContrast.toFixed(2)}:1`,
      suggestion:
        'WCAG AAA recommends 7:1 for normal text. Current contrast may be difficult to read for some users.',
      affectedToken: 'colors.foreground & colors.background',
    })
  }

  return warnings
}

/**
 * Validate typography tokens
 */
function validateTypography(designSystem: DesignSystem): ValidationWarning[] {
  const warnings: ValidationWarning[] = []

  // Check if font families are defined
  if (
    designSystem.typography.fontFamily.sans.length === 0 ||
    !designSystem.typography.fontFamily.sans[0]
  ) {
    warnings.push({
      type: 'missing',
      severity: 'error',
      message: 'Sans-serif font family is not defined',
      suggestion: 'Add at least one sans-serif font (e.g., Inter, system-ui)',
      affectedToken: 'typography.fontFamily.sans',
    })
  }

  // Check for web-safe fallbacks
  const hasFallback = designSystem.typography.fontFamily.sans.some((font) =>
    ['system-ui', 'sans-serif', '-apple-system'].includes(font),
  )
  if (!hasFallback) {
    warnings.push({
      type: 'missing',
      severity: 'warning',
      message: 'Sans-serif font family missing web-safe fallback',
      suggestion: 'Add "system-ui" or "sans-serif" as fallback',
      affectedToken: 'typography.fontFamily.sans',
    })
  }

  // Validate font sizes
  const baseFontSize = parseFloat(designSystem.typography.fontSize.base)
  if (
    Number.isNaN(baseFontSize) ||
    baseFontSize < 0.75 ||
    baseFontSize > 1.25
  ) {
    warnings.push({
      type: 'invalid',
      severity: 'warning',
      message: `Base font size (${designSystem.typography.fontSize.base}) is unusual`,
      suggestion: 'Base font size should typically be 1rem (16px)',
      affectedToken: 'typography.fontSize.base',
    })
  }

  return warnings
}

/**
 * Validate spacing tokens
 */
function validateSpacing(designSystem: DesignSystem): ValidationWarning[] {
  const warnings: ValidationWarning[] = []

  // Check for negative spacing values
  for (const [key, value] of Object.entries(designSystem.spacing)) {
    const numValue = parseFloat(value)
    if (!Number.isNaN(numValue) && numValue < 0) {
      warnings.push({
        type: 'invalid',
        severity: 'error',
        message: `Spacing value "${key}" is negative: ${value}`,
        suggestion: 'Spacing values must be positive',
        affectedToken: `spacing.${key}`,
      })
    }
  }

  return warnings
}

/**
 * Validate export file sizes
 */
function validateFileSizes(designSystem: DesignSystem): ValidationWarning[] {
  const warnings: ValidationWarning[] = []

  const cssSize = calculateCSSFileSize(designSystem)
  const tailwindSize = calculateTailwindFileSize(designSystem)

  if (cssSize > 100 * 1024) {
    warnings.push({
      type: 'size',
      severity: 'warning',
      message: `CSS file is large: ${(cssSize / 1024).toFixed(2)}KB`,
      suggestion:
        'Consider removing unused color scales or simplifying utility classes to reduce file size.',
    })
  }

  if (tailwindSize > 100 * 1024) {
    warnings.push({
      type: 'size',
      severity: 'info',
      message: `Tailwind config is large: ${(tailwindSize / 1024).toFixed(2)}KB`,
      suggestion: 'Tailwind will tree-shake unused styles during build.',
    })
  }

  return warnings
}

/**
 * Validate accessibility concerns
 */
function validateAccessibility(
  designSystem: DesignSystem,
): ValidationWarning[] {
  const warnings: ValidationWarning[] = []

  // Check if animation durations are reasonable
  const fastDuration = parseFloat(designSystem.animation.duration.fast)
  if (fastDuration < 100) {
    warnings.push({
      type: 'accessibility',
      severity: 'warning',
      message: 'Fast animation duration is very short (< 100ms)',
      suggestion:
        'Animations under 100ms may be jarring. Consider 150ms minimum for smooth transitions.',
      affectedToken: 'animation.duration.fast',
    })
  }

  const slowDuration = parseFloat(designSystem.animation.duration.slow)
  if (slowDuration > 500) {
    warnings.push({
      type: 'accessibility',
      severity: 'info',
      message: 'Slow animation duration is long (> 500ms)',
      suggestion:
        'Long animations can frustrate users. Consider respecting prefers-reduced-motion.',
      affectedToken: 'animation.duration.slow',
    })
  }

  // Check border radius values
  const fullRadius = parseFloat(designSystem.borderRadius.full)
  if (fullRadius !== 9999) {
    warnings.push({
      type: 'accessibility',
      severity: 'info',
      message: 'Border radius "full" should be 9999px for perfect circles',
      suggestion: 'Use 9999px to ensure circles remain circular at any size',
      affectedToken: 'borderRadius.full',
    })
  }

  return warnings
}

/**
 * Calculate WCAG contrast ratio between two colors
 * https://www.w3.org/WAI/GL/wiki/Contrast_ratio
 */
export function calculateContrast(color1: string, color2: string): number {
  const lum1 = getRelativeLuminance(color1)
  const lum2 = getRelativeLuminance(color2)

  const lighter = Math.max(lum1, lum2)
  const darker = Math.min(lum1, lum2)

  return (lighter + 0.05) / (darker + 0.05)
}

/**
 * Calculate relative luminance of a color
 * https://www.w3.org/WAI/GL/wiki/Relative_luminance
 */
function getRelativeLuminance(color: string): number {
  const rgb = hexToRgb(color)
  if (!rgb) return 0

  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((val) => {
    const sRGB = val / 255
    return sRGB <= 0.03928 ? sRGB / 12.92 : ((sRGB + 0.055) / 1.055) ** 2.4
  })

  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  // Remove # if present
  hex = hex.replace('#', '')

  // Handle 3-digit hex
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((c) => c + c)
      .join('')
  }

  if (hex.length !== 6) return null

  const r = Number.parseInt(hex.substring(0, 2), 16)
  const g = Number.parseInt(hex.substring(2, 4), 16)
  const b = Number.parseInt(hex.substring(4, 6), 16)

  return { r, g, b }
}

/**
 * Validate hex color format
 */
function isValidHexColor(color: string): boolean {
  return /^#([0-9A-F]{3}){1,2}$/i.test(color)
}

/**
 * Calculate CSS file size in bytes
 */
export function calculateCSSFileSize(designSystem: DesignSystem): number {
  const css = generateCSS(designSystem)
  return new Blob([css]).size
}

/**
 * Calculate Tailwind config file size in bytes
 */
export function calculateTailwindFileSize(designSystem: DesignSystem): number {
  const config = generateTailwindConfig(designSystem)
  return new Blob([config]).size
}

/**
 * Get human-readable file size
 */
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes}B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)}KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)}MB`
}

/**
 * Get severity color for UI display
 */
export function getSeverityColor(
  severity: ValidationWarning['severity'],
): string {
  switch (severity) {
    case 'error':
      return 'var(--color-error-500)'
    case 'warning':
      return 'var(--color-warning-500)'
    case 'info':
      return 'var(--color-info-500)'
    default:
      return 'var(--color-foreground)'
  }
}

/**
 * Get severity icon for UI display
 */
export function getSeverityIcon(
  severity: ValidationWarning['severity'],
): string {
  switch (severity) {
    case 'error':
      return '❌'
    case 'warning':
      return '⚠️'
    case 'info':
      return 'ℹ️'
    default:
      return '•'
  }
}
