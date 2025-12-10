/**
 * Heading hierarchy demonstrating all heading levels (h1-h6) with typography tokens.
 * Shows size scale, weight variations, and real-world usage patterns.
 */
export function Headings() {
  return (
    <div className="space-y-[length:var(--spacing-8)]">
      {/* Heading Scale */}
      <div className="space-y-[length:var(--spacing-4)]">
        <h1 className="text-[length:var(--text-6xl)] font-[number:var(--font-weight-black)] text-[color:var(--color-foreground)]">
          Heading 1 - Page Title
        </h1>
        <h2 className="text-[length:var(--text-5xl)] font-[number:var(--font-weight-bold)] text-[color:var(--color-foreground)]">
          Heading 2 - Section Title
        </h2>
        <h3 className="text-[length:var(--text-4xl)] font-[number:var(--font-weight-bold)] text-[color:var(--color-foreground)]">
          Heading 3 - Subsection
        </h3>
        <h4 className="text-[length:var(--text-3xl)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
          Heading 4 - Group Title
        </h4>
        <h5 className="text-[length:var(--text-2xl)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
          Heading 5 - Subgroup
        </h5>
        <h6 className="text-[length:var(--text-xl)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
          Heading 6 - Minor Heading
        </h6>
      </div>

      {/* With Description */}
      <div className="space-y-[length:var(--spacing-2)]">
        <h3 className="text-[length:var(--text-2xl)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
          Project Overview
        </h3>
        <p className="text-[length:var(--text-base)] text-[color:var(--color-muted-foreground)] leading-[var(--line-height-relaxed)]">
          Brief description text that provides context. Uses muted foreground
          color for reduced emphasis.
        </p>
      </div>

      {/* Hero Title */}
      <div className="space-y-[length:var(--spacing-4)]">
        <h1 className="text-[length:var(--text-6xl)] md:text-[length:var(--text-7xl)] font-[number:var(--font-weight-black)] text-[color:var(--color-foreground)] leading-[var(--line-height-tight)]">
          Build Something Amazing
        </h1>
        <p className="text-[length:var(--text-xl)] text-[color:var(--color-muted-foreground)] leading-[var(--line-height-relaxed)] max-w-2xl">
          Lead paragraph with larger text and relaxed line height for better
          readability.
        </p>
      </div>

      {/* Card Title */}
      <div className="rounded-[var(--radius-lg)] border-[length:var(--border-width)] border-[color:var(--color-border)] bg-[color:var(--color-card)] p-[length:var(--spacing-6)]">
        <h4 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
          Card Title
        </h4>
        <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mt-[length:var(--spacing-1)]">
          Card description with smaller text
        </p>
      </div>
    </div>
  )
}

export const headingsMeta = {
  id: 'headings',
  name: 'Headings',
  category: 'typography' as const,
  description:
    'Heading hierarchy from h1 to h6 with size and weight variations',
  complexity: 'simple' as const,
  tags: ['typography', 'headings', 'titles', 'h1', 'h2', 'hierarchy'],
}
