/**
 * Grid component demonstrating responsive grid layouts with design tokens.
 * Shows various column configurations and gap spacing.
 */
export function Grid() {
  const gridItems = Array.from({ length: 12 }, (_, i) => i + 1)

  return (
    <div className="space-y-[length:var(--spacing-8)]">
      {/* 2 Column Grid */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          2 Column Grid
        </h3>
        <div className="grid grid-cols-2 gap-[length:var(--spacing-4)]">
          {gridItems.slice(0, 4).map((num) => (
            <div
              key={num}
              className="
                bg-[color:var(--color-primary-500)]
                text-white
                rounded-[var(--radius-md)]
                p-[length:var(--spacing-4)]
                text-center
                font-[number:var(--font-weight-medium)]
              "
            >
              Item {num}
            </div>
          ))}
        </div>
      </div>

      {/* 3 Column Grid */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          3 Column Grid
        </h3>
        <div className="grid grid-cols-3 gap-[length:var(--spacing-4)]">
          {gridItems.slice(0, 6).map((num) => (
            <div
              key={num}
              className="
                bg-[color:var(--color-secondary-500)]
                text-white
                rounded-[var(--radius-md)]
                p-[length:var(--spacing-4)]
                text-center
                font-[number:var(--font-weight-medium)]
              "
            >
              Item {num}
            </div>
          ))}
        </div>
      </div>

      {/* 4 Column Grid */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          4 Column Grid
        </h3>
        <div className="grid grid-cols-4 gap-[length:var(--spacing-4)]">
          {gridItems.slice(0, 8).map((num) => (
            <div
              key={num}
              className="
                bg-[color:var(--color-accent-500)]
                text-white
                rounded-[var(--radius-md)]
                p-[length:var(--spacing-4)]
                text-center
                font-[number:var(--font-weight-medium)]
              "
            >
              Item {num}
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Grid (1/2/3/4 cols) */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Responsive Grid (1→2→3→4 columns)
        </h3>
        <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mb-[length:var(--spacing-4)]">
          Adapts from 1 column on mobile to 4 columns on desktop
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[length:var(--spacing-4)]">
          {gridItems.map((num) => (
            <div
              key={num}
              className="
                bg-[color:var(--color-card)]
                border-[length:var(--border-width)]
                border-[color:var(--color-border)]
                rounded-[var(--radius-md)]
                p-[length:var(--spacing-4)]
                text-center
                font-[number:var(--font-weight-medium)]
                hover:shadow-[var(--shadow-md)]
                transition-shadow
                duration-[var(--duration-fast)]
              "
            >
              Item {num}
            </div>
          ))}
        </div>
      </div>

      {/* Auto-fit Grid */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Auto-fit Grid (min 200px per item)
        </h3>
        <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mb-[length:var(--spacing-4)]">
          Automatically fits as many items as possible with a minimum width
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[length:var(--spacing-4)]">
          {gridItems.slice(0, 6).map((num) => (
            <div
              key={num}
              className="
                bg-[color:var(--color-muted)]
                rounded-[var(--radius-md)]
                p-[length:var(--spacing-4)]
                text-center
                font-[number:var(--font-weight-medium)]
              "
            >
              Auto Item {num}
            </div>
          ))}
        </div>
      </div>

      {/* Grid with Different Gap Sizes */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Variable Gap Sizes
        </h3>
        <div className="space-y-[length:var(--spacing-4)]">
          <div>
            <p className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)] mb-[length:var(--spacing-2)]">
              Small gap (2)
            </p>
            <div className="grid grid-cols-4 gap-[length:var(--spacing-2)]">
              {gridItems.slice(0, 4).map((num) => (
                <div
                  key={num}
                  className="
                    bg-[color:var(--color-primary-300)]
                    rounded-[var(--radius-sm)]
                    p-[length:var(--spacing-2)]
                    text-center
                    text-[length:var(--text-sm)]
                  "
                >
                  {num}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)] mb-[length:var(--spacing-2)]">
              Large gap (8)
            </p>
            <div className="grid grid-cols-4 gap-[length:var(--spacing-8)]">
              {gridItems.slice(0, 4).map((num) => (
                <div
                  key={num}
                  className="
                    bg-[color:var(--color-secondary-300)]
                    rounded-[var(--radius-sm)]
                    p-[length:var(--spacing-2)]
                    text-center
                    text-[length:var(--text-sm)]
                  "
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const gridMeta = {
  id: 'grid',
  name: 'Grid Layouts',
  category: 'layout' as const,
  description: 'Responsive grid layouts with various column configurations',
  complexity: 'simple' as const,
  tags: ['grid', 'responsive', 'columns', 'layout'],
}
