/**
 * Container component demonstrating max-width containers with design tokens.
 * Shows responsive width constraints and centered layouts.
 */
export function Container() {
  return (
    <div className="space-y-[length:var(--spacing-8)]">
      {/* Small Container */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Small Container (640px)
        </h3>
        <div className="mx-auto max-w-[640px] bg-[color:var(--color-muted)] rounded-[var(--radius-md)] p-[length:var(--spacing-6)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
          <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
            Ideal for narrow content like forms, articles, or focused
            interfaces. This container maintains readability with comfortable
            line lengths.
          </p>
        </div>
      </div>

      {/* Medium Container */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Medium Container (768px)
        </h3>
        <div className="mx-auto max-w-[768px] bg-[color:var(--color-muted)] rounded-[var(--radius-md)] p-[length:var(--spacing-6)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
          <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
            Perfect for blog posts, documentation, and content-focused pages.
            Provides good balance between width and readability.
          </p>
        </div>
      </div>

      {/* Large Container */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Large Container (1024px)
        </h3>
        <div className="mx-auto max-w-[1024px] bg-[color:var(--color-muted)] rounded-[var(--radius-md)] p-[length:var(--spacing-6)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
          <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
            Great for dashboards, data tables, and applications needing more
            horizontal space. Accommodates multiple columns and complex layouts.
          </p>
        </div>
      </div>

      {/* Extra Large Container */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Extra Large Container (1280px)
        </h3>
        <div className="mx-auto max-w-[1280px] bg-[color:var(--color-muted)] rounded-[var(--radius-md)] p-[length:var(--spacing-6)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
          <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
            Suitable for wide layouts, marketing pages, and applications
            requiring maximum screen real estate on large displays.
          </p>
        </div>
      </div>

      {/* Full Width Container with Padding */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-4)]">
          Full Width with Padding
        </h3>
        <div className="w-full px-[length:var(--spacing-4)] md:px-[length:var(--spacing-8)]">
          <div className="bg-[color:var(--color-muted)] rounded-[var(--radius-md)] p-[length:var(--spacing-6)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
            <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
              Uses full viewport width with responsive padding. Padding
              increases on larger screens to prevent content from touching
              edges.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const containerMeta = {
  id: 'container',
  name: 'Container',
  category: 'layout' as const,
  description: 'Max-width containers with responsive sizing',
  complexity: 'simple' as const,
  tags: ['container', 'width', 'responsive', 'centered'],
}
