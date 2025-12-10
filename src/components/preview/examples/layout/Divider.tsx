/**
 * Divider component demonstrating separator lines with design tokens.
 * Shows horizontal, vertical, and styled dividers.
 */
export function Divider() {
  return (
    <div className="space-y-[length:var(--spacing-8)]">
      {/* Horizontal Dividers */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Horizontal Dividers
        </h3>
        <div className="bg-[color:var(--color-card)] rounded-[var(--radius-md)] border-[length:var(--border-width)] border-[color:var(--color-border)] p-[length:var(--spacing-6)]">
          <div className="text-[length:var(--text-sm)]">
            Content above divider
          </div>
          <div className="h-[1px] bg-[color:var(--color-border)] my-[length:var(--spacing-4)]" />
          <div className="text-[length:var(--text-sm)]">
            Content below divider
          </div>
        </div>
      </div>

      {/* Divider with Text */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Divider with Text
        </h3>
        <div className="bg-[color:var(--color-card)] rounded-[var(--radius-md)] border-[length:var(--border-width)] border-[color:var(--color-border)] p-[length:var(--spacing-6)]">
          <div className="text-[length:var(--text-sm)] mb-[length:var(--spacing-4)]">
            Sign in with email
          </div>

          <div className="relative my-[length:var(--spacing-6)]">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-[1px] bg-[color:var(--color-border)]" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[color:var(--color-card)] px-[length:var(--spacing-2)] text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                OR CONTINUE WITH
              </span>
            </div>
          </div>

          <div className="text-[length:var(--text-sm)] mt-[length:var(--spacing-4)]">
            Sign in with social
          </div>
        </div>
      </div>

      {/* Vertical Divider */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Vertical Divider
        </h3>
        <div className="bg-[color:var(--color-card)] rounded-[var(--radius-md)] border-[length:var(--border-width)] border-[color:var(--color-border)] p-[length:var(--spacing-6)]">
          <div className="flex items-center gap-[length:var(--spacing-4)] h-24">
            <div className="flex-1 text-center text-[length:var(--text-sm)]">
              Left section
            </div>
            <div className="w-[1px] h-full bg-[color:var(--color-border)]" />
            <div className="flex-1 text-center text-[length:var(--text-sm)]">
              Middle section
            </div>
            <div className="w-[1px] h-full bg-[color:var(--color-border)]" />
            <div className="flex-1 text-center text-[length:var(--text-sm)]">
              Right section
            </div>
          </div>
        </div>
      </div>

      {/* Thick Divider */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Thick Divider
        </h3>
        <div className="bg-[color:var(--color-card)] rounded-[var(--radius-md)] border-[length:var(--border-width)] border-[color:var(--color-border)] p-[length:var(--spacing-6)]">
          <div className="text-[length:var(--text-sm)]">Section 1</div>
          <div className="h-[4px] bg-[color:var(--color-border)] my-[length:var(--spacing-4)] rounded-full" />
          <div className="text-[length:var(--text-sm)]">Section 2</div>
        </div>
      </div>

      {/* Gradient Divider */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Gradient Divider
        </h3>
        <div className="bg-[color:var(--color-card)] rounded-[var(--radius-md)] border-[length:var(--border-width)] border-[color:var(--color-border)] p-[length:var(--spacing-6)]">
          <div className="text-[length:var(--text-sm)]">Content above</div>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[color:var(--color-primary-500)] to-transparent my-[length:var(--spacing-4)]" />
          <div className="text-[length:var(--text-sm)]">Content below</div>
        </div>
      </div>

      {/* Dashed Divider */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Dashed Divider
        </h3>
        <div className="bg-[color:var(--color-card)] rounded-[var(--radius-md)] border-[length:var(--border-width)] border-[color:var(--color-border)] p-[length:var(--spacing-6)]">
          <div className="text-[length:var(--text-sm)]">Section A</div>
          <div className="h-[1px] border-t-[1px] border-dashed border-[color:var(--color-border)] my-[length:var(--spacing-4)]" />
          <div className="text-[length:var(--text-sm)]">Section B</div>
        </div>
      </div>

      {/* Divider with Icon */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Divider with Icon
        </h3>
        <div className="bg-[color:var(--color-card)] rounded-[var(--radius-md)] border-[length:var(--border-width)] border-[color:var(--color-border)] p-[length:var(--spacing-6)]">
          <div className="text-[length:var(--text-sm)] mb-[length:var(--spacing-4)]">
            Previous content
          </div>

          <div className="relative my-[length:var(--spacing-6)]">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-[1px] bg-[color:var(--color-border)]" />
            </div>
            <div className="relative flex justify-center">
              <div className="bg-[color:var(--color-card)] px-[length:var(--spacing-2)]">
                <svg
                  className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)] text-[color:var(--color-muted-foreground)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="text-[length:var(--text-sm)] mt-[length:var(--spacing-4)]">
            Next content
          </div>
        </div>
      </div>

      {/* Section Dividers in List */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          List with Dividers
        </h3>
        <div className="bg-[color:var(--color-card)] rounded-[var(--radius-md)] border-[length:var(--border-width)] border-[color:var(--color-border)] overflow-hidden">
          <div className="p-[length:var(--spacing-4)] hover:bg-[color:var(--color-muted)] transition-colors cursor-pointer">
            <div className="font-[number:var(--font-weight-medium)] text-[length:var(--text-sm)]">
              List item 1
            </div>
            <div className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)] mt-[length:var(--spacing-1)]">
              Description for item 1
            </div>
          </div>
          <div className="h-[1px] bg-[color:var(--color-border)] mx-[length:var(--spacing-4)]" />
          <div className="p-[length:var(--spacing-4)] hover:bg-[color:var(--color-muted)] transition-colors cursor-pointer">
            <div className="font-[number:var(--font-weight-medium)] text-[length:var(--text-sm)]">
              List item 2
            </div>
            <div className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)] mt-[length:var(--spacing-1)]">
              Description for item 2
            </div>
          </div>
          <div className="h-[1px] bg-[color:var(--color-border)] mx-[length:var(--spacing-4)]" />
          <div className="p-[length:var(--spacing-4)] hover:bg-[color:var(--color-muted)] transition-colors cursor-pointer">
            <div className="font-[number:var(--font-weight-medium)] text-[length:var(--text-sm)]">
              List item 3
            </div>
            <div className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)] mt-[length:var(--spacing-1)]">
              Description for item 3
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const dividerMeta = {
  id: 'divider',
  name: 'Dividers',
  category: 'layout' as const,
  description: 'Separator lines with various styles and orientations',
  complexity: 'simple' as const,
  tags: ['divider', 'separator', 'horizontal', 'vertical', 'border'],
}
