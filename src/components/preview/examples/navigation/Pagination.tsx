/**
 * Pagination component for navigating through pages of content.
 * Includes various pagination styles and configurations.
 * Uses design tokens for all styling properties.
 */
export function Pagination() {
  return (
    <div className="space-y-8">
      {/* Basic Pagination */}
      <nav
        aria-label="Pagination"
        className="flex items-center justify-center gap-[length:var(--spacing-2)]"
      >
        <button
          type="button"
          className="px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled
        >
          Previous
        </button>
        <button
          type="button"
          className="px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] bg-[color:var(--color-primary-500)] text-white rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)]"
          aria-current="page"
        >
          1
        </button>
        <button
          type="button"
          className="px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] transition-colors"
        >
          2
        </button>
        <button
          type="button"
          className="px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] transition-colors"
        >
          3
        </button>
        <button
          type="button"
          className="px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)] hover:bg-[color:var(--color-muted)] transition-colors"
        >
          Next
        </button>
      </nav>

      {/* Pagination with Ellipsis */}
      <nav
        aria-label="Pagination"
        className="flex items-center justify-center gap-[length:var(--spacing-2)]"
      >
        <button
          type="button"
          className="p-[length:var(--spacing-2)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] hover:bg-[color:var(--color-muted)] transition-colors"
          aria-label="Previous page"
        >
          <svg
            className="w-[length:var(--spacing-5)] h-[length:var(--spacing-5)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <title>Previous</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          type="button"
          className="min-w-[length:var(--spacing-10)] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] hover:bg-[color:var(--color-muted)] transition-colors"
        >
          1
        </button>
        <button
          type="button"
          className="min-w-[length:var(--spacing-10)] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] hover:bg-[color:var(--color-muted)] transition-colors"
        >
          2
        </button>
        <button
          type="button"
          className="min-w-[length:var(--spacing-10)] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] bg-[color:var(--color-primary-500)] text-white rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)]"
          aria-current="page"
        >
          3
        </button>
        <button
          type="button"
          className="min-w-[length:var(--spacing-10)] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] hover:bg-[color:var(--color-muted)] transition-colors"
        >
          4
        </button>
        <span className="px-[length:var(--spacing-2)] text-[color:var(--color-muted-foreground)]">
          ...
        </span>
        <button
          type="button"
          className="min-w-[length:var(--spacing-10)] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] hover:bg-[color:var(--color-muted)] transition-colors"
        >
          10
        </button>
        <button
          type="button"
          className="p-[length:var(--spacing-2)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] hover:bg-[color:var(--color-muted)] transition-colors"
          aria-label="Next page"
        >
          <svg
            className="w-[length:var(--spacing-5)] h-[length:var(--spacing-5)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <title>Next</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </nav>

      {/* Compact Pagination with Info */}
      <div className="flex items-center justify-between">
        <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
          Showing{' '}
          <span className="font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)]">
            1
          </span>{' '}
          to{' '}
          <span className="font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)]">
            10
          </span>{' '}
          of{' '}
          <span className="font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)]">
            97
          </span>{' '}
          results
        </p>
        <nav
          aria-label="Pagination"
          className="flex items-center gap-[length:var(--spacing-2)]"
        >
          <button
            type="button"
            className="px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] hover:bg-[color:var(--color-muted)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            Previous
          </button>
          <button
            type="button"
            className="px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] hover:bg-[color:var(--color-muted)] transition-colors"
          >
            Next
          </button>
        </nav>
      </div>

      {/* Simple Text Pagination */}
      <nav
        aria-label="Pagination"
        className="flex items-center justify-center gap-[length:var(--spacing-4)]"
      >
        <button
          type="button"
          className="flex items-center gap-[length:var(--spacing-2)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-primary-500)] transition-colors"
        >
          <svg
            className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <title>Previous</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Previous
        </button>
        <span className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
          Page{' '}
          <span className="font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)]">
            3
          </span>{' '}
          of{' '}
          <span className="font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)]">
            10
          </span>
        </span>
        <button
          type="button"
          className="flex items-center gap-[length:var(--spacing-2)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary-500)] transition-colors"
        >
          Next
          <svg
            className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <title>Next</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </nav>
    </div>
  )
}

export const paginationMeta = {
  id: 'pagination',
  name: 'Pagination',
  category: 'navigation' as const,
  description:
    'Page navigation controls with various styles and information displays',
  complexity: 'simple' as const,
  tags: ['navigation', 'pagination', 'pages', 'controls'],
}
