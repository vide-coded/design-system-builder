/**
 * Paragraph variations demonstrating body text with different sizes, weights, and line heights.
 * Shows standard text, lead paragraphs, small print, and captions.
 */
export function Paragraphs() {
  return (
    <div className="space-y-[length:var(--spacing-8)]">
      {/* Lead Paragraph */}
      <div className="space-y-[length:var(--spacing-4)]">
        <p className="text-[length:var(--text-xl)] text-[color:var(--color-foreground)] leading-[var(--line-height-relaxed)] font-[number:var(--font-weight-normal)]">
          Lead paragraph with larger text size. Perfect for introductions and
          emphasis. Uses relaxed line height for improved readability.
        </p>
      </div>

      {/* Standard Body Text */}
      <div className="space-y-[length:var(--spacing-4)]">
        <p className="text-[length:var(--text-base)] text-[color:var(--color-foreground)] leading-[var(--line-height-normal)] font-[number:var(--font-weight-normal)]">
          Standard body text with normal line height. This is the default
          paragraph style used throughout most content. It provides good
          readability while maintaining efficient use of space.
        </p>
        <p className="text-[length:var(--text-base)] text-[color:var(--color-foreground)] leading-[var(--line-height-normal)] font-[number:var(--font-weight-normal)]">
          Multiple paragraphs are separated by consistent spacing. Each
          paragraph maintains the same typographic properties for visual
          consistency across the design system.
        </p>
      </div>

      {/* Muted Text */}
      <p className="text-[length:var(--text-base)] text-[color:var(--color-muted-foreground)] leading-[var(--line-height-normal)]">
        Muted paragraph using muted foreground color. Useful for secondary
        information, helper text, or descriptions that should be less prominent.
      </p>

      {/* Small Text */}
      <p className="text-[length:var(--text-sm)] text-[color:var(--color-foreground)] leading-[var(--line-height-normal)]">
        Small paragraph text for fine print, disclaimers, or supplementary
        information. Maintains readability while taking less space.
      </p>

      {/* Extra Small / Caption */}
      <p className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)] leading-[var(--line-height-snug)] uppercase tracking-[var(--letter-spacing-wide)]">
        Caption or metadata text • Extra small size • Uppercase with wide
        tracking
      </p>

      {/* Weight Variations */}
      <div className="space-y-[length:var(--spacing-2)]">
        <p className="text-[length:var(--text-base)] font-[number:var(--font-weight-light)] text-[color:var(--color-foreground)]">
          Light weight paragraph for delicate emphasis.
        </p>
        <p className="text-[length:var(--text-base)] font-[number:var(--font-weight-normal)] text-[color:var(--color-foreground)]">
          Normal weight paragraph for standard body text.
        </p>
        <p className="text-[length:var(--text-base)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)]">
          Medium weight paragraph for subtle emphasis.
        </p>
        <p className="text-[length:var(--text-base)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
          Semibold weight paragraph for stronger emphasis.
        </p>
      </div>

      {/* Line Height Variations */}
      <div className="space-y-[length:var(--spacing-4)]">
        <p className="text-[length:var(--text-base)] leading-[var(--line-height-tight)] text-[color:var(--color-foreground)]">
          Tight line height for compact text. Useful when space is limited or
          for short, impactful statements.
        </p>
        <p className="text-[length:var(--text-base)] leading-[var(--line-height-relaxed)] text-[color:var(--color-foreground)]">
          Relaxed line height for enhanced readability. Ideal for longer
          paragraphs and body content where comfort is priority.
        </p>
      </div>
    </div>
  )
}

export const paragraphsMeta = {
  id: 'paragraphs',
  name: 'Paragraphs',
  category: 'typography' as const,
  description:
    'Body text variations with different sizes, weights, and line heights',
  complexity: 'simple' as const,
  tags: ['typography', 'paragraph', 'body', 'text', 'content'],
}
