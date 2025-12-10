/**
 * Blockquote variations for displaying quotes, testimonials, and attributions.
 * Shows simple quotes, quotes with authors, and testimonial card styles.
 */
export function Blockquote() {
  return (
    <div className="space-y-[length:var(--spacing-8)]">
      {/* Simple Blockquote */}
      <blockquote className="border-l-4 border-[color:var(--color-primary-500)] pl-[length:var(--spacing-4)] text-[length:var(--text-lg)] text-[color:var(--color-foreground)] italic leading-[var(--line-height-relaxed)]">
        "Design is not just what it looks like and feels like. Design is how it
        works."
      </blockquote>

      {/* Blockquote with Attribution */}
      <blockquote className="border-l-4 border-[color:var(--color-primary-500)] pl-[length:var(--spacing-4)]">
        <p className="text-[length:var(--text-lg)] text-[color:var(--color-foreground)] italic leading-[var(--line-height-relaxed)] mb-[length:var(--spacing-2)]">
          "The best way to predict the future is to invent it."
        </p>
        <footer className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] font-[number:var(--font-weight-medium)]">
          — Alan Kay
        </footer>
      </blockquote>

      {/* Testimonial Card */}
      <div className="rounded-[var(--radius-lg)] border-[length:var(--border-width)] border-[color:var(--color-border)] bg-[color:var(--color-card)] p-[length:var(--spacing-6)] shadow-[var(--shadow-sm)]">
        <blockquote className="space-y-[length:var(--spacing-4)]">
          <p className="text-[length:var(--text-base)] text-[color:var(--color-foreground)] leading-[var(--line-height-relaxed)]">
            "This design system has transformed how our team builds interfaces.
            The consistency and flexibility are unmatched."
          </p>
          <footer className="flex items-center gap-[length:var(--spacing-3)]">
            <div className="w-[length:var(--spacing-10)] h-[length:var(--spacing-10)] rounded-full bg-[color:var(--color-primary-500)] flex items-center justify-center text-white font-[number:var(--font-weight-semibold)]">
              SK
            </div>
            <div>
              <p className="text-[length:var(--text-sm)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
                Sarah Johnson
              </p>
              <p className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                Senior Product Designer
              </p>
            </div>
          </footer>
        </blockquote>
      </div>

      {/* Centered Testimonial */}
      <blockquote className="text-center space-y-[length:var(--spacing-4)] max-w-2xl mx-auto">
        <svg
          className="w-[length:var(--spacing-12)] h-[length:var(--spacing-12)] mx-auto text-[color:var(--color-primary-500)] opacity-20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-[length:var(--text-xl)] text-[color:var(--color-foreground)] italic leading-[var(--line-height-relaxed)]">
          "Simplicity is the ultimate sophistication."
        </p>
        <footer className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] font-[number:var(--font-weight-medium)]">
          Leonardo da Vinci
        </footer>
      </blockquote>

      {/* Pull Quote */}
      <div className="border-t border-b border-[color:var(--color-border)] py-[length:var(--spacing-6)] my-[length:var(--spacing-8)]">
        <blockquote className="text-center">
          <p className="text-[length:var(--text-2xl)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-primary-500)] leading-[var(--line-height-tight)]">
            "Good design is as little design as possible."
          </p>
          <footer className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mt-[length:var(--spacing-2)]">
            — Dieter Rams
          </footer>
        </blockquote>
      </div>
    </div>
  )
}

export const blockquoteMeta = {
  id: 'blockquote',
  name: 'Blockquote',
  category: 'typography' as const,
  description: 'Quote styles with attributions, testimonials, and pull quotes',
  complexity: 'simple' as const,
  tags: ['typography', 'blockquote', 'quote', 'testimonial', 'citation'],
}
