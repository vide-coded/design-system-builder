/**
 * Link variations demonstrating different link styles and states.
 * Shows inline links, standalone links, links with icons, and external links.
 */
export function Links() {
  return (
    <div className="space-y-[length:var(--spacing-8)]">
      {/* Inline Link */}
      <p className="text-[length:var(--text-base)] text-[color:var(--color-foreground)]">
        This is a paragraph with an{' '}
        <a
          href="#"
          className="text-[color:var(--color-primary-500)] hover:text-[color:var(--color-primary-600)] underline decoration-[color:var(--color-primary-500)] decoration-1 underline-offset-2 transition-colors duration-[var(--duration-fast)]"
        >
          inline link
        </a>{' '}
        embedded within the text. It uses primary color and has an underline.
      </p>

      {/* Standalone Links */}
      <div className="space-y-[length:var(--spacing-2)]">
        <a
          href="#"
          className="block text-[length:var(--text-base)] text-[color:var(--color-primary-500)] hover:text-[color:var(--color-primary-600)] font-[number:var(--font-weight-medium)] transition-colors duration-[var(--duration-fast)]"
        >
          Standalone link without underline
        </a>
        <a
          href="#"
          className="block text-[length:var(--text-base)] text-[color:var(--color-primary-500)] hover:text-[color:var(--color-primary-600)] underline decoration-[color:var(--color-primary-500)] underline-offset-4 transition-colors duration-[var(--duration-fast)]"
        >
          Standalone link with underline
        </a>
      </div>

      {/* Link with Icon */}
      <div className="space-y-[length:var(--spacing-2)]">
        <a
          href="#"
          className="inline-flex items-center gap-[length:var(--spacing-2)] text-[length:var(--text-base)] text-[color:var(--color-primary-500)] hover:text-[color:var(--color-primary-600)] font-[number:var(--font-weight-medium)] transition-colors duration-[var(--duration-fast)]"
        >
          <svg
            className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
          Link with arrow icon
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-[length:var(--spacing-2)] text-[length:var(--text-base)] text-[color:var(--color-primary-500)] hover:text-[color:var(--color-primary-600)] font-[number:var(--font-weight-medium)] transition-colors duration-[var(--duration-fast)]"
        >
          External link
          <svg
            className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-[length:var(--spacing-6)]">
        <a
          href="#"
          className="text-[length:var(--text-sm)] text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary-500)] font-[number:var(--font-weight-medium)] transition-colors duration-[var(--duration-fast)]"
        >
          Home
        </a>
        <a
          href="#"
          className="text-[length:var(--text-sm)] text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary-500)] font-[number:var(--font-weight-medium)] transition-colors duration-[var(--duration-fast)]"
        >
          About
        </a>
        <a
          href="#"
          className="text-[length:var(--text-sm)] text-[color:var(--color-primary-500)] font-[number:var(--font-weight-semibold)] border-b-2 border-[color:var(--color-primary-500)]"
        >
          Services
        </a>
        <a
          href="#"
          className="text-[length:var(--text-sm)] text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary-500)] font-[number:var(--font-weight-medium)] transition-colors duration-[var(--duration-fast)]"
        >
          Contact
        </a>
      </nav>

      {/* Button-like Links */}
      <div className="flex gap-[length:var(--spacing-4)]">
        <a
          href="#"
          className="inline-flex items-center justify-center px-[length:var(--spacing-4)] py-[length:var(--spacing-2)] rounded-[var(--radius-md)] bg-[color:var(--color-primary-500)] hover:bg-[color:var(--color-primary-600)] text-white font-[number:var(--font-weight-medium)] transition-colors duration-[var(--duration-fast)]"
        >
          Primary Link Button
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center px-[length:var(--spacing-4)] py-[length:var(--spacing-2)] rounded-[var(--radius-md)] border-[length:var(--border-width)] border-[color:var(--color-border)] hover:bg-[color:var(--color-muted)] text-[color:var(--color-foreground)] font-[number:var(--font-weight-medium)] transition-colors duration-[var(--duration-fast)]"
        >
          Secondary Link Button
        </a>
      </div>

      {/* Muted Links */}
      <div className="flex gap-[length:var(--spacing-4)]">
        <a
          href="#"
          className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-foreground)] transition-colors duration-[var(--duration-fast)]"
        >
          Muted link
        </a>
        <a
          href="#"
          className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] hover:text-[color:var(--color-foreground)] underline decoration-[color:var(--color-muted-foreground)] underline-offset-2 transition-colors duration-[var(--duration-fast)]"
        >
          Muted underlined link
        </a>
      </div>
    </div>
  )
}

export const linksMeta = {
  id: 'links',
  name: 'Links',
  category: 'typography' as const,
  description:
    'Link variants with different styles, states, and icon combinations',
  complexity: 'simple' as const,
  tags: ['typography', 'links', 'anchor', 'navigation', 'hyperlink'],
}
