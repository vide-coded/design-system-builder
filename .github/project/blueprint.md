# 🎨 Design System Builder - Technical Blueprint

**Project**: Visual Design System Customization Tool
**Architecture**: Client-Only SPA
**Target**: Frontend developers creating custom design systems

---

## 🎯 Core Value Proposition

A visual editor that lets developers:
1. **Customize** every aspect of their design system (colors, typography, spacing, etc.)
2. **Preview** 50+ component examples in real-time with their customizations
3. **Export** as CSS variables or Tailwind config
4. **Share** designs via URL (if compact enough) or localStorage

---

## 🏗️ System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────┐
│                  Browser (Client)                   │
│                                                     │
│  ┌─────────────────────────────────────────────┐  │
│  │         Design System Builder App            │  │
│  │                                               │  │
│  │  ┌──────────────┐  ┌──────────────────────┐ │  │
│  │  │   Editor UI  │  │   Preview Iframe     │ │  │
│  │  │              │  │                      │ │  │
│  │  │ - Controls   │  │ - Component Library │ │  │
│  │  │ - Inputs     │  │ - Live Updates      │ │  │
│  │  │ - Sections   │  │ - Isolated Styles   │ │  │
│  │  └──────────────┘  └──────────────────────┘ │  │
│  │                                               │  │
│  │  ┌───────────────────────────────────────┐  │  │
│  │  │      TanStack Store (State)           │  │  │
│  │  │  - Design Tokens                      │  │  │
│  │  │  - Component Selections               │  │  │
│  │  │  - Export Settings                    │  │  │
│  │  └───────────────────────────────────────┘  │  │
│  │                                               │  │
│  │  ┌───────────────────────────────────────┐  │  │
│  │  │         Export Engine                 │  │  │
│  │  │  - CSS Variables Generator            │  │  │
│  │  │  - Tailwind Config Generator          │  │  │
│  │  │  - Code Formatter                     │  │  │
│  │  └───────────────────────────────────────┘  │  │
│  └─────────────────────────────────────────────┘  │
│                                                     │
│  ┌─────────────────────────────────────────────┐  │
│  │         Persistence Layer                    │  │
│  │  - localStorage (auto-save designs)          │  │
│  │  - URL State (shareable links)               │  │
│  └─────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

### Component Architecture

```
src/
├── app/
│   ├── routes/
│   │   ├── __root.tsx              # Root layout
│   │   ├── index.tsx                # Main editor page
│   │   └── preview.tsx              # Preview iframe route
│   └── router.tsx                   # TanStack Router config
│
├── components/
│   ├── ui/                          # shadcn/ui components (DO NOT EDIT)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── slider.tsx
│   │   ├── select.tsx
│   │   ├── tabs.tsx
│   │   └── ...
│   │
│   ├── editor/                      # Editor interface components
│   │   ├── EditorLayout.tsx         # Split-pane layout
│   │   ├── EditorSidebar.tsx        # Left sidebar container
│   │   ├── PreviewPane.tsx          # Right preview container
│   │   ├── ExportDialog.tsx         # Export modal with code display
│   │   └── ShareButton.tsx          # Generate shareable URL
│   │
│   ├── controls/                    # Design system controls
│   │   ├── ColorPicker.tsx          # Color input with picker
│   │   ├── FontSelector.tsx         # Google Fonts selector
│   │   ├── SpacingControl.tsx       # Spacing scale editor
│   │   ├── TypographyControls.tsx   # Font sizes, weights, etc.
│   │   ├── BorderRadiusControl.tsx  # Border radius presets
│   │   ├── ShadowControl.tsx        # Box shadow editor
│   │   └── TransitionControl.tsx    # Animation timing
│   │
│   ├── sections/                    # Control panel sections
│   │   ├── ColorsSection.tsx        # Primary, secondary, grays, semantic
│   │   ├── TypographySection.tsx    # Font family, sizes, weights
│   │   ├── SpacingSection.tsx       # Scale: xs, sm, md, lg, xl...
│   │   ├── BordersSection.tsx       # Radius, width
│   │   ├── ShadowsSection.tsx       # Elevation scale
│   │   ├── AnimationsSection.tsx    # Transitions, durations
│   │   └── ComponentsSection.tsx    # Component filter checkboxes
│   │
│   └── preview/                     # Component showcase
│       ├── PreviewContainer.tsx     # Iframe wrapper
│       ├── ComponentShowcase.tsx    # Grid of all components
│       ├── examples/                # 50+ component examples
│       │   ├── buttons/
│       │   │   ├── BasicButton.tsx
│       │   │   ├── IconButton.tsx
│       │   │   ├── ButtonGroup.tsx
│       │   │   └── LoadingButton.tsx
│       │   ├── forms/
│       │   │   ├── TextInput.tsx
│       │   │   ├── Checkbox.tsx
│       │   │   ├── Radio.tsx
│       │   │   ├── Select.tsx
│       │   │   ├── Textarea.tsx
│       │   │   ├── Switch.tsx
│       │   │   ├── FileUpload.tsx
│       │   │   └── FormValidation.tsx
│       │   ├── cards/
│       │   │   ├── BasicCard.tsx
│       │   │   ├── ImageCard.tsx
│       │   │   ├── CardWithActions.tsx
│       │   │   └── PricingCard.tsx
│       │   ├── navigation/
│       │   │   ├── Navbar.tsx
│       │   │   ├── Sidebar.tsx
│       │   │   ├── Breadcrumbs.tsx
│       │   │   ├── Tabs.tsx
│       │   │   └── Pagination.tsx
│       │   ├── feedback/
│       │   │   ├── Alert.tsx
│       │   │   ├── Toast.tsx
│       │   │   ├── Badge.tsx
│       │   │   ├── Progress.tsx
│       │   │   ├── Skeleton.tsx
│       │   │   └── Spinner.tsx
│       │   ├── overlays/
│       │   │   ├── Modal.tsx
│       │   │   ├── Dialog.tsx (shadcn style)
│       │   │   ├── Popover.tsx
│       │   │   ├── Tooltip.tsx
│       │   │   └── Dropdown.tsx
│       │   ├── data/
│       │   │   ├── Table.tsx (TanStack Table styled)
│       │   │   ├── DataGrid.tsx
│       │   │   ├── List.tsx
│       │   │   └── EmptyState.tsx
│       │   ├── typography/
│       │   │   ├── Headings.tsx (h1-h6)
│       │   │   ├── Paragraphs.tsx
│       │   │   ├── Links.tsx
│       │   │   ├── Blockquote.tsx
│       │   │   └── Code.tsx
│       │   ├── layout/
│       │   │   ├── Container.tsx
│       │   │   ├── Grid.tsx
│       │   │   ├── Stack.tsx
│       │   │   └── Divider.tsx
│       │   └── advanced/
│       │       ├── CommandPalette.tsx
│       │       ├── DatePicker.tsx
│       │       ├── Calendar.tsx
│       │       ├── Stepper.tsx
│       │       └── FileTree.tsx
│       └── registry.ts              # Component registry
│
├── lib/
│   ├── export/
│   │   ├── css-generator.ts         # Generate CSS with variables
│   │   ├── tailwind-generator.ts    # Generate tailwind.config.js
│   │   ├── formatter.ts             # Prettier-like formatting
│   │   └── validators.ts            # Validate design tokens
│   │
│   ├── persistence/
│   │   ├── local-storage.ts         # Save/load from localStorage
│   │   ├── url-state.ts             # Encode/decode URL params
│   │   └── compression.ts           # Compress for URL sharing
│   │
│   ├── design-tokens/
│   │   ├── defaults.ts              # Default design system
│   │   ├── types.ts                 # TypeScript types
│   │   ├── validators.ts            # Zod schemas
│   │   └── presets.ts               # Pre-built themes (shadcn, pico)
│   │
│   └── utils/
│       ├── color-utils.ts           # Color manipulation (darken, lighten)
│       ├── css-utils.ts             # CSS generation helpers
│       └── format-utils.ts          # String formatters
│
├── stores/
│   ├── design-system.store.ts       # Main design tokens state
│   ├── ui.store.ts                  # UI state (sidebar, panels)
│   └── preview.store.ts             # Preview settings
│
└── types/
    ├── design-system.ts             # Design token types
    ├── components.ts                # Component metadata types
    └── export.ts                    # Export format types
```

---

## 📊 Data Models

### Design System State (TanStack Store)

```typescript
interface DesignSystemState {
  // Metadata
  name: string;
  version: string;
  createdAt: string;
  updatedAt: string;

  // Colors
  colors: {
    // Brand colors
    primary: ColorToken;
    secondary: ColorToken;
    accent: ColorToken;

    // Gray scale (50-950)
    gray: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      950: string;
    };

    // Semantic colors
    success: ColorToken;
    warning: ColorToken;
    error: ColorToken;
    info: ColorToken;

    // Surface colors
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
    muted: string;
    mutedForeground: string;

    // Border colors
    border: string;
    input: string;
    ring: string;
  };

  // Typography
  typography: {
    // Font families
    fontFamily: {
      sans: string[];
      serif: string[];
      mono: string[];
    };

    // Font sizes (rem)
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
      '6xl': string;
      '7xl': string;
      '8xl': string;
      '9xl': string;
    };

    // Font weights
    fontWeight: {
      thin: number;
      extralight: number;
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
      black: number;
    };

    // Line heights
    lineHeight: {
      none: number;
      tight: number;
      snug: number;
      normal: number;
      relaxed: number;
      loose: number;
    };

    // Letter spacing
    letterSpacing: {
      tighter: string;
      tight: string;
      normal: string;
      wide: string;
      wider: string;
      widest: string;
    };
  };

  // Spacing (4px base scale)
  spacing: {
    0: string;
    px: string;
    0.5: string;
    1: string;
    1.5: string;
    2: string;
    2.5: string;
    3: string;
    3.5: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    14: string;
    16: string;
    20: string;
    24: string;
    28: string;
    32: string;
    36: string;
    40: string;
    44: string;
    48: string;
    52: string;
    56: string;
    60: string;
    64: string;
    72: string;
    80: string;
    96: string;
  };

  // Border radius
  borderRadius: {
    none: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    full: string;
  };

  // Shadows
  boxShadow: {
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    inner: string;
    none: string;
  };

  // Animations
  animation: {
    duration: {
      fast: string;
      normal: string;
      slow: string;
    };
    easing: {
      linear: string;
      in: string;
      out: string;
      inOut: string;
    };
  };

  // Z-index scale
  zIndex: {
    0: number;
    10: number;
    20: number;
    30: number;
    40: number;
    50: number;
    auto: string;
  };

  // Component-specific tokens
  components: {
    button: {
      paddingX: string;
      paddingY: string;
      borderRadius: string;
      fontWeight: number;
    };
    input: {
      height: string;
      paddingX: string;
      borderRadius: string;
      borderWidth: string;
    };
    card: {
      padding: string;
      borderRadius: string;
      borderWidth: string;
    };
    modal: {
      maxWidth: string;
      padding: string;
      borderRadius: string;
    };
  };
}

interface ColorToken {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string; // base
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}
```

### UI State

```typescript
interface UIState {
  // Layout
  sidebarWidth: number;
  sidebarCollapsed: boolean;
  previewScale: number; // Zoom level

  // Active section
  activeSection: 
    | 'colors'
    | 'typography'
    | 'spacing'
    | 'borders'
    | 'shadows'
    | 'animations'
    | 'components';

  // Component filters
  componentFilters: {
    buttons: boolean;
    forms: boolean;
    cards: boolean;
    navigation: boolean;
    feedback: boolean;
    overlays: boolean;
    data: boolean;
    typography: boolean;
    layout: boolean;
    advanced: boolean;
  };

  // Search
  componentSearch: string;

  // Export dialog
  exportDialogOpen: boolean;
  exportFormat: 'css' | 'tailwind';
}
```

### Component Metadata

```typescript
interface ComponentMetadata {
  id: string;
  name: string;
  category: 
    | 'buttons'
    | 'forms'
    | 'cards'
    | 'navigation'
    | 'feedback'
    | 'overlays'
    | 'data'
    | 'typography'
    | 'layout'
    | 'advanced';
  description: string;
  complexity: 'simple' | 'medium' | 'complex';
  tags: string[];
  component: React.ComponentType;
}
```

---

## 🎨 Design Philosophy

### Editor Interface (shadcn/ui style)

- **Clean & Minimal**: No clutter, purposeful spacing
- **Professional**: Muted colors, subtle shadows
- **Responsive**: Desktop-first but mobile-aware
- **Fast**: Instant visual feedback on changes
- **Accessible**: WCAG 2.1 AA compliant

### Preview Components

- **Comprehensive**: Cover 90% of use cases
- **Realistic**: Not just demos, but production-quality examples
- **Varied**: Multiple variants per component type
- **Isolated**: Each component independent, no side effects
- **Documented**: Show code snippets for each

---

## 🚀 Technical Decisions

### Why Client-Only SPA?

- No backend needed for core functionality
- Instant updates (no API latency)
- Works offline after first load
- Simpler deployment (static hosting)
- Lower costs (no server)

### Why TanStack Store?

- Lightweight state management
- Reactive updates
- Better performance than Context API
- Type-safe
- Devtools support

### Why Iframe for Preview?

- **Style isolation**: Design system styles don't affect editor UI
- **Hot reload**: Inject new styles without full reload
- **Security**: Sandboxed environment for custom HTML
- **Clean rendering**: Pure component showcase

### Why CSS Variables + Tailwind Config?

- **CSS Variables**: Universal, works with any framework
- **Tailwind Config**: Most popular in modern dev
- **Both formats**: Maximum compatibility

---

## 📤 Export Formats

### CSS Variables Output

```css
:root {
  /* Colors */
  --color-primary-50: #eff6ff;
  --color-primary-500: #3b82f6;
  --color-primary-900: #1e3a8a;
  
  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  
  /* Spacing */
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  
  /* Borders */
  --radius-sm: 0.125rem;
  --radius-md: 0.375rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  
  /* Components */
  --button-px: var(--spacing-4);
  --button-py: var(--spacing-2);
}

/* Utility classes */
.btn {
  padding: var(--button-py) var(--button-px);
  border-radius: var(--radius-md);
  background-color: var(--color-primary-500);
  color: white;
}

/* HTML tag styling */
button {
  padding: var(--button-py) var(--button-px);
  border-radius: var(--radius-md);
}
```

### Tailwind Config Output

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
        gray: {
          50: '#f9fafb',
          // ...
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        // ...
      },
      spacing: {
        // Custom if not default
      },
      borderRadius: {
        sm: '0.125rem',
        md: '0.375rem',
        // ...
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        // ...
      },
    },
  },
  plugins: [],
}
```

---

## 🔧 Key Features

### 1. Real-Time Preview
- Changes reflect instantly in iframe
- No manual "apply" button needed
- Smooth transitions between states

### 2. Component Showcase (50+ Examples)

**Categories**:
- **Buttons** (8 examples): Primary, Secondary, Outline, Ghost, Icon, Loading, Group, Sizes
- **Forms** (12 examples): Input, Textarea, Select, Checkbox, Radio, Switch, File Upload, Date Picker, Validation, Search, Tags Input, Password
- **Cards** (6 examples): Basic, Image, Actions, Pricing, Stats, Product
- **Navigation** (7 examples): Navbar, Sidebar, Breadcrumbs, Tabs, Pagination, Steps, Menu
- **Feedback** (8 examples): Alert, Toast, Badge, Progress, Skeleton, Spinner, Empty State, Error Boundary
- **Overlays** (6 examples): Modal, Dialog (shadcn), Popover, Tooltip, Dropdown, Sheet
- **Data** (5 examples): Table (TanStack), Data Grid, List, Tree View, Timeline
- **Typography** (6 examples): Headings, Paragraphs, Links, Blockquote, Code, Lists
- **Layout** (5 examples): Container, Grid, Flex, Stack, Divider
- **Advanced** (7 examples): Command Palette, Calendar, Date Range, Stepper, Combobox, Multi-Select, Avatar Group

**Total: 70+ component examples**

### 3. Custom HTML Preview
- Users can paste custom HTML
- See how their HTML looks with the design system
- Useful for testing existing components

### 4. Smart Defaults
- Pre-configured shadcn/ui-inspired theme
- Pico CSS-inspired simplicity
- One-click presets (shadcn, Pico, Tailwind, Bootstrap-like)

### 5. Validation
- Color contrast checking (WCAG AA)
- Warn about accessibility issues
- Prevent invalid values (negative spacing, etc.)

### 6. URL Sharing
- Compress design tokens to URL params
- Shareable links (if under ~2000 chars)
- Fallback to localStorage if too large

### 7. Auto-Save
- Save to localStorage every 2 seconds
- Restore on page reload
- Multiple saved designs

### 8. Code Display
- Syntax highlighted export code
- Copy to clipboard
- Download as file

---

## 🎯 MVP Scope

### Phase 1: Foundation (4-5 hours)
- Project setup (Vite + React + TanStack Router)
- Basic layout (split-pane editor)
- TanStack Store setup
- Default design system tokens

### Phase 2: Controls (5-6 hours)
- Color picker controls (all color tokens)
- Typography controls (fonts, sizes, weights)
- Spacing controls (scale editor)
- Border radius controls
- Shadow controls
- Animation controls

### Phase 3: Preview System (4-5 hours)
- Iframe preview container
- Style injection mechanism
- Component showcase grid
- Category filters

### Phase 4: Components Library (10-12 hours)
- Implement 70+ component examples
- Organize by category
- Ensure all use design tokens
- Add custom HTML preview

### Phase 5: Export Engine (3-4 hours)
- CSS variables generator
- Tailwind config generator
- Code formatter
- Syntax highlighting
- Copy/download functionality

### Phase 6: Persistence (2-3 hours)
- localStorage save/load
- URL state encoding/decoding
- Auto-save mechanism
- Multiple designs management

### Phase 7: Polish (3-4 hours)
- Responsive design
- Loading states
- Error boundaries
- Accessibility audit
- Performance optimization

**Total MVP Estimate: 32-40 hours**

---

## 🧪 Testing Strategy

- **Unit tests**: Utility functions (color utils, generators)
- **Integration tests**: Export functionality, state management
- **E2E tests**: Critical paths (edit color → preview updates → export works)
- **Visual tests**: Component showcase renders correctly
- **Accessibility tests**: WCAG compliance

---

## 📦 Deployment

- **Build**: `bun run build` (Vite static site)
- **Host**: Vercel, Netlify, or GitHub Pages
- **CDN**: Cloudflare for fast global delivery
- **Bundle size target**: < 150KB gzipped (excluding fonts)

---

## 🚧 Future Enhancements (Post-MVP)

- **User accounts**: Save designs to cloud
- **Team collaboration**: Share designs with team
- **Component library builder**: Create custom components
- **Export to npm**: Package design system as npm module
- **Design tokens format**: Export as JSON for tools like Figma
- **AI suggestions**: Generate color palettes from brand colors
- **Import**: Load existing Tailwind configs
- **Responsive preview**: Mobile, tablet, desktop views
- **Dark mode editor**: Not just preview, but editor UI
- **Accessibility checker**: Automated contrast and screen reader tests

---

## 🔐 Technical Constraints

- **No backend**: Everything client-side
- **No authentication**: Not needed for MVP
- **No database**: localStorage only
- **Browser support**: Modern browsers (ES2022+)
- **Bundle size**: Keep under 150KB gzipped
- **Performance**: 60 FPS in preview, instant updates

---

## 💡 Key Innovations

1. **Iframe isolation**: Clean preview without CSS conflicts
2. **Comprehensive showcase**: 70+ components, not just 10-15
3. **Dual export**: Both CSS and Tailwind (not just one)
4. **Custom HTML testing**: Paste any HTML to preview
5. **TanStack Table + shadcn styling**: Show complex component styling
6. **URL sharing**: No account needed for sharing
7. **Auto-save**: Never lose work

---

## 🎓 Complexity Assessment

**Complexity Score: 6/10 (Medium-High)**

**Reasons**:
- Novel UI (split-pane editor + iframe preview)
- Complex state (many design tokens)
- Large component library (70+ examples)
- Export logic (CSS + Tailwind generation)
- Performance optimization (real-time updates)

**Mitigation Strategy**:
- Build incrementally (phase by phase)
- Test continuously (preview after each component batch)
- Use proven libraries (TanStack, shadcn/ui)
- Focus on MVP (defer advanced features)

---

## 🎯 Success Metrics

MVP is successful when:
- ✅ All 70+ component examples render correctly
- ✅ Changes reflect instantly in preview (< 16ms)
- ✅ Export generates valid CSS and Tailwind config
- ✅ localStorage saves designs reliably
- ✅ URL sharing works for typical design systems
- ✅ Mobile responsive (usable on tablet)
- ✅ Lighthouse score > 90
- ✅ Bundle size < 150KB gzipped
- ✅ No accessibility violations (WCAG AA)

---

**Blueprint Complete. Ready for roadmap generation.** 🎨
