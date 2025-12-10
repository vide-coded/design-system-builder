/**
 * Flex component demonstrating flexbox layouts with design tokens.
 * Shows horizontal, vertical, space distribution, and alignment patterns.
 */
export function Flex() {
  return (
    <div className="space-y-[length:var(--spacing-8)]">
      {/* Horizontal Flex - Space Between */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Horizontal - Space Between
        </h3>
        <div className="flex justify-between items-center bg-[color:var(--color-muted)] rounded-[var(--radius-md)] p-[length:var(--spacing-4)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
          <div className="bg-[color:var(--color-primary-500)] text-white rounded-[var(--radius-sm)] px-[length:var(--spacing-4)] py-[length:var(--spacing-2)]">
            Left
          </div>
          <div className="bg-[color:var(--color-primary-500)] text-white rounded-[var(--radius-sm)] px-[length:var(--spacing-4)] py-[length:var(--spacing-2)]">
            Center
          </div>
          <div className="bg-[color:var(--color-primary-500)] text-white rounded-[var(--radius-sm)] px-[length:var(--spacing-4)] py-[length:var(--spacing-2)]">
            Right
          </div>
        </div>
      </div>

      {/* Horizontal Flex - Gap */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Horizontal - With Gap
        </h3>
        <div className="flex gap-[length:var(--spacing-4)] bg-[color:var(--color-muted)] rounded-[var(--radius-md)] p-[length:var(--spacing-4)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
          <div className="bg-[color:var(--color-secondary-500)] text-white rounded-[var(--radius-sm)] px-[length:var(--spacing-4)] py-[length:var(--spacing-2)]">
            Item 1
          </div>
          <div className="bg-[color:var(--color-secondary-500)] text-white rounded-[var(--radius-sm)] px-[length:var(--spacing-4)] py-[length:var(--spacing-2)]">
            Item 2
          </div>
          <div className="bg-[color:var(--color-secondary-500)] text-white rounded-[var(--radius-sm)] px-[length:var(--spacing-4)] py-[length:var(--spacing-2)]">
            Item 3
          </div>
        </div>
      </div>

      {/* Flex Wrap */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Flex Wrap
        </h3>
        <div className="flex flex-wrap gap-[length:var(--spacing-3)] bg-[color:var(--color-muted)] rounded-[var(--radius-md)] p-[length:var(--spacing-4)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="bg-[color:var(--color-accent-500)] text-white rounded-[var(--radius-sm)] px-[length:var(--spacing-3)] py-[length:var(--spacing-1.5)] text-[length:var(--text-sm)]"
            >
              Tag {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Vertical Alignment */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Vertical Alignment
        </h3>
        <div className="space-y-[length:var(--spacing-3)]">
          <div>
            <p className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)] mb-[length:var(--spacing-2)]">
              Align Start
            </p>
            <div className="flex items-start gap-[length:var(--spacing-2)] bg-[color:var(--color-muted)] rounded-[var(--radius-md)] p-[length:var(--spacing-4)] border-[length:var(--border-width)] border-[color:var(--color-border)] h-24">
              <div className="bg-[color:var(--color-primary-500)] text-white rounded-[var(--radius-sm)] px-[length:var(--spacing-3)] py-[length:var(--spacing-1.5)] text-[length:var(--text-sm)]">
                Top
              </div>
              <div className="bg-[color:var(--color-primary-500)] text-white rounded-[var(--radius-sm)] px-[length:var(--spacing-3)] py-[length:var(--spacing-1.5)] text-[length:var(--text-sm)]">
                Aligned
              </div>
            </div>
          </div>

          <div>
            <p className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)] mb-[length:var(--spacing-2)]">
              Align Center
            </p>
            <div className="flex items-center gap-[length:var(--spacing-2)] bg-[color:var(--color-muted)] rounded-[var(--radius-md)] p-[length:var(--spacing-4)] border-[length:var(--border-width)] border-[color:var(--color-border)] h-24">
              <div className="bg-[color:var(--color-secondary-500)] text-white rounded-[var(--radius-sm)] px-[length:var(--spacing-3)] py-[length:var(--spacing-1.5)] text-[length:var(--text-sm)]">
                Center
              </div>
              <div className="bg-[color:var(--color-secondary-500)] text-white rounded-[var(--radius-sm)] px-[length:var(--spacing-3)] py-[length:var(--spacing-1.5)] text-[length:var(--text-sm)]">
                Aligned
              </div>
            </div>
          </div>

          <div>
            <p className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)] mb-[length:var(--spacing-2)]">
              Align End
            </p>
            <div className="flex items-end gap-[length:var(--spacing-2)] bg-[color:var(--color-muted)] rounded-[var(--radius-md)] p-[length:var(--spacing-4)] border-[length:var(--border-width)] border-[color:var(--color-border)] h-24">
              <div className="bg-[color:var(--color-accent-500)] text-white rounded-[var(--radius-sm)] px-[length:var(--spacing-3)] py-[length:var(--spacing-1.5)] text-[length:var(--text-sm)]">
                Bottom
              </div>
              <div className="bg-[color:var(--color-accent-500)] text-white rounded-[var(--radius-sm)] px-[length:var(--spacing-3)] py-[length:var(--spacing-1.5)] text-[length:var(--text-sm)]">
                Aligned
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flex Grow/Shrink */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Flex Grow
        </h3>
        <div className="flex gap-[length:var(--spacing-2)] bg-[color:var(--color-muted)] rounded-[var(--radius-md)] p-[length:var(--spacing-4)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
          <div className="bg-[color:var(--color-primary-500)] text-white rounded-[var(--radius-sm)] px-[length:var(--spacing-4)] py-[length:var(--spacing-2)]">
            Fixed
          </div>
          <div className="flex-1 bg-[color:var(--color-secondary-500)] text-white rounded-[var(--radius-sm)] px-[length:var(--spacing-4)] py-[length:var(--spacing-2)] text-center">
            Grows to fill
          </div>
          <div className="bg-[color:var(--color-primary-500)] text-white rounded-[var(--radius-sm)] px-[length:var(--spacing-4)] py-[length:var(--spacing-2)]">
            Fixed
          </div>
        </div>
      </div>

      {/* Responsive Flex Direction */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Responsive Direction (column → row)
        </h3>
        <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mb-[length:var(--spacing-4)]">
          Stacks vertically on mobile, horizontal on desktop
        </p>
        <div className="flex flex-col md:flex-row gap-[length:var(--spacing-4)] bg-[color:var(--color-muted)] rounded-[var(--radius-md)] p-[length:var(--spacing-4)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
          <div className="flex-1 bg-[color:var(--color-card)] rounded-[var(--radius-sm)] p-[length:var(--spacing-4)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
            <h4 className="font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-2)]">
              Section 1
            </h4>
            <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
              Content here
            </p>
          </div>
          <div className="flex-1 bg-[color:var(--color-card)] rounded-[var(--radius-sm)] p-[length:var(--spacing-4)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
            <h4 className="font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-2)]">
              Section 2
            </h4>
            <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
              Content here
            </p>
          </div>
          <div className="flex-1 bg-[color:var(--color-card)] rounded-[var(--radius-sm)] p-[length:var(--spacing-4)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
            <h4 className="font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-2)]">
              Section 3
            </h4>
            <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
              Content here
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const flexMeta = {
  id: 'flex',
  name: 'Flex Layouts',
  category: 'layout' as const,
  description:
    'Flexbox layouts with various alignment and distribution patterns',
  complexity: 'simple' as const,
  tags: ['flex', 'flexbox', 'alignment', 'layout', 'responsive'],
}
