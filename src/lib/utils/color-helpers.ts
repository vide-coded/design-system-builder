import type { ColorScale } from '@/types/design-system'

/**
 * Gets the default color value from a color token.
 * If the token is a ColorScale (object with 50-950 shades), returns the 500 shade (DEFAULT).
 * If the token is already a string (hex color), returns it as-is.
 */
export function getColorValue(color: string | ColorScale): string {
  if (typeof color === 'string') {
    return color
  }
  return color[500] || color[600] || '#000000' // Fallback to 500 or 600 shade
}

/**
 * Gets a specific shade from a color token.
 * If the token is a ColorScale, returns the requested shade.
 * If the token is a string, returns it as-is.
 */
export function getColorShade(
  color: string | ColorScale,
  shade: keyof ColorScale = 500,
): string {
  if (typeof color === 'string') {
    return color
  }
  return color[shade] || color[500] || '#000000' // Fallback to requested shade, then 500
}
