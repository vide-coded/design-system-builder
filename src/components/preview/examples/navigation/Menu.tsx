import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

/**
 * Menu (Dropdown) component with various menu patterns.
 * Includes context menus, dropdown menus, and command palettes.
 * Uses design tokens for all styling properties.
 */
export function Menu() {
  return (
    <div className="space-y-8">
      {/* Dropdown Menu */}
      <div>
        <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mb-4">
          Dropdown Menu Example
        </p>
        <div className="inline-block">
          <div className="min-w-[200px] bg-[color:var(--color-popover)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] shadow-[var(--shadow-lg)] p-[length:var(--spacing-1)]">
            <button
              type="button"
              className="w-full flex items-center gap-[length:var(--spacing-3)] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[length:var(--text-sm)] text-left hover:bg-[color:var(--color-muted)] rounded-[var(--radius-sm)] transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Profile</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Profile
              <span className="ml-auto text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                ⌘P
              </span>
            </button>
            <button
              type="button"
              className="w-full flex items-center gap-[length:var(--spacing-3)] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[length:var(--text-sm)] text-left hover:bg-[color:var(--color-muted)] rounded-[var(--radius-sm)] transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Settings</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Settings
              <span className="ml-auto text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                ⌘,
              </span>
            </button>
            <div className="h-[length:var(--border-width)] bg-[color:var(--color-border)] my-[length:var(--spacing-1)]" />
            <button
              type="button"
              className="w-full flex items-center gap-[length:var(--spacing-3)] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[length:var(--text-sm)] text-[color:var(--color-error-500)] text-left hover:bg-[color:var(--color-error-100)] rounded-[var(--radius-sm)] transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Logout</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Log out
            </button>
          </div>
        </div>
      </div>

      {/* Context Menu */}
      <div>
        <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mb-4">
          Context Menu Example
        </p>
        <div className="inline-block">
          <div className="min-w-[180px] bg-[color:var(--color-popover)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] shadow-[var(--shadow-lg)] p-[length:var(--spacing-1)]">
            <button
              type="button"
              className="w-full flex items-center justify-between px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[length:var(--text-sm)] text-left hover:bg-[color:var(--color-muted)] rounded-[var(--radius-sm)] transition-colors"
            >
              Open
              <span className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                ↵
              </span>
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-between px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[length:var(--text-sm)] text-left hover:bg-[color:var(--color-muted)] rounded-[var(--radius-sm)] transition-colors"
            >
              Rename
              <span className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                F2
              </span>
            </button>
            <div className="h-[length:var(--border-width)] bg-[color:var(--color-border)] my-[length:var(--spacing-1)]" />
            <button
              type="button"
              className="w-full flex items-center justify-between px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[length:var(--text-sm)] text-left hover:bg-[color:var(--color-muted)] rounded-[var(--radius-sm)] transition-colors"
            >
              Copy
              <span className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                ⌘C
              </span>
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-between px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[length:var(--text-sm)] text-left hover:bg-[color:var(--color-muted)] rounded-[var(--radius-sm)] transition-colors"
            >
              Cut
              <span className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                ⌘X
              </span>
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-between px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[length:var(--text-sm)] text-left hover:bg-[color:var(--color-muted)] rounded-[var(--radius-sm)] transition-colors"
            >
              Paste
              <span className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                ⌘V
              </span>
            </button>
            <div className="h-[length:var(--border-width)] bg-[color:var(--color-border)] my-[length:var(--spacing-1)]" />
            <button
              type="button"
              className="w-full flex items-center justify-between px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[length:var(--text-sm)] text-[color:var(--color-error-500)] text-left hover:bg-[color:var(--color-error-100)] rounded-[var(--radius-sm)] transition-colors"
            >
              Delete
              <span className="text-[length:var(--text-xs)] text-[color:var(--color-error-400)]">
                ⌫
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs as Navigation */}
      <div>
        <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mb-4">
          Tabs Navigation (using shadcn/ui)
        </p>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <div className="p-[length:var(--spacing-6)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)]">
              <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-2">
                Overview
              </h3>
              <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
                Dashboard overview and key metrics at a glance.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4">
            <div className="p-[length:var(--spacing-6)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)]">
              <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-2">
                Analytics
              </h3>
              <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
                Detailed analytics and performance data.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="reports" className="mt-4">
            <div className="p-[length:var(--spacing-6)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)]">
              <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-2">
                Reports
              </h3>
              <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
                Generate and view reports.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="settings" className="mt-4">
            <div className="p-[length:var(--spacing-6)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)]">
              <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-2">
                Settings
              </h3>
              <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
                Configure application settings.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export const menuMeta = {
  id: 'menu',
  name: 'Menu (Dropdown)',
  category: 'navigation' as const,
  description:
    'Dropdown menus, context menus, and tab navigation with keyboard shortcuts',
  complexity: 'simple' as const,
  tags: ['navigation', 'menu', 'dropdown', 'context', 'tabs'],
}
