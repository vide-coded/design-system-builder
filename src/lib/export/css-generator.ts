/**
 * CSS Variables Generator
 *
 * Converts design tokens into production-ready CSS with:
 * - CSS custom properties (variables) organized by category
 * - Utility classes for common components
 * - Comprehensive comments for maintainability
 * - Proper formatting and indentation
 */

import type { DesignSystem } from '@/types/design-system'

/**
 * Generate CSS custom properties from all design tokens
 */
export function generateCSSVariables(tokens: DesignSystem): string {
  const css: string[] = []

  css.push('/**')
  css.push(` * ${tokens.name || 'Design System'}`)
  css.push(` * Generated: ${new Date().toLocaleString()}`)
  css.push(` * Version: ${tokens.version || '1.0.0'}`)
  css.push(' */')
  css.push('')
  css.push(':root {')

  // Brand Colors
  css.push('  /* ===============================================')
  css.push('     Brand Colors')
  css.push('     =============================================== */')
  css.push('')
  css.push('  /* Primary Color Scale */')
  Object.entries(tokens.colors.primary).forEach(([shade, value]) => {
    css.push(`  --color-primary-${shade}: ${value};`)
  })

  css.push('')
  css.push('  /* Secondary Color Scale */')
  Object.entries(tokens.colors.secondary).forEach(([shade, value]) => {
    css.push(`  --color-secondary-${shade}: ${value};`)
  })

  css.push('')
  css.push('  /* Accent Color Scale */')
  Object.entries(tokens.colors.accent).forEach(([shade, value]) => {
    css.push(`  --color-accent-${shade}: ${value};`)
  })

  // Gray Scale
  css.push('')
  css.push('  /* ===============================================')
  css.push('     Gray Scale')
  css.push('     =============================================== */')
  css.push('')
  Object.entries(tokens.colors.gray).forEach(([shade, value]) => {
    css.push(`  --color-gray-${shade}: ${value};`)
  })

  // Semantic Colors
  css.push('')
  css.push('  /* ===============================================')
  css.push('     Semantic Colors')
  css.push('     =============================================== */')
  css.push('')
  css.push('  /* Success (Positive actions, confirmations) */')
  Object.entries(tokens.colors.success).forEach(([shade, value]) => {
    css.push(`  --color-success-${shade}: ${value};`)
  })

  css.push('')
  css.push('  /* Warning (Caution, important notices) */')
  Object.entries(tokens.colors.warning).forEach(([shade, value]) => {
    css.push(`  --color-warning-${shade}: ${value};`)
  })

  css.push('')
  css.push('  /* Error (Destructive actions, errors) */')
  Object.entries(tokens.colors.error).forEach(([shade, value]) => {
    css.push(`  --color-error-${shade}: ${value};`)
  })

  css.push('')
  css.push('  /* Info (Informational messages) */')
  Object.entries(tokens.colors.info).forEach(([shade, value]) => {
    css.push(`  --color-info-${shade}: ${value};`)
  })

  // Surface Colors
  css.push('')
  css.push('  /* ===============================================')
  css.push('     Surface Colors')
  css.push('     =============================================== */')
  css.push('')
  css.push(`  --color-background: ${tokens.colors.background};`)
  css.push(`  --color-foreground: ${tokens.colors.foreground};`)
  css.push(`  --color-card: ${tokens.colors.card};`)
  css.push(`  --color-card-foreground: ${tokens.colors.cardForeground};`)
  css.push(`  --color-popover: ${tokens.colors.popover};`)
  css.push(`  --color-popover-foreground: ${tokens.colors.popoverForeground};`)
  css.push(`  --color-muted: ${tokens.colors.muted};`)
  css.push(`  --color-muted-foreground: ${tokens.colors.mutedForeground};`)

  // Border & Focus
  css.push('')
  css.push('  /* ===============================================')
  css.push('     Border & Focus Colors')
  css.push('     =============================================== */')
  css.push('')
  css.push(`  --color-border: ${tokens.colors.border};`)
  css.push(`  --color-input: ${tokens.colors.input};`)
  css.push(`  --color-ring: ${tokens.colors.ring};`)

  // Typography - Font Families
  css.push('')
  css.push('  /* ===============================================')
  css.push('     Typography - Font Families')
  css.push('     =============================================== */')
  css.push('')
  css.push(`  --font-sans: ${tokens.typography.fontFamily.sans.join(', ')};`)
  css.push(`  --font-serif: ${tokens.typography.fontFamily.serif.join(', ')};`)
  css.push(`  --font-mono: ${tokens.typography.fontFamily.mono.join(', ')};`)

  // Typography - Font Sizes
  css.push('')
  css.push('  /* ===============================================')
  css.push('     Typography - Font Sizes')
  css.push('     =============================================== */')
  css.push('')
  Object.entries(tokens.typography.fontSize).forEach(([size, value]) => {
    css.push(`  --text-${size}: ${value};`)
  })

  // Typography - Font Weights
  css.push('')
  css.push('  /* ===============================================')
  css.push('     Typography - Font Weights')
  css.push('     =============================================== */')
  css.push('')
  Object.entries(tokens.typography.fontWeight).forEach(([weight, value]) => {
    css.push(`  --font-${weight}: ${value};`)
  })

  // Typography - Line Heights
  css.push('')
  css.push('  /* ===============================================')
  css.push('     Typography - Line Heights')
  css.push('     =============================================== */')
  css.push('')
  Object.entries(tokens.typography.lineHeight).forEach(([height, value]) => {
    css.push(`  --leading-${height}: ${value};`)
  })

  // Typography - Letter Spacing
  css.push('')
  css.push('  /* ===============================================')
  css.push('     Typography - Letter Spacing')
  css.push('     =============================================== */')
  css.push('')
  Object.entries(tokens.typography.letterSpacing).forEach(
    ([spacing, value]) => {
      css.push(`  --tracking-${spacing}: ${value};`)
    },
  )

  // Spacing Scale
  css.push('')
  css.push('  /* ===============================================')
  css.push('     Spacing Scale')
  css.push('     Used for padding, margin, gap, and sizing')
  css.push('     =============================================== */')
  css.push('')
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    css.push(`  --spacing-${key}: ${value};`)
  })

  // Border Radius
  css.push('')
  css.push('  /* ===============================================')
  css.push('     Border Radius')
  css.push('     =============================================== */')
  css.push('')
  Object.entries(tokens.borderRadius).forEach(([size, value]) => {
    css.push(`  --radius-${size}: ${value};`)
  })

  // Box Shadows
  css.push('')
  css.push('  /* ===============================================')
  css.push('     Box Shadows')
  css.push('     Elevation system for layering')
  css.push('     =============================================== */')
  css.push('')
  Object.entries(tokens.boxShadow).forEach(([elevation, value]) => {
    css.push(`  --shadow-${elevation}: ${value};`)
  })

  // Animation - Duration
  css.push('')
  css.push('  /* ===============================================')
  css.push('     Animation - Duration')
  css.push('     =============================================== */')
  css.push('')
  Object.entries(tokens.animation.duration).forEach(([speed, value]) => {
    css.push(`  --duration-${speed}: ${value};`)
  })

  // Animation - Easing
  css.push('')
  css.push('  /* ===============================================')
  css.push('     Animation - Easing Functions')
  css.push('     =============================================== */')
  css.push('')
  Object.entries(tokens.animation.easing).forEach(([type, value]) => {
    css.push(`  --ease-${type}: ${value};`)
  })

  // Z-Index Scale
  css.push('')
  css.push('  /* ===============================================')
  css.push('     Z-Index Scale')
  css.push('     Layering system for overlays')
  css.push('     =============================================== */')
  css.push('')
  Object.entries(tokens.zIndex).forEach(([level, value]) => {
    css.push(`  --z-${level}: ${value};`)
  })

  // Component Tokens
  css.push('')
  css.push('  /* ===============================================')
  css.push('     Component-Specific Tokens')
  css.push('     =============================================== */')
  css.push('')
  css.push('  /* Button */')
  css.push(`  --button-padding-x: ${tokens.components.button.paddingX};`)
  css.push(`  --button-padding-y: ${tokens.components.button.paddingY};`)
  css.push(
    `  --button-border-radius: ${tokens.components.button.borderRadius};`,
  )
  css.push(`  --button-font-weight: ${tokens.components.button.fontWeight};`)

  css.push('')
  css.push('  /* Input */')
  css.push(`  --input-height: ${tokens.components.input.height};`)
  css.push(`  --input-padding-x: ${tokens.components.input.paddingX};`)
  css.push(`  --input-border-radius: ${tokens.components.input.borderRadius};`)
  css.push(`  --input-border-width: ${tokens.components.input.borderWidth};`)

  css.push('')
  css.push('  /* Card */')
  css.push(`  --card-padding: ${tokens.components.card.padding};`)
  css.push(`  --card-border-radius: ${tokens.components.card.borderRadius};`)
  css.push(`  --card-border-width: ${tokens.components.card.borderWidth};`)

  css.push('')
  css.push('  /* Modal */')
  css.push(`  --modal-max-width: ${tokens.components.modal.maxWidth};`)
  css.push(`  --modal-padding: ${tokens.components.modal.padding};`)
  css.push(`  --modal-border-radius: ${tokens.components.modal.borderRadius};`)

  css.push('}')

  return css.join('\n')
}

/**
 * Generate utility classes from design tokens
 */
export function generateUtilityClasses(): string {
  const css: string[] = []

  css.push('')
  css.push('/* ===============================================')
  css.push('   Global Styles')
  css.push('   =============================================== */')
  css.push('')

  css.push('* {')
  css.push('  border-color: var(--color-border);')
  css.push('}')
  css.push('')

  css.push('body {')
  css.push('  background-color: var(--color-background);')
  css.push('  color: var(--color-foreground);')
  css.push('  font-family: var(--font-sans);')
  css.push('  font-size: var(--text-base);')
  css.push('  line-height: var(--leading-normal);')
  css.push('  -webkit-font-smoothing: antialiased;')
  css.push('  -moz-osx-font-smoothing: grayscale;')
  css.push('}')

  // Button Utilities
  css.push('')
  css.push('/* ===============================================')
  css.push('   Button Utilities')
  css.push('   =============================================== */')
  css.push('')

  css.push('.btn {')
  css.push('  display: inline-flex;')
  css.push('  align-items: center;')
  css.push('  justify-content: center;')
  css.push('  gap: var(--spacing-2);')
  css.push('  padding: var(--button-padding-y) var(--button-padding-x);')
  css.push('  font-weight: var(--button-font-weight);')
  css.push('  font-size: var(--text-sm);')
  css.push('  border-radius: var(--button-border-radius);')
  css.push(
    '  transition-property: color, background-color, border-color, box-shadow;',
  )
  css.push('  transition-duration: var(--duration-fast);')
  css.push('  transition-timing-function: var(--ease-inOut);')
  css.push('  cursor: pointer;')
  css.push('  border: none;')
  css.push('  outline: none;')
  css.push('  text-decoration: none;')
  css.push('  white-space: nowrap;')
  css.push('}')
  css.push('')

  css.push('.btn:disabled {')
  css.push('  opacity: 0.5;')
  css.push('  cursor: not-allowed;')
  css.push('  pointer-events: none;')
  css.push('}')
  css.push('')

  css.push('.btn:focus-visible {')
  css.push('  outline: 2px solid var(--color-ring);')
  css.push('  outline-offset: 2px;')
  css.push('}')
  css.push('')

  // Button Variants
  css.push('/* Button Variants */')
  css.push('')

  css.push('.btn-primary {')
  css.push('  background-color: var(--color-primary-500);')
  css.push('  color: white;')
  css.push('}')
  css.push('')

  css.push('.btn-primary:hover:not(:disabled) {')
  css.push('  background-color: var(--color-primary-600);')
  css.push('}')
  css.push('')

  css.push('.btn-primary:active:not(:disabled) {')
  css.push('  background-color: var(--color-primary-700);')
  css.push('}')
  css.push('')

  css.push('.btn-secondary {')
  css.push('  background-color: var(--color-secondary-500);')
  css.push('  color: white;')
  css.push('}')
  css.push('')

  css.push('.btn-secondary:hover:not(:disabled) {')
  css.push('  background-color: var(--color-secondary-600);')
  css.push('}')
  css.push('')

  css.push('.btn-outline {')
  css.push('  background-color: transparent;')
  css.push('  border: 1px solid var(--color-border);')
  css.push('  color: var(--color-foreground);')
  css.push('}')
  css.push('')

  css.push('.btn-outline:hover:not(:disabled) {')
  css.push('  background-color: var(--color-muted);')
  css.push('  border-color: var(--color-foreground);')
  css.push('}')
  css.push('')

  css.push('.btn-ghost {')
  css.push('  background-color: transparent;')
  css.push('  color: var(--color-foreground);')
  css.push('}')
  css.push('')

  css.push('.btn-ghost:hover:not(:disabled) {')
  css.push('  background-color: var(--color-muted);')
  css.push('}')
  css.push('')

  css.push('.btn-destructive {')
  css.push('  background-color: var(--color-error-500);')
  css.push('  color: white;')
  css.push('}')
  css.push('')

  css.push('.btn-destructive:hover:not(:disabled) {')
  css.push('  background-color: var(--color-error-600);')
  css.push('}')

  // Card Utilities
  css.push('')
  css.push('/* ===============================================')
  css.push('   Card Utilities')
  css.push('   =============================================== */')
  css.push('')

  css.push('.card {')
  css.push('  background-color: var(--color-card);')
  css.push('  color: var(--color-card-foreground);')
  css.push('  border-radius: var(--card-border-radius);')
  css.push('  border: var(--card-border-width) solid var(--color-border);')
  css.push('  padding: var(--card-padding);')
  css.push('  box-shadow: var(--shadow-sm);')
  css.push('  transition: box-shadow var(--duration-fast) var(--ease-inOut);')
  css.push('}')
  css.push('')

  css.push('.card:hover {')
  css.push('  box-shadow: var(--shadow-md);')
  css.push('}')
  css.push('')

  css.push('.card-header {')
  css.push('  margin-bottom: var(--spacing-4);')
  css.push('}')
  css.push('')

  css.push('.card-title {')
  css.push('  font-size: var(--text-xl);')
  css.push('  font-weight: var(--font-semibold);')
  css.push('  line-height: var(--leading-tight);')
  css.push('}')
  css.push('')

  css.push('.card-description {')
  css.push('  font-size: var(--text-sm);')
  css.push('  color: var(--color-muted-foreground);')
  css.push('  margin-top: var(--spacing-2);')
  css.push('}')

  // Input Utilities
  css.push('')
  css.push('/* ===============================================')
  css.push('   Input Utilities')
  css.push('   =============================================== */')
  css.push('')

  css.push('.input {')
  css.push('  height: var(--input-height);')
  css.push('  width: 100%;')
  css.push('  padding: 0 var(--input-padding-x);')
  css.push('  border-radius: var(--input-border-radius);')
  css.push('  border: var(--input-border-width) solid var(--color-input);')
  css.push('  background-color: var(--color-background);')
  css.push('  color: var(--color-foreground);')
  css.push('  font-size: var(--text-sm);')
  css.push(
    '  transition: border-color var(--duration-fast) var(--ease-inOut), box-shadow var(--duration-fast) var(--ease-inOut);',
  )
  css.push('}')
  css.push('')

  css.push('.input:focus {')
  css.push('  outline: none;')
  css.push('  border-color: var(--color-ring);')
  css.push('  box-shadow: 0 0 0 2px var(--color-ring);')
  css.push('}')
  css.push('')

  css.push('.input:disabled {')
  css.push('  opacity: 0.5;')
  css.push('  cursor: not-allowed;')
  css.push('}')
  css.push('')

  css.push('.input::placeholder {')
  css.push('  color: var(--color-muted-foreground);')
  css.push('}')
  css.push('')

  css.push('.input-error {')
  css.push('  border-color: var(--color-error-500);')
  css.push('}')
  css.push('')

  css.push('.input-error:focus {')
  css.push('  box-shadow: 0 0 0 2px var(--color-error-200);')
  css.push('}')

  // Badge Utilities
  css.push('')
  css.push('/* ===============================================')
  css.push('   Badge Utilities')
  css.push('   =============================================== */')
  css.push('')

  css.push('.badge {')
  css.push('  display: inline-flex;')
  css.push('  align-items: center;')
  css.push('  padding: 0.125rem 0.625rem;')
  css.push('  font-size: var(--text-xs);')
  css.push('  font-weight: var(--font-medium);')
  css.push('  line-height: 1.5;')
  css.push('  border-radius: var(--radius-full);')
  css.push('  border: 1px solid transparent;')
  css.push('  white-space: nowrap;')
  css.push('}')
  css.push('')

  css.push('.badge-primary {')
  css.push('  background-color: var(--color-primary-100);')
  css.push('  color: var(--color-primary-700);')
  css.push('  border-color: var(--color-primary-200);')
  css.push('}')
  css.push('')

  css.push('.badge-secondary {')
  css.push('  background-color: var(--color-secondary-100);')
  css.push('  color: var(--color-secondary-700);')
  css.push('  border-color: var(--color-secondary-200);')
  css.push('}')
  css.push('')

  css.push('.badge-success {')
  css.push('  background-color: var(--color-success-100);')
  css.push('  color: var(--color-success-700);')
  css.push('  border-color: var(--color-success-200);')
  css.push('}')
  css.push('')

  css.push('.badge-warning {')
  css.push('  background-color: var(--color-warning-100);')
  css.push('  color: var(--color-warning-700);')
  css.push('  border-color: var(--color-warning-200);')
  css.push('}')
  css.push('')

  css.push('.badge-error {')
  css.push('  background-color: var(--color-error-100);')
  css.push('  color: var(--color-error-700);')
  css.push('  border-color: var(--color-error-200);')
  css.push('}')
  css.push('')

  css.push('.badge-outline {')
  css.push('  background-color: transparent;')
  css.push('  color: var(--color-foreground);')
  css.push('  border-color: var(--color-border);')
  css.push('}')

  // Alert Utilities
  css.push('')
  css.push('/* ===============================================')
  css.push('   Alert Utilities')
  css.push('   =============================================== */')
  css.push('')

  css.push('.alert {')
  css.push('  position: relative;')
  css.push('  padding: var(--spacing-4);')
  css.push('  border-radius: var(--radius-md);')
  css.push('  border: 1px solid transparent;')
  css.push('  margin-bottom: var(--spacing-4);')
  css.push('}')
  css.push('')

  css.push('.alert-title {')
  css.push('  font-weight: var(--font-medium);')
  css.push('  margin-bottom: var(--spacing-1);')
  css.push('}')
  css.push('')

  css.push('.alert-description {')
  css.push('  font-size: var(--text-sm);')
  css.push('  opacity: 0.9;')
  css.push('}')
  css.push('')

  css.push('.alert-info {')
  css.push('  background-color: var(--color-info-50);')
  css.push('  color: var(--color-info-900);')
  css.push('  border-color: var(--color-info-200);')
  css.push('}')
  css.push('')

  css.push('.alert-success {')
  css.push('  background-color: var(--color-success-50);')
  css.push('  color: var(--color-success-900);')
  css.push('  border-color: var(--color-success-200);')
  css.push('}')
  css.push('')

  css.push('.alert-warning {')
  css.push('  background-color: var(--color-warning-50);')
  css.push('  color: var(--color-warning-900);')
  css.push('  border-color: var(--color-warning-200);')
  css.push('}')
  css.push('')

  css.push('.alert-error {')
  css.push('  background-color: var(--color-error-50);')
  css.push('  color: var(--color-error-900);')
  css.push('  border-color: var(--color-error-200);')
  css.push('}')

  return css.join('\n')
}

/**
 * Generate complete CSS file from design tokens
 */
export function generateCSS(tokens: DesignSystem): string {
  const variables = generateCSSVariables(tokens)
  const utilities = generateUtilityClasses()

  return `${variables}\n${utilities}`
}

/**
 * Get file size in KB
 */
export function getCSSFileSize(css: string): number {
  // Calculate size in bytes, convert to KB
  const bytes = new Blob([css]).size
  return Math.round((bytes / 1024) * 100) / 100
}

/**
 * Format CSS with proper minification (optional)
 */
export function minifyCSS(css: string): string {
  return (
    css
      // Remove comments
      .replace(/\/\*[\s\S]*?\*\//g, '')
      // Remove extra whitespace
      .replace(/\s+/g, ' ')
      // Remove space around colons
      .replace(/\s*:\s*/g, ':')
      // Remove space around semicolons
      .replace(/\s*;\s*/g, ';')
      // Remove space around braces
      .replace(/\s*{\s*/g, '{')
      .replace(/\s*}\s*/g, '}')
      // Remove trailing semicolons
      .replace(/;}/g, '}')
      .trim()
  )
}
