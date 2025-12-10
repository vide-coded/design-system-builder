/**
 * Color utility functions for design system builder
 * Handles color manipulation, conversion, and scale generation
 */

/**
 * Convert hex color to RGB object
 */
export function hexToRgb(
  hex: string,
): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
      }
    : null
}

/**
 * Convert RGB to hex color
 */
export function rgbToHex(r: number, g: number, b: number): string {
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')}`
}

/**
 * Convert hex to HSL
 */
export function hexToHsl(
  hex: string,
): { h: number; s: number; l: number } | null {
  const rgb = hexToRgb(hex)
  if (!rgb) return null

  const r = rgb.r / 255
  const g = rgb.g / 255
  const b = rgb.b / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6
        break
      case g:
        h = ((b - r) / d + 2) / 6
        break
      case b:
        h = ((r - g) / d + 4) / 6
        break
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}

/**
 * Convert HSL to hex
 */
export function hslToHex(h: number, s: number, l: number): string {
  const hNorm = h / 360
  const sNorm = s / 100
  const lNorm = l / 100

  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }

  let r: number
  let g: number
  let b: number

  if (sNorm === 0) {
    r = g = b = lNorm
  } else {
    const q = lNorm < 0.5 ? lNorm * (1 + sNorm) : lNorm + sNorm - lNorm * sNorm
    const p = 2 * lNorm - q
    r = hue2rgb(p, q, hNorm + 1 / 3)
    g = hue2rgb(p, q, hNorm)
    b = hue2rgb(p, q, hNorm - 1 / 3)
  }

  return rgbToHex(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255))
}

/**
 * Lighten a color by a percentage
 */
export function lighten(hex: string, percent: number): string {
  const hsl = hexToHsl(hex)
  if (!hsl) return hex

  const newL = Math.min(100, hsl.l + percent)
  return hslToHex(hsl.h, hsl.s, newL)
}

/**
 * Darken a color by a percentage
 */
export function darken(hex: string, percent: number): string {
  const hsl = hexToHsl(hex)
  if (!hsl) return hex

  const newL = Math.max(0, hsl.l - percent)
  return hslToHex(hsl.h, hsl.s, newL)
}

/**
 * Adjust saturation of a color
 */
export function adjustSaturation(hex: string, percent: number): string {
  const hsl = hexToHsl(hex)
  if (!hsl) return hex

  const newS = Math.max(0, Math.min(100, hsl.s + percent))
  return hslToHex(hsl.h, newS, hsl.l)
}

/**
 * Generate a complete color scale (50-950) from a base color
 * Uses lightness and saturation adjustments for natural-looking scales
 */
export function generateColorScale(baseHex: string): {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  950: string
} {
  const hsl = hexToHsl(baseHex)
  if (!hsl) {
    // Fallback to gray scale if invalid color
    return {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
      950: '#09090b',
    }
  }

  // Use the base as 500
  const base = { h: hsl.h, s: hsl.s, l: hsl.l }

  // Generate lighter shades (50-400)
  // Progressively increase lightness and slightly decrease saturation for lighter shades
  const scale = {
    50: hslToHex(base.h, Math.max(base.s - 30, 20), 97),
    100: hslToHex(base.h, Math.max(base.s - 25, 25), 94),
    200: hslToHex(base.h, Math.max(base.s - 20, 30), 88),
    300: hslToHex(base.h, Math.max(base.s - 15, 35), 78),
    400: hslToHex(base.h, Math.max(base.s - 10, 40), 65),
    500: baseHex, // Original color
    600: hslToHex(base.h, Math.min(base.s + 5, 100), Math.max(base.l - 10, 40)),
    700: hslToHex(base.h, Math.min(base.s + 8, 100), Math.max(base.l - 20, 30)),
    800: hslToHex(
      base.h,
      Math.min(base.s + 10, 100),
      Math.max(base.l - 30, 20),
    ),
    900: hslToHex(
      base.h,
      Math.min(base.s + 12, 100),
      Math.max(base.l - 40, 12),
    ),
    950: hslToHex(base.h, Math.min(base.s + 15, 100), Math.max(base.l - 48, 7)),
  }

  return scale
}

/**
 * Check if a color is light or dark (for determining text color)
 */
export function isLightColor(hex: string): boolean {
  const rgb = hexToRgb(hex)
  if (!rgb) return true

  // Calculate relative luminance
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255
  return luminance > 0.5
}

/**
 * Get contrast ratio between two colors (WCAG)
 */
export function getContrastRatio(hex1: string, hex2: string): number {
  const rgb1 = hexToRgb(hex1)
  const rgb2 = hexToRgb(hex2)
  if (!rgb1 || !rgb2) return 1

  const getLuminance = (rgb: { r: number; g: number; b: number }) => {
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((val) => {
      const v = val / 255
      return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
    })
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }

  const lum1 = getLuminance(rgb1)
  const lum2 = getLuminance(rgb2)

  const lighter = Math.max(lum1, lum2)
  const darker = Math.min(lum1, lum2)

  return (lighter + 0.05) / (darker + 0.05)
}

/**
 * Check if color contrast meets WCAG AA standards
 */
export function meetsWCAGAA(
  foreground: string,
  background: string,
  isLargeText = false,
): boolean {
  const ratio = getContrastRatio(foreground, background)
  return isLargeText ? ratio >= 3 : ratio >= 4.5
}

/**
 * Validate hex color format
 */
export function isValidHex(hex: string): boolean {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex)
}

/**
 * Normalize hex color (ensure # prefix and 6 characters)
 */
export function normalizeHex(hex: string): string {
  let normalized = hex.trim()

  // Add # if missing
  if (!normalized.startsWith('#')) {
    normalized = `#${normalized}`
  }

  // Expand shorthand (e.g., #03F -> #0033FF)
  if (normalized.length === 4) {
    normalized = `#${normalized[1]}${normalized[1]}${normalized[2]}${normalized[2]}${normalized[3]}${normalized[3]}`
  }

  return normalized.toLowerCase()
}
