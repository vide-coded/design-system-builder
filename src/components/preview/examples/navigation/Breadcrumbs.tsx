/**
 * Breadcrumbs component for hierarchical navigation.
 * Shows the current page's location within the site hierarchy.
 * Uses design tokens for all styling properties.
 */
export function Breadcrumbs() {
  return (
    <div className="space-y-8">
      {/* Basic Breadcrumbs */}
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-[length:var(--spacing-2)] text-[length:var(--text-sm)]">
          <li>
            <a
              href="#home"
              className="text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-foreground)] transition-colors duration-[var(--duration-fast)]"
            >
              Home
            </a>
          </li>
          <li className="text-[color:var(--color-muted-foreground)]">/</li>
          <li>
            <a
              href="#products"
              className="text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-foreground)] transition-colors duration-[var(--duration-fast)]"
            >
              Products
            </a>
          </li>
          <li className="text-[color:var(--color-muted-foreground)]">/</li>
          <li>
            <span className="text-[color:var(--color-foreground)] font-[number:var(--font-weight-medium)]">
              Laptop
            </span>
          </li>
        </ol>
      </nav>

      {/* Breadcrumbs with Icons */}
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-[length:var(--spacing-2)] text-[length:var(--text-sm)]">
          <li>
            <a
              href="#home"
              className="flex items-center gap-[length:var(--spacing-1.5)] text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-foreground)] transition-colors"
            >
              <svg
                className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Home</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </a>
          </li>
          <li>
            <svg
              className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)] text-[color:var(--color-muted-foreground)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <title>Separator</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </li>
          <li>
            <a
              href="#category"
              className="text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-foreground)] transition-colors"
            >
              Electronics
            </a>
          </li>
          <li>
            <svg
              className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)] text-[color:var(--color-muted-foreground)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <title>Separator</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </li>
          <li>
            <a
              href="#subcategory"
              className="text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-foreground)] transition-colors"
            >
              Computers
            </a>
          </li>
          <li>
            <svg
              className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)] text-[color:var(--color-muted-foreground)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <title>Separator</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </li>
          <li>
            <span className="text-[color:var(--color-foreground)] font-[number:var(--font-weight-medium)]">
              MacBook Pro
            </span>
          </li>
        </ol>
      </nav>

      {/* Breadcrumbs with Ellipsis */}
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-[length:var(--spacing-2)] text-[length:var(--text-sm)]">
          <li>
            <a
              href="#home"
              className="text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-foreground)] transition-colors"
            >
              Home
            </a>
          </li>
          <li className="text-[color:var(--color-muted-foreground)]">/</li>
          <li>
            <button
              type="button"
              className="text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-foreground)] transition-colors"
              aria-label="Show hidden breadcrumbs"
            >
              ...
            </button>
          </li>
          <li className="text-[color:var(--color-muted-foreground)]">/</li>
          <li>
            <a
              href="#parent"
              className="text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-foreground)] transition-colors"
            >
              Parent Page
            </a>
          </li>
          <li className="text-[color:var(--color-muted-foreground)]">/</li>
          <li>
            <span className="text-[color:var(--color-foreground)] font-[number:var(--font-weight-medium)]">
              Current Page
            </span>
          </li>
        </ol>
      </nav>

      {/* Breadcrumbs with Background */}
      <nav
        aria-label="Breadcrumb"
        className="bg-[color:var(--color-muted)] px-[length:var(--spacing-4)] py-[length:var(--spacing-3)] rounded-[var(--radius-md)]"
      >
        <ol className="flex items-center gap-[length:var(--spacing-2)] text-[length:var(--text-sm)]">
          <li>
            <a
              href="#dashboard"
              className="text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-primary-500)] transition-colors"
            >
              Dashboard
            </a>
          </li>
          <li>
            <svg
              className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)] text-[color:var(--color-muted-foreground)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <title>Separator</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </li>
          <li>
            <a
              href="#projects"
              className="text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-primary-500)] transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <svg
              className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)] text-[color:var(--color-muted-foreground)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <title>Separator</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </li>
          <li>
            <span className="text-[color:var(--color-foreground)] font-[number:var(--font-weight-semibold)]">
              Design System
            </span>
          </li>
        </ol>
      </nav>
    </div>
  )
}

export const breadcrumbsMeta = {
  id: 'breadcrumbs',
  name: 'Breadcrumbs',
  category: 'navigation' as const,
  description:
    'Hierarchical navigation showing current location with multiple styles',
  complexity: 'simple' as const,
  tags: ['navigation', 'breadcrumbs', 'hierarchy', 'path'],
}
