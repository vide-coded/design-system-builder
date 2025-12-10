/**
 * Style Injection System
 *
 * Converts design tokens to CSS and injects into preview iframe.
 * Updates are debounced for optimal performance (max 60 FPS).
 */

import type { DesignSystem } from '@/types/design-system'

/**
 * Generate CSS variables from design tokens
 */
export function generateCSSVariables(tokens: DesignSystem): string {
  const css: string[] = [':root {']

  // Colors - Primary
  css.push('  /* Brand Colors */')
  Object.entries(tokens.colors.primary).forEach(([shade, value]) => {
    css.push(`  --color-primary-${shade}: ${value};`)
  })

  // Colors - Secondary
  Object.entries(tokens.colors.secondary).forEach(([shade, value]) => {
    css.push(`  --color-secondary-${shade}: ${value};`)
  })

  // Colors - Accent
  Object.entries(tokens.colors.accent).forEach(([shade, value]) => {
    css.push(`  --color-accent-${shade}: ${value};`)
  })

  // Colors - Gray scale
  css.push('  /* Gray Scale */')
  Object.entries(tokens.colors.gray).forEach(([shade, value]) => {
    css.push(`  --color-gray-${shade}: ${value};`)
  })

  // Semantic colors
  css.push('  /* Semantic Colors */')
  Object.entries(tokens.colors.success).forEach(([shade, value]) => {
    css.push(`  --color-success-${shade}: ${value};`)
  })
  Object.entries(tokens.colors.warning).forEach(([shade, value]) => {
    css.push(`  --color-warning-${shade}: ${value};`)
  })
  Object.entries(tokens.colors.error).forEach(([shade, value]) => {
    css.push(`  --color-error-${shade}: ${value};`)
  })
  Object.entries(tokens.colors.info).forEach(([shade, value]) => {
    css.push(`  --color-info-${shade}: ${value};`)
  })

  // Surface colors
  css.push('  /* Surface Colors */')
  css.push(`  --color-background: ${tokens.colors.background};`)
  css.push(`  --color-foreground: ${tokens.colors.foreground};`)
  css.push(`  --color-card: ${tokens.colors.card};`)
  css.push(`  --color-card-foreground: ${tokens.colors.cardForeground};`)
  css.push(`  --color-popover: ${tokens.colors.popover};`)
  css.push(`  --color-popover-foreground: ${tokens.colors.popoverForeground};`)
  css.push(`  --color-muted: ${tokens.colors.muted};`)
  css.push(`  --color-muted-foreground: ${tokens.colors.mutedForeground};`)

  // Border colors
  css.push('  /* Border & Focus Colors */')
  css.push(`  --color-border: ${tokens.colors.border};`)
  css.push(`  --color-input: ${tokens.colors.input};`)
  css.push(`  --color-ring: ${tokens.colors.ring};`)

  // Typography - Font Families
  css.push('  /* Typography - Font Families */')
  css.push(`  --font-sans: ${tokens.typography.fontFamily.sans.join(', ')};`)
  css.push(`  --font-serif: ${tokens.typography.fontFamily.serif.join(', ')};`)
  css.push(`  --font-mono: ${tokens.typography.fontFamily.mono.join(', ')};`)

  // Typography - Font Sizes
  css.push('  /* Typography - Font Sizes */')
  Object.entries(tokens.typography.fontSize).forEach(([size, value]) => {
    css.push(`  --text-${size}: ${value};`)
  })

  // Typography - Font Weights
  css.push('  /* Typography - Font Weights */')
  Object.entries(tokens.typography.fontWeight).forEach(([weight, value]) => {
    css.push(`  --font-${weight}: ${value};`)
  })

  // Typography - Line Heights
  css.push('  /* Typography - Line Heights */')
  Object.entries(tokens.typography.lineHeight).forEach(([height, value]) => {
    css.push(`  --leading-${height}: ${value};`)
  })

  // Typography - Letter Spacing
  css.push('  /* Typography - Letter Spacing */')
  Object.entries(tokens.typography.letterSpacing).forEach(
    ([spacing, value]) => {
      css.push(`  --tracking-${spacing}: ${value};`)
    },
  )

  // Spacing
  css.push('  /* Spacing Scale */')
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    css.push(`  --spacing-${key}: ${value};`)
  })

  // Border Radius
  css.push('  /* Border Radius */')
  Object.entries(tokens.borderRadius).forEach(([size, value]) => {
    css.push(`  --radius-${size}: ${value};`)
  })

  // Box Shadows
  css.push('  /* Box Shadows */')
  Object.entries(tokens.boxShadow).forEach(([elevation, value]) => {
    css.push(`  --shadow-${elevation}: ${value};`)
  })

  // Animations
  css.push('  /* Animations - Duration */')
  Object.entries(tokens.animation.duration).forEach(([speed, value]) => {
    css.push(`  --duration-${speed}: ${value};`)
  })

  css.push('  /* Animations - Easing */')
  Object.entries(tokens.animation.easing).forEach(([type, value]) => {
    css.push(`  --ease-${type}: ${value};`)
  })

  // Z-Index
  css.push('  /* Z-Index Scale */')
  Object.entries(tokens.zIndex).forEach(([level, value]) => {
    css.push(`  --z-${level}: ${value};`)
  })

  // Component tokens
  css.push('  /* Component Tokens */')
  css.push(`  --button-padding-x: ${tokens.components.button.paddingX};`)
  css.push(`  --button-padding-y: ${tokens.components.button.paddingY};`)
  css.push(
    `  --button-border-radius: ${tokens.components.button.borderRadius};`,
  )
  css.push(`  --button-font-weight: ${tokens.components.button.fontWeight};`)

  css.push(`  --input-height: ${tokens.components.input.height};`)
  css.push(`  --input-padding-x: ${tokens.components.input.paddingX};`)
  css.push(`  --input-border-radius: ${tokens.components.input.borderRadius};`)
  css.push(`  --input-border-width: ${tokens.components.input.borderWidth};`)

  css.push(`  --card-padding: ${tokens.components.card.padding};`)
  css.push(`  --card-border-radius: ${tokens.components.card.borderRadius};`)
  css.push(`  --card-border-width: ${tokens.components.card.borderWidth};`)

  css.push(`  --modal-max-width: ${tokens.components.modal.maxWidth};`)
  css.push(`  --modal-padding: ${tokens.components.modal.padding};`)
  css.push(`  --modal-border-radius: ${tokens.components.modal.borderRadius};`)

  css.push('}')

  return css.join('\n')
}

/**
 * Generate utility classes from design tokens
 */
export function generateUtilityClasses(_tokens: DesignSystem): string {
  const css: string[] = []

  // Global styles
  css.push(`
* {
  border-color: var(--color-border);
}

body {
  background-color: var(--color-background);
  color: var(--color-foreground);
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
}`)

  // Button utilities
  css.push(`
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--button-padding-y) var(--button-padding-x);
  font-weight: var(--button-font-weight);
  border-radius: var(--button-border-radius);
  transition-property: color, background-color, border-color, box-shadow;
  transition-duration: var(--duration-fast);
  transition-timing-function: var(--ease-inOut);
  cursor: pointer;
  border: none;
  outline: none;
}

.btn:focus-visible {
  outline: 2px solid var(--color-ring);
  outline-offset: 2px;
}

.btn-primary {
  background-color: var(--color-primary-500);
  color: white;
}

.btn-primary:hover {
  background-color: var(--color-primary-600);
}

.btn-secondary {
  background-color: var(--color-secondary-500);
  color: white;
}

.btn-secondary:hover {
  background-color: var(--color-secondary-600);
}

.btn-outline {
  background-color: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-foreground);
}

.btn-outline:hover {
  background-color: var(--color-muted);
}

.btn-ghost {
  background-color: transparent;
  color: var(--color-foreground);
}

.btn-ghost:hover {
  background-color: var(--color-muted);
}`)

  // Card utilities
  css.push(`
.card {
  background-color: var(--color-card);
  color: var(--color-card-foreground);
  border-radius: var(--card-border-radius);
  border: var(--card-border-width) solid var(--color-border);
  padding: var(--card-padding);
  box-shadow: var(--shadow-sm);
}

.card:hover {
  box-shadow: var(--shadow-md);
}`)

  // Input utilities
  css.push(`
.input {
  height: var(--input-height);
  width: 100%;
  padding: 0 var(--input-padding-x);
  border-radius: var(--input-border-radius);
  border: var(--input-border-width) solid var(--color-input);
  background-color: var(--color-background);
  color: var(--color-foreground);
  font-size: var(--text-sm);
  transition: border-color var(--duration-fast) var(--ease-inOut);
}

.input:focus {
  outline: none;
  border-color: var(--color-ring);
  box-shadow: 0 0 0 2px var(--color-ring);
}

.input::placeholder {
  color: var(--color-muted-foreground);
}`)

  // Badge utilities
  css.push(`
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.125rem 0.625rem;
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  border-radius: var(--radius-full);
  border: 1px solid transparent;
}

.badge-primary {
  background-color: var(--color-primary-100);
  color: var(--color-primary-700);
  border-color: var(--color-primary-200);
}

.badge-success {
  background-color: var(--color-success-100);
  color: var(--color-success-700);
  border-color: var(--color-success-200);
}

.badge-warning {
  background-color: var(--color-warning-100);
  color: var(--color-warning-700);
  border-color: var(--color-warning-200);
}

.badge-error {
  background-color: var(--color-error-100);
  color: var(--color-error-700);
  border-color: var(--color-error-200);
}`)

  // Alert utilities
  css.push(`
.alert {
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  margin-bottom: var(--spacing-4);
}

.alert-info {
  background-color: var(--color-info-50);
  color: var(--color-info-900);
  border-color: var(--color-info-200);
}

.alert-success {
  background-color: var(--color-success-50);
  color: var(--color-success-900);
  border-color: var(--color-success-200);
}

.alert-warning {
  background-color: var(--color-warning-50);
  color: var(--color-warning-900);
  border-color: var(--color-warning-200);
}

.alert-error {
  background-color: var(--color-error-50);
  color: var(--color-error-900);
  border-color: var(--color-error-200);
}`)

  return css.join('\n')
}

/**
 * Generate complete CSS string from design tokens
 */
export function generateCSS(tokens: DesignSystem): string {
  const variables = generateCSSVariables(tokens)
  const utilities = generateUtilityClasses(tokens)

  return `${variables}\n\n${utilities}`
}

/**
 * Inject CSS into iframe document
 */
export function injectStylesIntoIframe(
  iframe: HTMLIFrameElement,
  css: string,
): void {
  if (!iframe.contentDocument) {
    console.warn('Cannot inject styles: iframe document not ready')
    return
  }

  const doc = iframe.contentDocument

  // Find existing style tag or create new one
  let styleTag = doc.getElementById(
    'design-system-styles',
  ) as HTMLStyleElement | null

  if (!styleTag) {
    styleTag = doc.createElement('style')
    styleTag.id = 'design-system-styles'
    doc.head.appendChild(styleTag)
  }

  // Update styles
  styleTag.textContent = css
}

/**
 * Debounced style injection for performance
 */
export function createDebouncedStyleInjector(
  iframe: HTMLIFrameElement,
  delay = 16, // 60 FPS max
): (tokens: DesignSystem) => void {
  let timeoutId: number | null = null

  return (tokens: DesignSystem) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId)
    }

    timeoutId = window.setTimeout(() => {
      const css = generateCSS(tokens)
      injectStylesIntoIframe(iframe, css)
      timeoutId = null
    }, delay)
  }
}
