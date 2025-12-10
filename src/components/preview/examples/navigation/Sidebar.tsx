/**
 * Sidebar component demonstrating vertical navigation patterns.
 * Includes collapsible sections, nested navigation, and user profile.
 * Uses design tokens for all styling properties.
 */
export function Sidebar() {
  return (
    <div className="space-y-8">
      {/* Basic Sidebar */}
      <div className="w-64 bg-[color:var(--color-background)] border-r-[length:var(--border-width)] border-[color:var(--color-border)] p-[length:var(--spacing-4)] rounded-[var(--radius-lg)]">
        <div className="mb-[length:var(--spacing-6)]">
          <h2 className="font-[number:var(--font-weight-bold)] text-[length:var(--text-lg)] text-[color:var(--color-foreground)] mb-[length:var(--spacing-4)]">
            Dashboard
          </h2>
          <nav className="space-y-[length:var(--spacing-1)]">
            <a
              href="#overview"
              className="flex items-center gap-[length:var(--spacing-3)] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] bg-[color:var(--color-primary-500)] text-white rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)]"
            >
              <svg
                className="w-[length:var(--spacing-5)] h-[length:var(--spacing-5)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Overview</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Overview
            </a>
            <a
              href="#analytics"
              className="flex items-center gap-[length:var(--spacing-3)] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] transition-colors duration-[var(--duration-fast)]"
            >
              <svg
                className="w-[length:var(--spacing-5)] h-[length:var(--spacing-5)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Analytics</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Analytics
            </a>
            <a
              href="#customers"
              className="flex items-center gap-[length:var(--spacing-3)] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] transition-colors duration-[var(--duration-fast)]"
            >
              <svg
                className="w-[length:var(--spacing-5)] h-[length:var(--spacing-5)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Customers</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              Customers
            </a>
            <a
              href="#products"
              className="flex items-center gap-[length:var(--spacing-3)] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] transition-colors duration-[var(--duration-fast)]"
            >
              <svg
                className="w-[length:var(--spacing-5)] h-[length:var(--spacing-5)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Products</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
              Products
            </a>
          </nav>
        </div>

        <div className="pt-[length:var(--spacing-4)] border-t-[length:var(--border-width)] border-[color:var(--color-border)]">
          <nav className="space-y-[length:var(--spacing-1)]">
            <a
              href="#settings"
              className="flex items-center gap-[length:var(--spacing-3)] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] transition-colors"
            >
              <svg
                className="w-[length:var(--spacing-5)] h-[length:var(--spacing-5)]"
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
            </a>
          </nav>
        </div>
      </div>

      {/* Sidebar with Sections */}
      <div className="w-64 bg-[color:var(--color-background)] border-r-[length:var(--border-width)] border-[color:var(--color-border)] p-[length:var(--spacing-4)] rounded-[var(--radius-lg)]">
        <div className="space-y-[length:var(--spacing-6)]">
          <div>
            <h3 className="px-[length:var(--spacing-3)] text-[length:var(--text-xs)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-muted-foreground)] uppercase tracking-wider mb-[length:var(--spacing-2)]">
              Workspace
            </h3>
            <nav className="space-y-[length:var(--spacing-1)]">
              <a
                href="#home"
                className="flex items-center gap-[length:var(--spacing-3)] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] transition-colors"
              >
                Home
              </a>
              <a
                href="#inbox"
                className="flex items-center justify-between gap-[length:var(--spacing-3)] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] transition-colors"
              >
                Inbox
                <span className="px-[length:var(--spacing-2)] py-[length:var(--spacing-0.5)] bg-[color:var(--color-primary-500)] text-white rounded-full text-[length:var(--text-xs)] font-[number:var(--font-weight-medium)]">
                  3
                </span>
              </a>
              <a
                href="#projects"
                className="flex items-center gap-[length:var(--spacing-3)] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] transition-colors"
              >
                Projects
              </a>
            </nav>
          </div>

          <div>
            <h3 className="px-[length:var(--spacing-3)] text-[length:var(--text-xs)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-muted-foreground)] uppercase tracking-wider mb-[length:var(--spacing-2)]">
              Teams
            </h3>
            <nav className="space-y-[length:var(--spacing-1)]">
              <a
                href="#team-design"
                className="flex items-center gap-[length:var(--spacing-3)] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] transition-colors"
              >
                <span className="w-[length:var(--spacing-2)] h-[length:var(--spacing-2)] rounded-full bg-[color:var(--color-primary-500)]" />
                Design Team
              </a>
              <a
                href="#team-engineering"
                className="flex items-center gap-[length:var(--spacing-3)] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] transition-colors"
              >
                <span className="w-[length:var(--spacing-2)] h-[length:var(--spacing-2)] rounded-full bg-[color:var(--color-success-500)]" />
                Engineering
              </a>
              <a
                href="#team-marketing"
                className="flex items-center gap-[length:var(--spacing-3)] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] transition-colors"
              >
                <span className="w-[length:var(--spacing-2)] h-[length:var(--spacing-2)] rounded-full bg-[color:var(--color-accent-500)]" />
                Marketing
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export const sidebarMeta = {
  id: 'sidebar',
  name: 'Sidebar',
  category: 'navigation' as const,
  description: 'Vertical navigation sidebars with icons, sections, and badges',
  complexity: 'medium' as const,
  tags: ['navigation', 'sidebar', 'menu', 'vertical'],
}
