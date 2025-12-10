/**
 * ImageCard - Card with image header
 * Demonstrates image cards with various layouts
 */

export function ImageCard() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-foreground">Image Card</h3>
        <p className="text-xs text-muted-foreground">
          Cards with image headers in various layouts
        </p>
      </div>

      {/* Vertical Image Card */}
      <div
        className="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
        style={{
          borderRadius: 'var(--radius-lg)',
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-card)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        {/* Image */}
        <div
          className="aspect-video w-full bg-muted"
          style={{
            backgroundColor: 'var(--color-muted)',
          }}
        >
          <div className="flex h-full items-center justify-center">
            <svg
              className="h-12 w-12 text-muted-foreground"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <title>Image placeholder</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div
          className="p-6"
          style={{
            padding: 'var(--spacing-6)',
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
            Beautiful Landscape
          </h3>
          <p
            className="mt-2 text-sm text-muted-foreground"
            style={{
              marginTop: 'var(--spacing-2)',
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            A stunning view of mountains and valleys captured at sunset. Perfect
            for showcasing imagery in your design.
          </p>
          <button
            type="button"
            className="mt-4 rounded px-4 py-2 text-sm font-medium transition-colors"
            style={{
              marginTop: 'var(--spacing-4)',
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-primary-foreground)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--spacing-2) var(--spacing-4)',
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)',
            }}
          >
            View Details
          </button>
        </div>
      </div>

      {/* Horizontal Image Card */}
      <div
        className="flex overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
        style={{
          borderRadius: 'var(--radius-lg)',
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-card)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        {/* Image */}
        <div
          className="flex w-1/3 items-center justify-center bg-muted"
          style={{
            backgroundColor: 'var(--color-muted)',
          }}
        >
          <svg
            className="h-12 w-12 text-muted-foreground"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <title>Image placeholder</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Content */}
        <div
          className="flex-1 p-6"
          style={{
            padding: 'var(--spacing-6)',
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
            Horizontal Layout
          </h3>
          <p
            className="mt-2 text-sm text-muted-foreground"
            style={{
              marginTop: 'var(--spacing-2)',
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            Images can be positioned to the side for a more compact layout.
          </p>
        </div>
      </div>

      {/* Image Card Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            style={{
              borderRadius: 'var(--radius-lg)',
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-card)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            {/* Small Image */}
            <div
              className="aspect-square w-full bg-muted"
              style={{
                backgroundColor: 'var(--color-muted)',
              }}
            >
              <div className="flex h-full items-center justify-center">
                <svg
                  className="h-8 w-8 text-muted-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <title>Image placeholder</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div
              className="p-4"
              style={{
                padding: 'var(--spacing-4)',
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
                Gallery Item {i}
              </h4>
              <p
                className="mt-1 text-xs text-muted-foreground"
                style={{
                  marginTop: 'var(--spacing-1)',
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--color-muted-foreground)',
                }}
              >
                Image card in grid
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
