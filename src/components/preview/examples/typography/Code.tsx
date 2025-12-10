/**
 * Code formatting variations for inline code and code blocks.
 * Shows monospace typography, syntax highlighting, and command line examples.
 */
export function Code() {
  return (
    <div className="space-y-[length:var(--spacing-8)]">
      {/* Inline Code */}
      <p className="text-[length:var(--text-base)] text-[color:var(--color-foreground)]">
        To install the package, run{' '}
        <code className="px-[length:var(--spacing-1.5)] py-[length:var(--spacing-0.5)] rounded-[var(--radius-sm)] bg-[color:var(--color-muted)] text-[color:var(--color-foreground)] font-[family:var(--font-mono)] text-[length:var(--text-sm)]">
          npm install package-name
        </code>{' '}
        in your terminal.
      </p>

      {/* Code Block */}
      <div className="rounded-[var(--radius-md)] border-[length:var(--border-width)] border-[color:var(--color-border)] bg-[color:var(--color-muted)] overflow-hidden">
        <div className="px-[length:var(--spacing-4)] py-[length:var(--spacing-2)] border-b border-[color:var(--color-border)] bg-[color:var(--color-card)]">
          <p className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)] font-[family:var(--font-mono)]">
            example.tsx
          </p>
        </div>
        <pre className="p-[length:var(--spacing-4)] overflow-x-auto">
          <code className="font-[family:var(--font-mono)] text-[length:var(--text-sm)] text-[color:var(--color-foreground)]">
            {`function greet(name: string) {
  return \`Hello, \${name}!\`;
}

const message = greet("World");
console.log(message);`}
          </code>
        </pre>
      </div>

      {/* Command Line */}
      <div className="rounded-[var(--radius-md)] bg-[color:var(--color-foreground)] text-[color:var(--color-background)] p-[length:var(--spacing-4)] overflow-x-auto">
        <pre className="font-[family:var(--font-mono)] text-[length:var(--text-sm)]">
          <code>
            {`$ npm run build
$ npm run dev`}
          </code>
        </pre>
      </div>

      {/* JSON Example */}
      <div className="rounded-[var(--radius-md)] border-[length:var(--border-width)] border-[color:var(--color-border)] bg-[color:var(--color-muted)] overflow-hidden">
        <div className="px-[length:var(--spacing-4)] py-[length:var(--spacing-2)] border-b border-[color:var(--color-border)] bg-[color:var(--color-card)]">
          <p className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)] font-[family:var(--font-mono)]">
            config.json
          </p>
        </div>
        <pre className="p-[length:var(--spacing-4)] overflow-x-auto">
          <code className="font-[family:var(--font-mono)] text-[length:var(--text-sm)] text-[color:var(--color-foreground)]">
            {`{
  "name": "design-system",
  "version": "1.0.0",
  "theme": {
    "primary": "#3b82f6",
    "spacing": "1rem"
  }
}`}
          </code>
        </pre>
      </div>

      {/* Keyboard Shortcut */}
      <p className="text-[length:var(--text-base)] text-[color:var(--color-foreground)]">
        Press{' '}
        <kbd className="px-[length:var(--spacing-2)] py-[length:var(--spacing-1)] rounded-[var(--radius-sm)] border border-[color:var(--color-border)] bg-[color:var(--color-muted)] text-[color:var(--color-foreground)] font-[family:var(--font-mono)] text-[length:var(--text-xs)] shadow-sm">
          Ctrl
        </kbd>
        {' + '}
        <kbd className="px-[length:var(--spacing-2)] py-[length:var(--spacing-1)] rounded-[var(--radius-sm)] border border-[color:var(--color-border)] bg-[color:var(--color-muted)] text-[color:var(--color-foreground)] font-[family:var(--font-mono)] text-[length:var(--text-xs)] shadow-sm">
          K
        </kbd>{' '}
        to open the command palette.
      </p>

      {/* Variable Declaration */}
      <div className="space-y-[length:var(--spacing-2)]">
        <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] font-[number:var(--font-weight-medium)]">
          CSS Variables
        </p>
        <div className="rounded-[var(--radius-md)] border-[length:var(--border-width)] border-[color:var(--color-border)] bg-[color:var(--color-muted)] p-[length:var(--spacing-4)]">
          <code className="font-[family:var(--font-mono)] text-[length:var(--text-sm)] text-[color:var(--color-foreground)]">
            --color-primary: hsl(221, 83%, 53%);
          </code>
        </div>
      </div>
    </div>
  )
}

export const codeMeta = {
  id: 'code',
  name: 'Code',
  category: 'typography' as const,
  description: 'Inline code, code blocks, command line, and keyboard shortcuts',
  complexity: 'simple' as const,
  tags: ['typography', 'code', 'monospace', 'pre', 'syntax', 'kbd'],
}
