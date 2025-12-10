/**
 * Zod Validation Schemas for Design System
 */

import { z } from 'zod'

// Color validation (hex, rgb, hsl, or CSS color name)
const colorSchema = z.string().regex(/^(#[0-9A-Fa-f]{3,8}|rgb|hsl|[a-z]+)/)

// Color scale validation
const colorScaleSchema = z.object({
  50: colorSchema,
  100: colorSchema,
  200: colorSchema,
  300: colorSchema,
  400: colorSchema,
  500: colorSchema,
  600: colorSchema,
  700: colorSchema,
  800: colorSchema,
  900: colorSchema,
  950: colorSchema,
})

// Colors validation
const colorsSchema = z.object({
  primary: colorScaleSchema,
  secondary: colorScaleSchema,
  accent: colorScaleSchema,
  gray: colorScaleSchema,
  success: colorScaleSchema,
  warning: colorScaleSchema,
  error: colorScaleSchema,
  info: colorScaleSchema,
  background: colorSchema,
  foreground: colorSchema,
  card: colorSchema,
  cardForeground: colorSchema,
  popover: colorSchema,
  popoverForeground: colorSchema,
  muted: colorSchema,
  mutedForeground: colorSchema,
  border: colorSchema,
  input: colorSchema,
  ring: colorSchema,
})

// Typography validation
const typographySchema = z.object({
  fontFamily: z.object({
    sans: z.array(z.string()),
    serif: z.array(z.string()),
    mono: z.array(z.string()),
  }),
  fontSize: z.object({
    xs: z.string(),
    sm: z.string(),
    base: z.string(),
    lg: z.string(),
    xl: z.string(),
    '2xl': z.string(),
    '3xl': z.string(),
    '4xl': z.string(),
    '5xl': z.string(),
    '6xl': z.string(),
    '7xl': z.string(),
    '8xl': z.string(),
    '9xl': z.string(),
  }),
  fontWeight: z.object({
    thin: z.number().min(100).max(900),
    extralight: z.number().min(100).max(900),
    light: z.number().min(100).max(900),
    normal: z.number().min(100).max(900),
    medium: z.number().min(100).max(900),
    semibold: z.number().min(100).max(900),
    bold: z.number().min(100).max(900),
    extrabold: z.number().min(100).max(900),
    black: z.number().min(100).max(900),
  }),
  lineHeight: z.object({
    none: z.number(),
    tight: z.number(),
    snug: z.number(),
    normal: z.number(),
    relaxed: z.number(),
    loose: z.number(),
  }),
  letterSpacing: z.object({
    tighter: z.string(),
    tight: z.string(),
    normal: z.string(),
    wide: z.string(),
    wider: z.string(),
    widest: z.string(),
  }),
})

// Spacing validation
const spacingSchema = z.object({
  0: z.string(),
  px: z.string(),
  0.5: z.string(),
  1: z.string(),
  1.5: z.string(),
  2: z.string(),
  2.5: z.string(),
  3: z.string(),
  3.5: z.string(),
  4: z.string(),
  5: z.string(),
  6: z.string(),
  7: z.string(),
  8: z.string(),
  9: z.string(),
  10: z.string(),
  11: z.string(),
  12: z.string(),
  14: z.string(),
  16: z.string(),
  20: z.string(),
  24: z.string(),
  28: z.string(),
  32: z.string(),
  36: z.string(),
  40: z.string(),
  44: z.string(),
  48: z.string(),
  52: z.string(),
  56: z.string(),
  60: z.string(),
  64: z.string(),
  72: z.string(),
  80: z.string(),
  96: z.string(),
})

// Border radius validation
const borderRadiusSchema = z.object({
  none: z.string(),
  sm: z.string(),
  base: z.string(),
  md: z.string(),
  lg: z.string(),
  xl: z.string(),
  '2xl': z.string(),
  '3xl': z.string(),
  full: z.string(),
})

// Box shadow validation
const boxShadowSchema = z.object({
  sm: z.string(),
  base: z.string(),
  md: z.string(),
  lg: z.string(),
  xl: z.string(),
  '2xl': z.string(),
  inner: z.string(),
  none: z.string(),
})

// Animation validation
const animationSchema = z.object({
  duration: z.object({
    fast: z.string(),
    normal: z.string(),
    slow: z.string(),
  }),
  easing: z.object({
    linear: z.string(),
    in: z.string(),
    out: z.string(),
    inOut: z.string(),
  }),
})

// Z-index validation
const zIndexSchema = z.object({
  0: z.number(),
  10: z.number(),
  20: z.number(),
  30: z.number(),
  40: z.number(),
  50: z.number(),
  auto: z.literal('auto'),
})

// Component tokens validation
const componentTokensSchema = z.object({
  button: z.object({
    paddingX: z.string(),
    paddingY: z.string(),
    borderRadius: z.string(),
    fontWeight: z.number().min(100).max(900),
  }),
  input: z.object({
    height: z.string(),
    paddingX: z.string(),
    borderRadius: z.string(),
    borderWidth: z.string(),
  }),
  card: z.object({
    padding: z.string(),
    borderRadius: z.string(),
    borderWidth: z.string(),
  }),
  modal: z.object({
    maxWidth: z.string(),
    padding: z.string(),
    borderRadius: z.string(),
  }),
})

// Main design system validation
export const designSystemSchema = z.object({
  name: z.string().min(1),
  version: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  colors: colorsSchema,
  typography: typographySchema,
  spacing: spacingSchema,
  borderRadius: borderRadiusSchema,
  boxShadow: boxShadowSchema,
  animation: animationSchema,
  zIndex: zIndexSchema,
  components: componentTokensSchema,
})

export type ValidatedDesignSystem = z.infer<typeof designSystemSchema>

/**
 * Validate design system
 */
export function validateDesignSystem(data: unknown) {
  return designSystemSchema.parse(data)
}

/**
 * Safe validation that returns errors instead of throwing
 */
export function safeValidateDesignSystem(data: unknown) {
  return designSystemSchema.safeParse(data)
}
