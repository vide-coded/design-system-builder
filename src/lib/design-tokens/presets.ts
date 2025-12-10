/**
 * Pre-built Design System Presets
 *
 * These are production-ready design systems that users can load instantly.
 * Each preset is a complete DesignSystem with all tokens defined.
 */

import type { DesignSystem } from '@/types/design-system'
import { defaultDesignSystem } from './defaults'

/**
 * shadcn/ui Default Theme
 * Clean, modern design system inspired by shadcn/ui
 */
export const shadcnPreset: DesignSystem = defaultDesignSystem

/**
 * Pico CSS Inspired Theme
 * Minimal, semantic, elegant design system
 */
export const picoPreset: DesignSystem = {
  name: 'Pico CSS',
  version: '1.0.0',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),

  colors: {
    primary: {
      50: '#e6f4ff',
      100: '#bae0ff',
      200: '#91caff',
      300: '#69b1ff',
      400: '#4096ff',
      500: '#1677ff', // base
      600: '#0958d9',
      700: '#003eb3',
      800: '#002c8c',
      900: '#001d66',
      950: '#001233',
    },
    secondary: {
      50: '#f0f0f0',
      100: '#e0e0e0',
      200: '#c0c0c0',
      300: '#a0a0a0',
      400: '#808080',
      500: '#606060',
      600: '#505050',
      700: '#404040',
      800: '#303030',
      900: '#202020',
      950: '#101010',
    },
    accent: {
      50: '#fff7e6',
      100: '#ffe7ba',
      200: '#ffd591',
      300: '#ffc069',
      400: '#ffa940',
      500: '#ff9000', // base
      600: '#d96704',
      700: '#b35200',
      800: '#8c3d00',
      900: '#662800',
      950: '#331400',
    },
    gray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      950: '#141414',
    },
    success: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49',
    },
    warning: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#eab308',
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
      900: '#713f12',
      950: '#422006',
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a',
    },
    info: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
    background: '#ffffff',
    foreground: '#1a1a1a',
    card: '#ffffff',
    cardForeground: '#1a1a1a',
    popover: '#ffffff',
    popoverForeground: '#1a1a1a',
    muted: '#f5f5f5',
    mutedForeground: '#737373',
    border: '#e5e5e5',
    input: '#e5e5e5',
    ring: '#1677ff',
  },

  typography: {
    fontFamily: {
      sans: [
        'Inter',
        'system-ui',
        'Avenir',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
      serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },

  spacing: {
    0: '0',
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },

  borderRadius: {
    none: '0',
    sm: '0.25rem',
    base: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    full: '9999px',
  },

  boxShadow: {
    none: 'none',
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  },

  animation: {
    duration: {
      fast: '150ms',
      normal: '250ms',
      slow: '350ms',
    },
    easing: {
      linear: 'cubic-bezier(0, 0, 1, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },

  zIndex: {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    auto: 'auto',
  },

  components: {
    button: {
      height: '2.5rem',
      paddingX: '1rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      borderRadius: '0.375rem',
    },
    input: {
      height: '2.5rem',
      paddingX: '0.75rem',
      fontSize: '0.875rem',
      borderRadius: '0.375rem',
    },
    card: {
      padding: '1.5rem',
      borderRadius: '0.75rem',
    },
    modal: {
      backdropBlur: '4px',
      maxWidth: '32rem',
    },
  },
}

/**
 * Tailwind CSS Default Theme
 * Complete Tailwind v3+ color palette
 */
export const tailwindPreset: DesignSystem = {
  name: 'Tailwind CSS',
  version: '1.0.0',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),

  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9', // sky-500
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49',
    },
    secondary: {
      50: '#fafaf9',
      100: '#f5f5f4',
      200: '#e7e5e4',
      300: '#d6d3d1',
      400: '#a8a29e',
      500: '#78716c', // stone-500
      600: '#57534e',
      700: '#44403c',
      800: '#292524',
      900: '#1c1917',
      950: '#0c0a09',
    },
    accent: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef', // fuchsia-500
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
      950: '#4a044e',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
    },
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e', // green-500
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16',
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b', // amber-500
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03',
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444', // red-500
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a',
    },
    info: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6', // blue-500
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
    background: '#ffffff',
    foreground: '#0f172a',
    card: '#ffffff',
    cardForeground: '#0f172a',
    popover: '#ffffff',
    popoverForeground: '#0f172a',
    muted: '#f1f5f9',
    mutedForeground: '#64748b',
    border: '#e2e8f0',
    input: '#e2e8f0',
    ring: '#0ea5e9',
  },

  typography: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      serif: ['ui-serif', 'Georgia', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },

  spacing: {
    0: '0px',
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },

  borderRadius: {
    none: '0px',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },

  boxShadow: {
    none: '0 0 #0000',
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.06)',
  },

  animation: {
    duration: {
      fast: '150ms',
      normal: '200ms',
      slow: '300ms',
    },
    easing: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },

  zIndex: {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    auto: 'auto',
  },

  components: {
    button: {
      height: '2.5rem',
      paddingX: '1rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      borderRadius: '0.25rem',
    },
    input: {
      height: '2.5rem',
      paddingX: '0.75rem',
      fontSize: '0.875rem',
      borderRadius: '0.25rem',
    },
    card: {
      padding: '1.5rem',
      borderRadius: '0.5rem',
    },
    modal: {
      backdropBlur: '8px',
      maxWidth: '32rem',
    },
  },
}

/**
 * Material Design 3 Inspired Theme
 * Modern, colorful, elevation-based design system
 */
export const materialPreset: DesignSystem = {
  name: 'Material Design',
  version: '1.0.0',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),

  colors: {
    primary: {
      50: '#e8f5e9',
      100: '#c8e6c9',
      200: '#a5d6a7',
      300: '#81c784',
      400: '#66bb6a',
      500: '#4caf50', // base
      600: '#43a047',
      700: '#388e3c',
      800: '#2e7d32',
      900: '#1b5e20',
      950: '#0d3818',
    },
    secondary: {
      50: '#fce4ec',
      100: '#f8bbd0',
      200: '#f48fb1',
      300: '#f06292',
      400: '#ec407a',
      500: '#e91e63', // base
      600: '#d81b60',
      700: '#c2185b',
      800: '#ad1457',
      900: '#880e4f',
      950: '#4a0728',
    },
    accent: {
      50: '#e1f5fe',
      100: '#b3e5fc',
      200: '#81d4fa',
      300: '#4fc3f7',
      400: '#29b6f6',
      500: '#03a9f4', // base
      600: '#039be5',
      700: '#0288d1',
      800: '#0277bd',
      900: '#01579b',
      950: '#002f53',
    },
    gray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      950: '#121212',
    },
    success: {
      50: '#e8f5e9',
      100: '#c8e6c9',
      200: '#a5d6a7',
      300: '#81c784',
      400: '#66bb6a',
      500: '#4caf50',
      600: '#43a047',
      700: '#388e3c',
      800: '#2e7d32',
      900: '#1b5e20',
      950: '#0d3818',
    },
    warning: {
      50: '#fff8e1',
      100: '#ffecb3',
      200: '#ffe082',
      300: '#ffd54f',
      400: '#ffca28',
      500: '#ffc107',
      600: '#ffb300',
      700: '#ffa000',
      800: '#ff8f00',
      900: '#ff6f00',
      950: '#803800',
    },
    error: {
      50: '#ffebee',
      100: '#ffcdd2',
      200: '#ef9a9a',
      300: '#e57373',
      400: '#ef5350',
      500: '#f44336',
      600: '#e53935',
      700: '#d32f2f',
      800: '#c62828',
      900: '#b71c1c',
      950: '#5c0e0e',
    },
    info: {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
      950: '#072451',
    },
    background: '#fafafa',
    foreground: '#212121',
    card: '#ffffff',
    cardForeground: '#212121',
    popover: '#ffffff',
    popoverForeground: '#212121',
    muted: '#f5f5f5',
    mutedForeground: '#616161',
    border: '#e0e0e0',
    input: '#e0e0e0',
    ring: '#4caf50',
  },

  typography: {
    fontFamily: {
      sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Roboto Slab', 'Georgia', 'serif'],
      mono: ['Roboto Mono', 'Courier New', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.125rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },

  spacing: {
    0: '0',
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },

  borderRadius: {
    none: '0',
    sm: '0.25rem',
    base: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    full: '9999px',
  },

  boxShadow: {
    none: 'none',
    sm: '0 2px 4px rgba(0, 0, 0, 0.12)',
    base: '0 4px 8px rgba(0, 0, 0, 0.12)',
    md: '0 6px 12px rgba(0, 0, 0, 0.15)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.15)',
    xl: '0 12px 24px rgba(0, 0, 0, 0.18)',
    '2xl': '0 16px 32px rgba(0, 0, 0, 0.20)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
  },

  animation: {
    duration: {
      fast: '200ms',
      normal: '300ms',
      slow: '400ms',
    },
    easing: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },

  zIndex: {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    auto: 'auto',
  },

  components: {
    button: {
      height: '2.25rem',
      paddingX: '1rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      borderRadius: '0.25rem',
    },
    input: {
      height: '3.5rem',
      paddingX: '1rem',
      fontSize: '1rem',
      borderRadius: '0.25rem',
    },
    card: {
      padding: '1rem',
      borderRadius: '0.5rem',
    },
    modal: {
      backdropBlur: '0px',
      maxWidth: '35rem',
    },
  },
}

/**
 * Bootstrap 5 Inspired Theme
 * Classic, familiar design system
 */
export const bootstrapPreset: DesignSystem = {
  name: 'Bootstrap',
  version: '1.0.0',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),

  colors: {
    primary: {
      50: '#e7f1ff',
      100: '#cfe2ff',
      200: '#9ec5fe',
      300: '#6ea8fe',
      400: '#3d8bfd',
      500: '#0d6efd', // base
      600: '#0a58ca',
      700: '#084298',
      800: '#052c65',
      900: '#031633',
      950: '#020b1a',
    },
    secondary: {
      50: '#f8f9fa',
      100: '#e9ecef',
      200: '#dee2e6',
      300: '#ced4da',
      400: '#adb5bd',
      500: '#6c757d', // base
      600: '#5c636a',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
      950: '#111316',
    },
    accent: {
      50: '#fcf3cf',
      100: '#f9e79f',
      200: '#f7dc6f',
      300: '#f4d03f',
      400: '#f1c40f',
      500: '#d4ac0d', // base
      600: '#b7950b',
      700: '#9a7d0a',
      800: '#7d6608',
      900: '#614e06',
      950: '#443703',
    },
    gray: {
      50: '#f8f9fa',
      100: '#e9ecef',
      200: '#dee2e6',
      300: '#ced4da',
      400: '#adb5bd',
      500: '#6c757d',
      600: '#495057',
      700: '#343a40',
      800: '#212529',
      900: '#0d0f11',
      950: '#060708',
    },
    success: {
      50: '#d1e7dd',
      100: '#badbcc',
      200: '#a3cfbb',
      300: '#8bc3aa',
      400: '#74b799',
      500: '#198754', // base
      600: '#157347',
      700: '#0f5132',
      800: '#0a3622',
      900: '#051b11',
      950: '#020d08',
    },
    warning: {
      50: '#fff3cd',
      100: '#ffecb5',
      200: '#ffe69c',
      300: '#ffdf84',
      400: '#ffd96b',
      500: '#ffc107', // base
      600: '#e0a800',
      700: '#c69500',
      800: '#997404',
      900: '#664d03',
      950: '#332701',
    },
    error: {
      50: '#f8d7da',
      100: '#f5c2c7',
      200: '#f1aeb5',
      300: '#ea868f',
      400: '#e35d6a',
      500: '#dc3545', // base
      600: '#b02a37',
      700: '#842029',
      800: '#58151c',
      900: '#2c0b0e',
      950: '#160507',
    },
    info: {
      50: '#cfe2ff',
      100: '#b6d4fe',
      200: '#9ec5fe',
      300: '#6ea8fe',
      400: '#3d8bfd',
      500: '#0dcaf0', // base
      600: '#31d2f2',
      700: '#087990',
      800: '#055160',
      900: '#032830',
      950: '#011418',
    },
    background: '#ffffff',
    foreground: '#212529',
    card: '#ffffff',
    cardForeground: '#212529',
    popover: '#ffffff',
    popoverForeground: '#212529',
    muted: '#f8f9fa',
    mutedForeground: '#6c757d',
    border: '#dee2e6',
    input: '#ced4da',
    ring: '#0d6efd',
  },

  typography: {
    fontFamily: {
      sans: [
        'system-ui',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
      ],
      serif: ['Georgia', 'Times New Roman', 'serif'],
      mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
      '6xl': '3rem',
      '7xl': '3.5rem',
      '8xl': '4rem',
      '9xl': '4.5rem',
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },

  spacing: {
    0: '0',
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },

  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '1rem',
    '2xl': '2rem',
    '3xl': '3rem',
    full: '50rem',
  },

  boxShadow: {
    none: 'none',
    sm: '0 .125rem .25rem rgba(0,0,0,.075)',
    base: '0 .5rem 1rem rgba(0,0,0,.15)',
    md: '0 .5rem 1rem rgba(0,0,0,.175)',
    lg: '0 1rem 3rem rgba(0,0,0,.175)',
    xl: '0 1rem 3rem rgba(0,0,0,.2)',
    '2xl': '0 2rem 4rem rgba(0,0,0,.3)',
    inner: 'inset 0 1px 2px rgba(0,0,0,.075)',
  },

  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      linear: 'linear',
      in: 'ease-in',
      out: 'ease-out',
      inOut: 'ease-in-out',
    },
  },

  zIndex: {
    0: '0',
    10: '1000',
    20: '1020',
    30: '1030',
    40: '1040',
    50: '1050',
    auto: 'auto',
  },

  components: {
    button: {
      height: '2.375rem',
      paddingX: '0.75rem',
      fontSize: '1rem',
      fontWeight: '400',
      borderRadius: '0.25rem',
    },
    input: {
      height: '2.375rem',
      paddingX: '0.75rem',
      fontSize: '1rem',
      borderRadius: '0.25rem',
    },
    card: {
      padding: '1.25rem',
      borderRadius: '0.25rem',
    },
    modal: {
      backdropBlur: '0px',
      maxWidth: '31.25rem',
    },
  },
}

/**
 * Preset metadata for UI display
 */
export interface PresetMetadata {
  id: string
  name: string
  description: string
  author: string
  preview: {
    primaryColor: string
    secondaryColor: string
    accentColor: string
  }
}

export const presetMetadata: PresetMetadata[] = [
  {
    id: 'shadcn',
    name: 'shadcn/ui',
    description:
      'Clean, modern design system inspired by shadcn/ui. Perfect for SaaS applications.',
    author: 'shadcn',
    preview: {
      primaryColor: '#3b82f6',
      secondaryColor: '#8b5cf6',
      accentColor: '#d946ef',
    },
  },
  {
    id: 'pico',
    name: 'Pico CSS',
    description:
      'Minimal, semantic, elegant design system. Great for content-heavy sites.',
    author: 'Pico CSS',
    preview: {
      primaryColor: '#1677ff',
      secondaryColor: '#606060',
      accentColor: '#ff9000',
    },
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    description:
      'Complete Tailwind v3+ color palette. Utility-first design system.',
    author: 'Tailwind Labs',
    preview: {
      primaryColor: '#0ea5e9',
      secondaryColor: '#78716c',
      accentColor: '#d946ef',
    },
  },
  {
    id: 'material',
    name: 'Material Design',
    description: 'Modern, colorful, elevation-based design system from Google.',
    author: 'Google',
    preview: {
      primaryColor: '#4caf50',
      secondaryColor: '#e91e63',
      accentColor: '#03a9f4',
    },
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    description: 'Classic, familiar design system. Widely recognized patterns.',
    author: 'Bootstrap',
    preview: {
      primaryColor: '#0d6efd',
      secondaryColor: '#6c757d',
      accentColor: '#ffc107',
    },
  },
]

/**
 * Get preset by ID
 */
export function getPresetById(id: string): DesignSystem | null {
  switch (id) {
    case 'shadcn':
      return shadcnPreset
    case 'pico':
      return picoPreset
    case 'tailwind':
      return tailwindPreset
    case 'material':
      return materialPreset
    case 'bootstrap':
      return bootstrapPreset
    default:
      return null
  }
}

/**
 * Get all preset IDs
 */
export function getAllPresetIds(): string[] {
  return presetMetadata.map((preset) => preset.id)
}
