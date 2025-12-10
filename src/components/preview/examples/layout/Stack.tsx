/**
 * Stack component demonstrating vertical and horizontal stack layouts.
 * Shows spacing and divider patterns with design tokens.
 */
export function Stack() {
  return (
    <div className="space-y-[length:var(--spacing-8)]">
      {/* Vertical Stack */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Vertical Stack
        </h3>
        <div className="space-y-[length:var(--spacing-4)] bg-[color:var(--color-muted)] rounded-[var(--radius-md)] p-[length:var(--spacing-6)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
          <div className="bg-[color:var(--color-card)] rounded-[var(--radius-sm)] p-[length:var(--spacing-4)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
            <h4 className="font-[number:var(--font-weight-semibold)] text-[length:var(--text-base)]">
              Item 1
            </h4>
            <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mt-[length:var(--spacing-1)]">
              First item in the stack
            </p>
          </div>
          <div className="bg-[color:var(--color-card)] rounded-[var(--radius-sm)] p-[length:var(--spacing-4)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
            <h4 className="font-[number:var(--font-weight-semibold)] text-[length:var(--text-base)]">
              Item 2
            </h4>
            <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mt-[length:var(--spacing-1)]">
              Second item in the stack
            </p>
          </div>
          <div className="bg-[color:var(--color-card)] rounded-[var(--radius-sm)] p-[length:var(--spacing-4)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
            <h4 className="font-[number:var(--font-weight-semibold)] text-[length:var(--text-base)]">
              Item 3
            </h4>
            <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mt-[length:var(--spacing-1)]">
              Third item in the stack
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Stack */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Horizontal Stack
        </h3>
        <div className="flex gap-[length:var(--spacing-4)] bg-[color:var(--color-muted)] rounded-[var(--radius-md)] p-[length:var(--spacing-6)] border-[length:var(--border-width)] border-[color:var(--color-border)] overflow-x-auto">
          <div className="min-w-[200px] bg-[color:var(--color-card)] rounded-[var(--radius-sm)] p-[length:var(--spacing-4)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
            <h4 className="font-[number:var(--font-weight-semibold)] text-[length:var(--text-base)]">
              Item 1
            </h4>
            <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mt-[length:var(--spacing-1)]">
              Horizontal item
            </p>
          </div>
          <div className="min-w-[200px] bg-[color:var(--color-card)] rounded-[var(--radius-sm)] p-[length:var(--spacing-4)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
            <h4 className="font-[number:var(--font-weight-semibold)] text-[length:var(--text-base)]">
              Item 2
            </h4>
            <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mt-[length:var(--spacing-1)]">
              Horizontal item
            </p>
          </div>
          <div className="min-w-[200px] bg-[color:var(--color-card)] rounded-[var(--radius-sm)] p-[length:var(--spacing-4)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
            <h4 className="font-[number:var(--font-weight-semibold)] text-[length:var(--text-base)]">
              Item 3
            </h4>
            <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mt-[length:var(--spacing-1)]">
              Horizontal item
            </p>
          </div>
        </div>
      </div>

      {/* Stack with Dividers */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Stack with Dividers
        </h3>
        <div className="bg-[color:var(--color-card)] rounded-[var(--radius-md)] border-[length:var(--border-width)] border-[color:var(--color-border)] overflow-hidden">
          <div className="p-[length:var(--spacing-4)]">
            <h4 className="font-[number:var(--font-weight-semibold)] text-[length:var(--text-base)]">
              First Section
            </h4>
            <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mt-[length:var(--spacing-1)]">
              Content for first section
            </p>
          </div>
          <div className="h-[1px] bg-[color:var(--color-border)]" />
          <div className="p-[length:var(--spacing-4)]">
            <h4 className="font-[number:var(--font-weight-semibold)] text-[length:var(--text-base)]">
              Second Section
            </h4>
            <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mt-[length:var(--spacing-1)]">
              Content for second section
            </p>
          </div>
          <div className="h-[1px] bg-[color:var(--color-border)]" />
          <div className="p-[length:var(--spacing-4)]">
            <h4 className="font-[number:var(--font-weight-semibold)] text-[length:var(--text-base)]">
              Third Section
            </h4>
            <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mt-[length:var(--spacing-1)]">
              Content for third section
            </p>
          </div>
        </div>
      </div>

      {/* Variable Spacing Stacks */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Variable Spacing
        </h3>
        <div className="space-y-[length:var(--spacing-4)]">
          <div>
            <p className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)] mb-[length:var(--spacing-2)]">
              Tight spacing (2)
            </p>
            <div className="space-y-[length:var(--spacing-2)] bg-[color:var(--color-muted)] rounded-[var(--radius-md)] p-[length:var(--spacing-4)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
              <div className="bg-[color:var(--color-primary-500)] text-white rounded-[var(--radius-sm)] p-[length:var(--spacing-2)] text-[length:var(--text-sm)]">
                Item A
              </div>
              <div className="bg-[color:var(--color-primary-500)] text-white rounded-[var(--radius-sm)] p-[length:var(--spacing-2)] text-[length:var(--text-sm)]">
                Item B
              </div>
              <div className="bg-[color:var(--color-primary-500)] text-white rounded-[var(--radius-sm)] p-[length:var(--spacing-2)] text-[length:var(--text-sm)]">
                Item C
              </div>
            </div>
          </div>

          <div>
            <p className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)] mb-[length:var(--spacing-2)]">
              Loose spacing (8)
            </p>
            <div className="space-y-[length:var(--spacing-8)] bg-[color:var(--color-muted)] rounded-[var(--radius-md)] p-[length:var(--spacing-4)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
              <div className="bg-[color:var(--color-secondary-500)] text-white rounded-[var(--radius-sm)] p-[length:var(--spacing-2)] text-[length:var(--text-sm)]">
                Item X
              </div>
              <div className="bg-[color:var(--color-secondary-500)] text-white rounded-[var(--radius-sm)] p-[length:var(--spacing-2)] text-[length:var(--text-sm)]">
                Item Y
              </div>
              <div className="bg-[color:var(--color-secondary-500)] text-white rounded-[var(--radius-sm)] p-[length:var(--spacing-2)] text-[length:var(--text-sm)]">
                Item Z
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nested Stacks */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Nested Stacks
        </h3>
        <div className="space-y-[length:var(--spacing-4)] bg-[color:var(--color-muted)] rounded-[var(--radius-md)] p-[length:var(--spacing-6)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
          <div className="bg-[color:var(--color-card)] rounded-[var(--radius-sm)] p-[length:var(--spacing-4)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
            <h4 className="font-[number:var(--font-weight-semibold)] text-[length:var(--text-base)] mb-[length:var(--spacing-3)]">
              Parent Stack Item 1
            </h4>
            <div className="space-y-[length:var(--spacing-2)]">
              <div className="bg-[color:var(--color-muted)] rounded-[var(--radius-sm)] p-[length:var(--spacing-2)] text-[length:var(--text-sm)]">
                Nested Item 1A
              </div>
              <div className="bg-[color:var(--color-muted)] rounded-[var(--radius-sm)] p-[length:var(--spacing-2)] text-[length:var(--text-sm)]">
                Nested Item 1B
              </div>
            </div>
          </div>
          <div className="bg-[color:var(--color-card)] rounded-[var(--radius-sm)] p-[length:var(--spacing-4)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
            <h4 className="font-[number:var(--font-weight-semibold)] text-[length:var(--text-base)] mb-[length:var(--spacing-3)]">
              Parent Stack Item 2
            </h4>
            <div className="space-y-[length:var(--spacing-2)]">
              <div className="bg-[color:var(--color-muted)] rounded-[var(--radius-sm)] p-[length:var(--spacing-2)] text-[length:var(--text-sm)]">
                Nested Item 2A
              </div>
              <div className="bg-[color:var(--color-muted)] rounded-[var(--radius-sm)] p-[length:var(--spacing-2)] text-[length:var(--text-sm)]">
                Nested Item 2B
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const stackMeta = {
  id: 'stack',
  name: 'Stack Layouts',
  category: 'layout' as const,
  description: 'Vertical and horizontal stacks with spacing and dividers',
  complexity: 'simple' as const,
  tags: ['stack', 'spacing', 'vertical', 'horizontal', 'divider'],
}
