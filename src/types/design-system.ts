/**
 * Design System Type Definitions
 * Comprehensive types for all design tokens
 */

export interface ColorScale {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string // base
  600: string
  700: string
  800: string
  900: string
  950: string
}

export interface GrayScale {
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
}

export interface Colors {
  // Brand colors
  primary: ColorScale
  secondary: ColorScale
  accent: ColorScale

  // Gray scale
  gray: GrayScale

  // Semantic colors
  success: ColorScale
  warning: ColorScale
  error: ColorScale
  info: ColorScale

  // Surface colors
  background: string
  foreground: string
  card: string
  cardForeground: string
  popover: string
  popoverForeground: string
  muted: string
  mutedForeground: string

  // Border colors
  border: string
  input: string
  ring: string
}

export interface FontFamily {
  sans: string[]
  serif: string[]
  mono: string[]
}

export interface FontSize {
  xs: string
  sm: string
  base: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
  '4xl': string
  '5xl': string
  '6xl': string
  '7xl': string
  '8xl': string
  '9xl': string
}

export interface FontWeight {
  thin: number
  extralight: number
  light: number
  normal: number
  medium: number
  semibold: number
  bold: number
  extrabold: number
  black: number
}

export interface LineHeight {
  none: number
  tight: number
  snug: number
  normal: number
  relaxed: number
  loose: number
}

export interface LetterSpacing {
  tighter: string
  tight: string
  normal: string
  wide: string
  wider: string
  widest: string
}

export interface Typography {
  fontFamily: FontFamily
  fontSize: FontSize
  fontWeight: FontWeight
  lineHeight: LineHeight
  letterSpacing: LetterSpacing
}

export interface Spacing {
  0: string
  px: string
  0.5: string
  1: string
  1.5: string
  2: string
  2.5: string
  3: string
  3.5: string
  4: string
  5: string
  6: string
  7: string
  8: string
  9: string
  10: string
  11: string
  12: string
  14: string
  16: string
  20: string
  24: string
  28: string
  32: string
  36: string
  40: string
  44: string
  48: string
  52: string
  56: string
  60: string
  64: string
  72: string
  80: string
  96: string
}

export interface BorderRadius {
  none: string
  sm: string
  base: string
  md: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
  full: string
}

export interface BoxShadow {
  sm: string
  base: string
  md: string
  lg: string
  xl: string
  '2xl': string
  inner: string
  none: string
}

export interface Animation {
  duration: {
    fast: string
    normal: string
    slow: string
  }
  easing: {
    linear: string
    in: string
    out: string
    inOut: string
  }
}

export interface ZIndex {
  0: number
  10: number
  20: number
  30: number
  40: number
  50: number
  auto: string
}

export interface ComponentTokens {
  button: {
    paddingX: string
    paddingY: string
    borderRadius: string
    fontWeight: number
  }
  input: {
    height: string
    paddingX: string
    borderRadius: string
    borderWidth: string
  }
  card: {
    padding: string
    borderRadius: string
    borderWidth: string
  }
  modal: {
    maxWidth: string
    padding: string
    borderRadius: string
  }
}

export interface DesignSystem {
  // Metadata
  name: string
  version: string
  createdAt: string
  updatedAt: string

  // Design tokens
  colors: Colors
  typography: Typography
  spacing: Spacing
  borderRadius: BorderRadius
  boxShadow: BoxShadow
  animation: Animation
  zIndex: ZIndex
  components: ComponentTokens
}

export type DesignSystemSection =
  | 'colors'
  | 'typography'
  | 'spacing'
  | 'borders'
  | 'shadows'
  | 'animations'
  | 'components'

export type ComponentCategory =
  | 'buttons'
  | 'forms'
  | 'cards'
  | 'navigation'
  | 'feedback'
  | 'overlays'
  | 'data'
  | 'typography'
  | 'layout'
  | 'advanced'

export interface ComponentMetadata {
  id: string
  name: string
  category: ComponentCategory
  description: string
  complexity: 'simple' | 'medium' | 'complex'
  tags: string[]
}
