/**
 * BasicCard - Simple card component with header, content, and footer
 * Uses design system tokens for colors, spacing, borders, and shadows
 */

export function BasicCard() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-foreground">Basic Card</h3>
        <p className="text-xs text-muted-foreground">
          Simple card with header and content
        </p>
      </div>

      {/* Simple Card */}
      <div
        className="rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
        style={{
          borderRadius: 'var(--radius-lg)',
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-card)',
          padding: 'var(--spacing-6)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <h3
          className="text-lg font-semibold text-card-foreground"
          style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-card-foreground)',
          }}
        >
          Card Title
        </h3>
        <p
          className="mt-2 text-sm text-muted-foreground"
          style={{
            marginTop: 'var(--spacing-2)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-muted-foreground)',
          }}
        >
          This is a basic card component with a title and description. It uses
          design system tokens for consistent styling.
        </p>
      </div>

      {/* Card with Header and Footer */}
      <div
        className="rounded-lg border border-border bg-card shadow-sm"
        style={{
          borderRadius: 'var(--radius-lg)',
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-card)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        {/* Header */}
        <div
          className="border-b border-border px-6 py-4"
          style={{
            borderBottomColor: 'var(--color-border)',
            padding: 'var(--spacing-4) var(--spacing-6)',
          }}
        >
          <h3
            className="text-base font-semibold text-card-foreground"
            style={{
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--color-card-foreground)',
            }}
          >
            Card with Header
          </h3>
          <p
            className="mt-1 text-xs text-muted-foreground"
            style={{
              marginTop: 'var(--spacing-1)',
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            Includes header, content, and footer sections
          </p>
        </div>

        {/* Content */}
        <div
          className="px-6 py-4"
          style={{
            padding: 'var(--spacing-4) var(--spacing-6)',
          }}
        >
          <p
            className="text-sm text-card-foreground"
            style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-card-foreground)',
            }}
          >
            The card body contains the main content. It's separated from the
            header and footer with border dividers.
          </p>
        </div>

        {/* Footer */}
        <div
          className="border-t border-border px-6 py-4"
          style={{
            borderTopColor: 'var(--color-border)',
            padding: 'var(--spacing-4) var(--spacing-6)',
          }}
        >
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded px-4 py-2 text-sm font-medium transition-colors"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-primary-foreground)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--spacing-2) var(--spacing-4)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
              }}
            >
              Action
            </button>
            <button
              type="button"
              className="rounded px-4 py-2 text-sm font-medium transition-colors"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--color-muted-foreground)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--spacing-2) var(--spacing-4)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        <div
          className="rounded-lg border border-border bg-card p-4 shadow-sm"
          style={{
            borderRadius: 'var(--radius-lg)',
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-card)',
            padding: 'var(--spacing-4)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <h4
            className="text-sm font-medium text-card-foreground"
            style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-card-foreground)',
            }}
          >
            Small Card 1
          </h4>
          <p
            className="mt-1 text-xs text-muted-foreground"
            style={{
              marginTop: 'var(--spacing-1)',
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            Cards can be arranged in grids
          </p>
        </div>

        <div
          className="rounded-lg border border-border bg-card p-4 shadow-sm"
          style={{
            borderRadius: 'var(--radius-lg)',
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-card)',
            padding: 'var(--spacing-4)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <h4
            className="text-sm font-medium text-card-foreground"
            style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-card-foreground)',
            }}
          >
            Small Card 2
          </h4>
          <p
            className="mt-1 text-xs text-muted-foreground"
            style={{
              marginTop: 'var(--spacing-1)',
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            Using responsive grid layouts
          </p>
        </div>
      </div>
    </div>
  )
}
