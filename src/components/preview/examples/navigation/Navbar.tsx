/**
 * Navbar component demonstrating top navigation patterns.
 * Includes logo, navigation links, search, and user menu.
 * Uses design tokens for all styling properties.
 */
export function Navbar() {
  return (
    <div className="space-y-8">
      {/* Basic Navbar */}
      <nav className="bg-[color:var(--color-background)] border-b-[length:var(--border-width)] border-[color:var(--color-border)] px-[length:var(--spacing-6)] py-[length:var(--spacing-4)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[length:var(--spacing-8)]">
            <div className="font-[number:var(--font-weight-bold)] text-[length:var(--text-xl)] text-[color:var(--color-primary-500)]">
              Logo
            </div>
            <div className="hidden md:flex gap-[length:var(--spacing-6)]">
              <a
                href="#home"
                className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary-500)] transition-colors duration-[var(--duration-fast)]"
              >
                Home
              </a>
              <a
                href="#products"
                className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-primary-500)] transition-colors duration-[var(--duration-fast)]"
              >
                Products
              </a>
              <a
                href="#about"
                className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-primary-500)] transition-colors duration-[var(--duration-fast)]"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-primary-500)] transition-colors duration-[var(--duration-fast)]"
              >
                Contact
              </a>
            </div>
          </div>
          <button
            type="button"
            className="px-[length:var(--spacing-4)] py-[length:var(--spacing-2)] bg-[color:var(--color-primary-500)] hover:bg-[color:var(--color-primary-600)] text-white rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] transition-colors duration-[var(--duration-fast)]"
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* Navbar with Search */}
      <nav className="bg-[color:var(--color-background)] border-b-[length:var(--border-width)] border-[color:var(--color-border)] px-[length:var(--spacing-6)] py-[length:var(--spacing-4)]">
        <div className="flex items-center justify-between gap-[length:var(--spacing-4)]">
          <div className="font-[number:var(--font-weight-bold)] text-[length:var(--text-xl)] text-[color:var(--color-primary-500)]">
            Brand
          </div>
          <div className="flex-1 max-w-md">
            <div className="relative">
              <svg
                className="absolute left-[length:var(--spacing-3)] top-1/2 -translate-y-1/2 w-[length:var(--spacing-4)] h-[length:var(--spacing-4)] text-[color:var(--color-muted-foreground)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Search</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-[length:var(--spacing-10)] pr-[length:var(--spacing-4)] py-[length:var(--spacing-2)] bg-[color:var(--color-muted)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ring)] transition-shadow"
              />
            </div>
          </div>
          <div className="flex items-center gap-[length:var(--spacing-4)]">
            <button
              type="button"
              className="p-[length:var(--spacing-2)] hover:bg-[color:var(--color-muted)] rounded-[var(--radius-md)] transition-colors"
              aria-label="Notifications"
            >
              <svg
                className="w-[length:var(--spacing-5)] h-[length:var(--spacing-5)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Notifications</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <div className="w-[length:var(--spacing-8)] h-[length:var(--spacing-8)] rounded-full bg-[color:var(--color-primary-500)] flex items-center justify-center text-white text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)]">
              JD
            </div>
          </div>
        </div>
      </nav>

      {/* Navbar with Dropdown Menu */}
      <nav className="bg-[color:var(--color-background)] border-b-[length:var(--border-width)] border-[color:var(--color-border)] px-[length:var(--spacing-6)] py-[length:var(--spacing-4)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[length:var(--spacing-8)]">
            <div className="font-[number:var(--font-weight-bold)] text-[length:var(--text-xl)] text-[color:var(--color-primary-500)]">
              SaaS
            </div>
            <div className="hidden md:flex gap-[length:var(--spacing-6)]">
              <a
                href="#dashboard"
                className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary-500)] transition-colors"
              >
                Dashboard
              </a>
              <div className="relative group">
                <button
                  type="button"
                  className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-primary-500)] transition-colors flex items-center gap-[length:var(--spacing-1)]"
                >
                  Resources
                  <svg
                    className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title>Expand</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-[length:var(--spacing-2)] w-48 bg-[color:var(--color-popover)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] shadow-[var(--shadow-lg)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-[var(--duration-fast)]">
                  <a
                    href="#docs"
                    className="block px-[length:var(--spacing-4)] py-[length:var(--spacing-2)] text-[length:var(--text-sm)] hover:bg-[color:var(--color-muted)] transition-colors"
                  >
                    Documentation
                  </a>
                  <a
                    href="#guides"
                    className="block px-[length:var(--spacing-4)] py-[length:var(--spacing-2)] text-[length:var(--text-sm)] hover:bg-[color:var(--color-muted)] transition-colors"
                  >
                    Guides
                  </a>
                  <a
                    href="#api"
                    className="block px-[length:var(--spacing-4)] py-[length:var(--spacing-2)] text-[length:var(--text-sm)] hover:bg-[color:var(--color-muted)] transition-colors"
                  >
                    API Reference
                  </a>
                </div>
              </div>
              <a
                href="#pricing"
                className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-primary-500)] transition-colors"
              >
                Pricing
              </a>
            </div>
          </div>
          <div className="flex items-center gap-[length:var(--spacing-3)]">
            <button
              type="button"
              className="px-[length:var(--spacing-4)] py-[length:var(--spacing-2)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)] hover:bg-[color:var(--color-muted)] rounded-[var(--radius-md)] transition-colors"
            >
              Log in
            </button>
            <button
              type="button"
              className="px-[length:var(--spacing-4)] py-[length:var(--spacing-2)] bg-[color:var(--color-primary-500)] hover:bg-[color:var(--color-primary-600)] text-white rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] transition-colors"
            >
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export const navbarMeta = {
  id: 'navbar',
  name: 'Navbar',
  category: 'navigation' as const,
  description:
    'Top navigation bars with logo, links, search, and user menu variations',
  complexity: 'medium' as const,
  tags: ['navigation', 'navbar', 'header', 'menu', 'search'],
}
