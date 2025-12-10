/**
 * Component Registry
 *
 * Central registry for all preview components with metadata.
 * Supports categorization, search, filtering, and dynamic loading.
 */

// ============================================================================
// Component Imports
// ============================================================================

import {
  AvatarGroup,
  Calendar,
  Combobox,
  CommandPalette,
  DateRangePicker,
  MultiSelect,
  Stepper,
} from './examples/advanced'
import {
  BasicButton,
  ButtonGroup,
  ButtonSizes,
  IconButton,
  LoadingButton,
} from './examples/buttons'
import {
  BasicCard,
  CardWithActions,
  ImageCard,
  PricingCard,
  ProductCard,
  StatsCard,
} from './examples/cards'
import { DataGrid, List, Table, Timeline, TreeView } from './examples/data'
import {
  CheckboxInput,
  DatePicker,
  FileUpload,
  FormValidation,
  PasswordInput,
  RadioInput,
  SearchInput,
  SelectInput,
  SwitchInput,
  TagsInput,
  Textarea,
  TextInput,
} from './examples/forms'
import { Container, Divider, Flex, Grid, Stack } from './examples/layout'
import {
  Breadcrumbs,
  Menu,
  Navbar,
  Pagination,
  Sidebar,
  Steps,
} from './examples/navigation'
import {
  ContextMenu,
  Dropdown,
  Modal,
  Popover,
  Sheet,
  Tooltip,
} from './examples/overlays'
import {
  Blockquote,
  Code,
  Headings,
  Links,
  Lists,
  Paragraphs,
} from './examples/typography'

// ============================================================================
// Types
// ============================================================================

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
  description: string
  category: ComponentCategory
  tags: string[]
  /** If true, component uses design tokens reactively */
  reactive: boolean
  /** Complexity level (1-3, where 3 is most complex) */
  complexity: 1 | 2 | 3
  /** The actual React component to render */
  component?: React.ComponentType
}

export interface CategoryInfo {
  id: ComponentCategory
  name: string
  description: string
  icon: string
  count: number
}

// ============================================================================
// Component Definitions
// ============================================================================

export const componentRegistry: ComponentMetadata[] = [
  // ========== BUTTONS ==========
  {
    id: 'button-basic',
    name: 'Basic Buttons',
    description: 'Primary, secondary, outline, and ghost button variants',
    category: 'buttons',
    tags: ['button', 'primary', 'secondary', 'outline', 'ghost', 'variants'],
    reactive: true,
    complexity: 1,
    component: BasicButton,
  },
  {
    id: 'button-icon',
    name: 'Icon Buttons',
    description: 'Buttons with icons only, useful for toolbars',
    category: 'buttons',
    tags: ['button', 'icon', 'toolbar', 'action'],
    reactive: true,
    complexity: 1,
    component: IconButton,
  },
  {
    id: 'button-group',
    name: 'Button Group',
    description: 'Grouped buttons for related actions',
    category: 'buttons',
    tags: ['button', 'group', 'toolbar', 'segmented'],
    reactive: true,
    complexity: 2,
    component: ButtonGroup,
  },
  {
    id: 'button-loading',
    name: 'Loading Button',
    description: 'Button with loading spinner state',
    category: 'buttons',
    tags: ['button', 'loading', 'spinner', 'async'],
    reactive: true,
    complexity: 2,
    component: LoadingButton,
  },
  {
    id: 'button-sizes',
    name: 'Button Sizes',
    description: 'Small, medium, and large button sizes',
    category: 'buttons',
    tags: ['button', 'size', 'sm', 'md', 'lg'],
    reactive: true,
    complexity: 1,
    component: ButtonSizes,
  },

  // ========== FORMS ==========
  {
    id: 'form-text-input',
    name: 'Text Input',
    description: 'Standard text input with label and validation',
    category: 'forms',
    tags: ['input', 'text', 'form', 'validation'],
    reactive: true,
    complexity: 1,
    component: TextInput,
  },
  {
    id: 'form-textarea',
    name: 'Textarea',
    description: 'Multi-line text input',
    category: 'forms',
    tags: ['textarea', 'input', 'form', 'multiline'],
    reactive: true,
    complexity: 1,
    component: Textarea,
  },
  {
    id: 'form-select',
    name: 'Select',
    description: 'Dropdown select input',
    category: 'forms',
    tags: ['select', 'dropdown', 'form', 'options'],
    reactive: true,
    complexity: 2,
    component: SelectInput,
  },
  {
    id: 'form-checkbox',
    name: 'Checkbox',
    description: 'Checkbox input for boolean values',
    category: 'forms',
    tags: ['checkbox', 'input', 'form', 'boolean'],
    reactive: true,
    complexity: 1,
    component: CheckboxInput,
  },
  {
    id: 'form-radio',
    name: 'Radio',
    description: 'Radio button group for single selection',
    category: 'forms',
    tags: ['radio', 'input', 'form', 'selection'],
    reactive: true,
    complexity: 1,
    component: RadioInput,
  },
  {
    id: 'form-switch',
    name: 'Switch',
    description: 'Toggle switch for on/off states',
    category: 'forms',
    tags: ['switch', 'toggle', 'form', 'boolean'],
    reactive: true,
    complexity: 2,
    component: SwitchInput,
  },
  {
    id: 'form-file-upload',
    name: 'File Upload',
    description: 'File input with drag-and-drop',
    category: 'forms',
    tags: ['file', 'upload', 'form', 'drag-drop'],
    reactive: true,
    complexity: 3,
    component: FileUpload,
  },
  {
    id: 'form-date-picker',
    name: 'Date Picker',
    description: 'Calendar date picker input',
    category: 'forms',
    tags: ['date', 'calendar', 'form', 'picker'],
    reactive: true,
    complexity: 3,
    component: DatePicker,
  },
  {
    id: 'form-validation',
    name: 'Form Validation',
    description: 'Form with validation errors and success states',
    category: 'forms',
    tags: ['form', 'validation', 'error', 'success'],
    reactive: true,
    complexity: 2,
    component: FormValidation,
  },
  {
    id: 'form-search-input',
    name: 'Search Input',
    description: 'Input with search icon and clear button',
    category: 'forms',
    tags: ['search', 'input', 'form', 'icon'],
    reactive: true,
    complexity: 2,
    component: SearchInput,
  },
  {
    id: 'form-tags-input',
    name: 'Tags Input',
    description: 'Input for adding and removing tags',
    category: 'forms',
    tags: ['tags', 'input', 'form', 'chips'],
    reactive: true,
    complexity: 3,
    component: TagsInput,
  },
  {
    id: 'form-password-input',
    name: 'Password Input',
    description: 'Password input with show/hide toggle',
    category: 'forms',
    tags: ['password', 'input', 'form', 'security'],
    reactive: true,
    complexity: 2,
    component: PasswordInput,
  },

  // ========== CARDS ==========
  {
    id: 'card-basic',
    name: 'Basic Card',
    description: 'Simple card with header, content, and footer',
    category: 'cards',
    tags: ['card', 'container', 'content'],
    reactive: true,
    complexity: 1,
    component: BasicCard,
  },
  {
    id: 'card-image',
    name: 'Image Card',
    description: 'Card with image, title, and description',
    category: 'cards',
    tags: ['card', 'image', 'media'],
    reactive: true,
    complexity: 1,
    component: ImageCard,
  },
  {
    id: 'card-actions',
    name: 'Card with Actions',
    description: 'Card with action buttons',
    category: 'cards',
    tags: ['card', 'actions', 'buttons'],
    reactive: true,
    complexity: 2,
    component: CardWithActions,
  },
  {
    id: 'card-pricing',
    name: 'Pricing Card',
    description: 'Pricing tier card with features list',
    category: 'cards',
    tags: ['card', 'pricing', 'features', 'plan'],
    reactive: true,
    complexity: 2,
    component: PricingCard,
  },
  {
    id: 'card-stats',
    name: 'Stats Card',
    description: 'Card displaying key metrics or statistics',
    category: 'cards',
    tags: ['card', 'stats', 'metrics', 'dashboard'],
    reactive: true,
    complexity: 2,
    component: StatsCard,
  },
  {
    id: 'card-product',
    name: 'Product Card',
    description: 'E-commerce product card',
    category: 'cards',
    tags: ['card', 'product', 'ecommerce', 'shop'],
    reactive: true,
    complexity: 2,
    component: ProductCard,
  },

  // ========== NAVIGATION ==========
  {
    id: 'nav-navbar',
    name: 'Navbar',
    description: 'Top navigation bar with logo and menu',
    category: 'navigation',
    tags: ['navbar', 'header', 'menu', 'navigation'],
    reactive: true,
    complexity: 2,
    component: Navbar,
  },
  {
    id: 'nav-sidebar',
    name: 'Sidebar',
    description: 'Side navigation panel',
    category: 'navigation',
    tags: ['sidebar', 'menu', 'navigation'],
    reactive: true,
    complexity: 2,
    component: Sidebar,
  },
  {
    id: 'nav-breadcrumbs',
    name: 'Breadcrumbs',
    description: 'Breadcrumb navigation trail',
    category: 'navigation',
    tags: ['breadcrumbs', 'trail', 'navigation'],
    reactive: true,
    complexity: 1,
    component: Breadcrumbs,
  },
  {
    id: 'nav-tabs',
    name: 'Tabs',
    description: 'Tabbed navigation component',
    category: 'navigation',
    tags: ['tabs', 'navigation', 'switch'],
    reactive: true,
    complexity: 2,
    component: Menu,
  },
  {
    id: 'nav-pagination',
    name: 'Pagination',
    description: 'Page navigation with prev/next',
    category: 'navigation',
    tags: ['pagination', 'navigation', 'pages'],
    reactive: true,
    complexity: 2,
    component: Pagination,
  },
  {
    id: 'nav-steps',
    name: 'Steps',
    description: 'Multi-step progress indicator',
    category: 'navigation',
    tags: ['steps', 'stepper', 'progress', 'wizard'],
    reactive: true,
    complexity: 2,
    component: Steps,
  },
  {
    id: 'nav-menu',
    name: 'Dropdown Menu',
    description: 'Dropdown menu with nested items',
    category: 'navigation',
    tags: ['menu', 'dropdown', 'navigation'],
    reactive: true,
    complexity: 3,
    component: Menu,
  },

  // ========== FEEDBACK ==========
  {
    id: 'feedback-alert',
    name: 'Alert',
    description: 'Alert banners with semantic colors',
    category: 'feedback',
    tags: [
      'alert',
      'notification',
      'banner',
      'info',
      'success',
      'warning',
      'error',
    ],
    reactive: true,
    complexity: 1,
  },
  {
    id: 'feedback-toast',
    name: 'Toast',
    description: 'Toast notification popup',
    category: 'feedback',
    tags: ['toast', 'notification', 'snackbar'],
    reactive: true,
    complexity: 2,
  },
  {
    id: 'feedback-badge',
    name: 'Badge',
    description: 'Small badge for labels and counts',
    category: 'feedback',
    tags: ['badge', 'label', 'tag', 'count'],
    reactive: true,
    complexity: 1,
  },
  {
    id: 'feedback-progress',
    name: 'Progress',
    description: 'Progress bar and circular progress',
    category: 'feedback',
    tags: ['progress', 'bar', 'circle', 'loading'],
    reactive: true,
    complexity: 2,
  },
  {
    id: 'feedback-skeleton',
    name: 'Skeleton',
    description: 'Loading skeleton placeholders',
    category: 'feedback',
    tags: ['skeleton', 'loading', 'placeholder'],
    reactive: true,
    complexity: 1,
  },
  {
    id: 'feedback-spinner',
    name: 'Spinner',
    description: 'Loading spinner animations',
    category: 'feedback',
    tags: ['spinner', 'loading', 'animation'],
    reactive: true,
    complexity: 1,
  },
  {
    id: 'feedback-empty-state',
    name: 'Empty State',
    description: 'Empty state illustration and message',
    category: 'feedback',
    tags: ['empty', 'state', 'placeholder', 'no-data'],
    reactive: true,
    complexity: 2,
  },
  {
    id: 'feedback-error-boundary',
    name: 'Error Boundary',
    description: 'Error boundary fallback UI',
    category: 'feedback',
    tags: ['error', 'boundary', 'fallback'],
    reactive: true,
    complexity: 2,
  },

  // ========== OVERLAYS ==========
  {
    id: 'overlay-modal',
    name: 'Modal',
    description: 'Full-screen modal dialog with various patterns',
    category: 'overlays',
    tags: ['modal', 'dialog', 'overlay', 'popup'],
    reactive: true,
    complexity: 2,
    component: Modal,
  },
  {
    id: 'overlay-dialog',
    name: 'Dialog',
    description: 'shadcn-style dialog component (see Modal)',
    category: 'overlays',
    tags: ['dialog', 'modal', 'overlay'],
    reactive: true,
    complexity: 2,
    component: Modal,
  },
  {
    id: 'overlay-popover',
    name: 'Popover',
    description: 'Popover with form, menu, and info patterns',
    category: 'overlays',
    tags: ['popover', 'popup', 'tooltip'],
    reactive: true,
    complexity: 2,
    component: Popover,
  },
  {
    id: 'overlay-tooltip',
    name: 'Tooltip',
    description: 'Hover tooltip with content and positioning',
    category: 'overlays',
    tags: ['tooltip', 'hint', 'help'],
    reactive: true,
    complexity: 2,
    component: Tooltip,
  },
  {
    id: 'overlay-dropdown',
    name: 'Dropdown',
    description: 'Dropdown menu component with user menu patterns',
    category: 'overlays',
    tags: ['dropdown', 'menu', 'select'],
    reactive: true,
    complexity: 2,
    component: Dropdown,
  },
  {
    id: 'overlay-sheet',
    name: 'Sheet',
    description: 'Slide-in panel from side with settings and navigation',
    category: 'overlays',
    tags: ['sheet', 'panel', 'drawer', 'slide'],
    reactive: true,
    complexity: 3,
    component: Sheet,
  },
  {
    id: 'overlay-context-menu',
    name: 'Context Menu',
    description: 'Right-click context menu for various content types',
    category: 'overlays',
    tags: ['context-menu', 'right-click', 'menu'],
    reactive: true,
    complexity: 2,
    component: ContextMenu,
  },

  // ========== DATA ==========
  {
    id: 'data-table',
    name: 'Table',
    description: 'Data table with sorting and filtering',
    category: 'data',
    tags: ['table', 'data', 'grid', 'sorting', 'filtering'],
    reactive: true,
    complexity: 3,
    component: Table,
  },
  {
    id: 'data-grid',
    name: 'Data Grid',
    description: 'Advanced data grid with features',
    category: 'data',
    tags: ['grid', 'data', 'table', 'advanced'],
    reactive: true,
    complexity: 3,
    component: DataGrid,
  },
  {
    id: 'data-list',
    name: 'List',
    description: 'List with avatars and actions',
    category: 'data',
    tags: ['list', 'items', 'avatar', 'actions'],
    reactive: true,
    complexity: 2,
    component: List,
  },
  {
    id: 'data-tree-view',
    name: 'Tree View',
    description: 'Hierarchical tree structure',
    category: 'data',
    tags: ['tree', 'hierarchy', 'nested'],
    reactive: true,
    complexity: 3,
    component: TreeView,
  },
  {
    id: 'data-timeline',
    name: 'Timeline',
    description: 'Vertical timeline component',
    category: 'data',
    tags: ['timeline', 'history', 'events'],
    reactive: true,
    complexity: 2,
    component: Timeline,
  },

  // ========== TYPOGRAPHY ==========
  {
    id: 'typography-headings',
    name: 'Headings',
    description: 'H1 through H6 heading styles',
    category: 'typography',
    tags: ['heading', 'title', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    reactive: true,
    complexity: 1,
  },
  {
    id: 'typography-paragraphs',
    name: 'Paragraphs',
    description: 'Paragraph styles with sizes and weights',
    category: 'typography',
    tags: ['paragraph', 'text', 'body'],
    reactive: true,
    complexity: 1,
  },
  {
    id: 'typography-links',
    name: 'Links',
    description: 'Link styles and variants',
    category: 'typography',
    tags: ['link', 'anchor', 'href'],
    reactive: true,
    complexity: 1,
  },
  {
    id: 'typography-blockquote',
    name: 'Blockquote',
    description: 'Styled blockquote element',
    category: 'typography',
    tags: ['blockquote', 'quote', 'citation'],
    reactive: true,
    complexity: 1,
  },
  {
    id: 'typography-code',
    name: 'Code',
    description: 'Inline and block code styles',
    category: 'typography',
    tags: ['code', 'pre', 'syntax'],
    reactive: true,
    complexity: 2,
  },
  {
    id: 'typography-lists',
    name: 'Lists',
    description: 'Ordered and unordered list styles',
    category: 'typography',
    tags: ['list', 'ul', 'ol', 'items'],
    reactive: true,
    complexity: 1,
  },

  // ========== LAYOUT ==========
  {
    id: 'layout-container',
    name: 'Container',
    description: 'Container with max-width variants',
    category: 'layout',
    tags: ['container', 'wrapper', 'max-width'],
    reactive: true,
    complexity: 1,
    component: Container,
  },
  {
    id: 'layout-grid',
    name: 'Grid',
    description: 'Responsive grid layouts',
    category: 'layout',
    tags: ['grid', 'layout', 'columns'],
    reactive: true,
    complexity: 1,
    component: Grid,
  },
  {
    id: 'layout-flex',
    name: 'Flex',
    description: 'Flexbox layout utilities',
    category: 'layout',
    tags: ['flex', 'layout', 'flexbox'],
    reactive: true,
    complexity: 1,
    component: Flex,
  },
  {
    id: 'layout-stack',
    name: 'Stack',
    description: 'Vertical and horizontal stacks',
    category: 'layout',
    tags: ['stack', 'layout', 'spacing'],
    reactive: true,
    complexity: 1,
    component: Stack,
  },
  {
    id: 'layout-divider',
    name: 'Divider',
    description: 'Horizontal and vertical dividers',
    category: 'layout',
    tags: ['divider', 'separator', 'hr'],
    reactive: true,
    complexity: 1,
    component: Divider,
  },

  // ========== ADVANCED ==========
  {
    id: 'advanced-command-palette',
    name: 'Command Palette',
    description: 'Keyboard-driven command palette (⌘K)',
    category: 'advanced',
    tags: ['command', 'palette', 'search', 'keyboard'],
    reactive: true,
    complexity: 3,
    component: CommandPalette,
  },
  {
    id: 'advanced-calendar',
    name: 'Calendar',
    description: 'Full calendar with month/year selection',
    category: 'advanced',
    tags: ['calendar', 'date', 'month'],
    reactive: true,
    complexity: 3,
    component: Calendar,
  },
  {
    id: 'advanced-date-range-picker',
    name: 'Date Range Picker',
    description: 'Date range selection with calendar',
    category: 'advanced',
    tags: ['date', 'range', 'picker', 'calendar'],
    reactive: true,
    complexity: 3,
    component: DateRangePicker,
  },
  {
    id: 'advanced-stepper',
    name: 'Stepper',
    description: 'Multi-step form wizard',
    category: 'advanced',
    tags: ['stepper', 'wizard', 'form', 'steps'],
    reactive: true,
    complexity: 3,
    component: Stepper,
  },
  {
    id: 'advanced-combobox',
    name: 'Combobox',
    description: 'Autocomplete combo box',
    category: 'advanced',
    tags: ['combobox', 'autocomplete', 'search'],
    reactive: true,
    complexity: 3,
    component: Combobox,
  },
  {
    id: 'advanced-multi-select',
    name: 'Multi Select',
    description: 'Multi-selection dropdown',
    category: 'advanced',
    tags: ['select', 'multi', 'dropdown', 'checkbox'],
    reactive: true,
    complexity: 3,
    component: MultiSelect,
  },
  {
    id: 'advanced-avatar-group',
    name: 'Avatar Group',
    description: 'Overlapping avatar group',
    category: 'advanced',
    tags: ['avatar', 'group', 'users'],
    reactive: true,
    complexity: 2,
    component: AvatarGroup,
  },

  // ========== TYPOGRAPHY ==========
  {
    id: 'typography-headings',
    name: 'Headings',
    description:
      'Heading hierarchy from h1 to h6 with size and weight variations',
    category: 'typography',
    tags: ['typography', 'headings', 'titles', 'h1', 'h2', 'hierarchy'],
    reactive: true,
    complexity: 1,
    component: Headings,
  },
  {
    id: 'typography-paragraphs',
    name: 'Paragraphs',
    description:
      'Body text variations with different sizes, weights, and line heights',
    category: 'typography',
    tags: ['typography', 'paragraph', 'body', 'text', 'content'],
    reactive: true,
    complexity: 1,
    component: Paragraphs,
  },
  {
    id: 'typography-links',
    name: 'Links',
    description:
      'Link variants with different styles, states, and icon combinations',
    category: 'typography',
    tags: ['typography', 'links', 'anchor', 'navigation', 'hyperlink'],
    reactive: true,
    complexity: 1,
    component: Links,
  },
  {
    id: 'typography-blockquote',
    name: 'Blockquote',
    description:
      'Quote styles with attributions, testimonials, and pull quotes',
    category: 'typography',
    tags: ['typography', 'blockquote', 'quote', 'testimonial', 'citation'],
    reactive: true,
    complexity: 1,
    component: Blockquote,
  },
  {
    id: 'typography-code',
    name: 'Code',
    description:
      'Inline code, code blocks, command line, and keyboard shortcuts',
    category: 'typography',
    tags: ['typography', 'code', 'monospace', 'pre', 'syntax', 'kbd'],
    reactive: true,
    complexity: 1,
    component: Code,
  },
  {
    id: 'typography-lists',
    name: 'Lists',
    description: 'Unordered, ordered, task lists, and nested list variations',
    category: 'typography',
    tags: ['typography', 'lists', 'ul', 'ol', 'tasks', 'nested'],
    reactive: true,
    complexity: 1,
    component: Lists,
  },
]

// ============================================================================
// Category Information
// ============================================================================

export const categoryInfo: Record<
  ComponentCategory,
  Omit<CategoryInfo, 'count'>
> = {
  buttons: {
    id: 'buttons',
    name: 'Buttons',
    description: 'Interactive button components with various styles',
    icon: '🔘',
  },
  forms: {
    id: 'forms',
    name: 'Forms',
    description: 'Input fields, selectors, and form controls',
    icon: '📝',
  },
  cards: {
    id: 'cards',
    name: 'Cards',
    description: 'Card layouts for content display',
    icon: '🃏',
  },
  navigation: {
    id: 'navigation',
    name: 'Navigation',
    description: 'Navigation menus, tabs, and breadcrumbs',
    icon: '🧭',
  },
  feedback: {
    id: 'feedback',
    name: 'Feedback',
    description: 'Alerts, toasts, badges, and loading states',
    icon: '💬',
  },
  overlays: {
    id: 'overlays',
    name: 'Overlays',
    description: 'Modals, dialogs, popovers, and tooltips',
    icon: '🪟',
  },
  data: {
    id: 'data',
    name: 'Data',
    description: 'Tables, lists, and data visualization',
    icon: '📊',
  },
  typography: {
    id: 'typography',
    name: 'Typography',
    description: 'Headings, text, links, and code blocks',
    icon: '✍️',
  },
  layout: {
    id: 'layout',
    name: 'Layout',
    description: 'Grid, flex, containers, and spacing utilities',
    icon: '📐',
  },
  advanced: {
    id: 'advanced',
    name: 'Advanced',
    description: 'Complex interactive components',
    icon: '⚡',
  },
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Get all categories with component counts
 */
export function getCategories(): CategoryInfo[] {
  const categoryCounts = componentRegistry.reduce(
    (acc, component) => {
      acc[component.category] = (acc[component.category] || 0) + 1
      return acc
    },
    {} as Record<ComponentCategory, number>,
  )

  return Object.values(categoryInfo).map((cat) => ({
    ...cat,
    count: categoryCounts[cat.id] || 0,
  }))
}

/**
 * Get components by category
 */
export function getComponentsByCategory(
  category: ComponentCategory,
): ComponentMetadata[] {
  return componentRegistry.filter((c) => c.category === category)
}

/**
 * Search components by query (name, description, tags)
 */
export function searchComponents(query: string): ComponentMetadata[] {
  if (!query.trim()) return componentRegistry

  const lowerQuery = query.toLowerCase().trim()

  return componentRegistry.filter((component) => {
    return (
      component.name.toLowerCase().includes(lowerQuery) ||
      component.description.toLowerCase().includes(lowerQuery) ||
      component.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    )
  })
}

/**
 * Filter components by multiple categories
 */
export function filterComponentsByCategories(
  categories: ComponentCategory[],
): ComponentMetadata[] {
  if (categories.length === 0) return componentRegistry

  return componentRegistry.filter((c) => categories.includes(c.category))
}

/**
 * Get component by ID
 */
export function getComponentById(id: string): ComponentMetadata | undefined {
  return componentRegistry.find((c) => c.id === id)
}

/**
 * Combined filter: search query + category filters
 */
export function filterComponents(
  searchQuery: string,
  categories: ComponentCategory[],
): ComponentMetadata[] {
  let results = componentRegistry

  // Apply category filter
  if (categories.length > 0) {
    results = results.filter((c) => categories.includes(c.category))
  }

  // Apply search filter
  if (searchQuery.trim()) {
    const lowerQuery = searchQuery.toLowerCase().trim()
    results = results.filter(
      (component) =>
        component.name.toLowerCase().includes(lowerQuery) ||
        component.description.toLowerCase().includes(lowerQuery) ||
        component.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
    )
  }

  return results
}

/**
 * Get component count
 */
export function getComponentCount(): number {
  return componentRegistry.length
}

/**
 * Get components by complexity
 */
export function getComponentsByComplexity(
  complexity: 1 | 2 | 3,
): ComponentMetadata[] {
  return componentRegistry.filter((c) => c.complexity === complexity)
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const tagSet = new Set<string>()
  for (const component of componentRegistry) {
    for (const tag of component.tags) {
      tagSet.add(tag)
    }
  }
  return Array.from(tagSet).sort()
}
