/**
 * List variations demonstrating unordered, ordered, and nested lists.
 * Shows task lists, navigation lists, and feature lists with proper spacing.
 */
export function Lists() {
  return (
    <div className="space-y-[length:var(--spacing-8)]">
      {/* Unordered List */}
      <div className="space-y-[length:var(--spacing-2)]">
        <h4 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
          Key Features
        </h4>
        <ul className="space-y-[length:var(--spacing-2)] pl-[length:var(--spacing-5)]">
          <li className="text-[length:var(--text-base)] text-[color:var(--color-foreground)] list-disc">
            Responsive design system
          </li>
          <li className="text-[length:var(--text-base)] text-[color:var(--color-foreground)] list-disc">
            Real-time preview updates
          </li>
          <li className="text-[length:var(--text-base)] text-[color:var(--color-foreground)] list-disc">
            Export to CSS and Tailwind
          </li>
          <li className="text-[length:var(--text-base)] text-[color:var(--color-foreground)] list-disc">
            70+ component examples
          </li>
        </ul>
      </div>

      {/* Ordered List */}
      <div className="space-y-[length:var(--spacing-2)]">
        <h4 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
          Getting Started
        </h4>
        <ol className="space-y-[length:var(--spacing-2)] pl-[length:var(--spacing-5)]">
          <li className="text-[length:var(--text-base)] text-[color:var(--color-foreground)] list-decimal">
            Choose your color palette
          </li>
          <li className="text-[length:var(--text-base)] text-[color:var(--color-foreground)] list-decimal">
            Configure typography settings
          </li>
          <li className="text-[length:var(--text-base)] text-[color:var(--color-foreground)] list-decimal">
            Customize spacing and borders
          </li>
          <li className="text-[length:var(--text-base)] text-[color:var(--color-foreground)] list-decimal">
            Export your design system
          </li>
        </ol>
      </div>

      {/* Task List */}
      <div className="space-y-[length:var(--spacing-2)]">
        <h4 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
          Project Tasks
        </h4>
        <ul className="space-y-[length:var(--spacing-2)]">
          <li className="flex items-start gap-[length:var(--spacing-2)]">
            <input
              type="checkbox"
              checked
              readOnly
              className="mt-[length:var(--spacing-1)] w-[length:var(--spacing-4)] h-[length:var(--spacing-4)] accent-[color:var(--color-primary-500)]"
            />
            <span className="text-[length:var(--text-base)] text-[color:var(--color-muted-foreground)] line-through">
              Design initial mockups
            </span>
          </li>
          <li className="flex items-start gap-[length:var(--spacing-2)]">
            <input
              type="checkbox"
              checked
              readOnly
              className="mt-[length:var(--spacing-1)] w-[length:var(--spacing-4)] h-[length:var(--spacing-4)] accent-[color:var(--color-primary-500)]"
            />
            <span className="text-[length:var(--text-base)] text-[color:var(--color-muted-foreground)] line-through">
              Implement component library
            </span>
          </li>
          <li className="flex items-start gap-[length:var(--spacing-2)]">
            <input
              type="checkbox"
              readOnly
              className="mt-[length:var(--spacing-1)] w-[length:var(--spacing-4)] h-[length:var(--spacing-4)] accent-[color:var(--color-primary-500)]"
            />
            <span className="text-[length:var(--text-base)] text-[color:var(--color-foreground)]">
              Write documentation
            </span>
          </li>
          <li className="flex items-start gap-[length:var(--spacing-2)]">
            <input
              type="checkbox"
              readOnly
              className="mt-[length:var(--spacing-1)] w-[length:var(--spacing-4)] h-[length:var(--spacing-4)] accent-[color:var(--color-primary-500)]"
            />
            <span className="text-[length:var(--text-base)] text-[color:var(--color-foreground)]">
              Launch beta version
            </span>
          </li>
        </ul>
      </div>

      {/* Nested List */}
      <div className="space-y-[length:var(--spacing-2)]">
        <h4 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
          Documentation Structure
        </h4>
        <ul className="space-y-[length:var(--spacing-2)] pl-[length:var(--spacing-5)]">
          <li className="text-[length:var(--text-base)] text-[color:var(--color-foreground)] list-disc">
            Getting Started
            <ul className="space-y-[length:var(--spacing-1)] pl-[length:var(--spacing-5)] mt-[length:var(--spacing-1)]">
              <li className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] list-circle">
                Installation
              </li>
              <li className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] list-circle">
                Quick Start
              </li>
            </ul>
          </li>
          <li className="text-[length:var(--text-base)] text-[color:var(--color-foreground)] list-disc">
            Components
            <ul className="space-y-[length:var(--spacing-1)] pl-[length:var(--spacing-5)] mt-[length:var(--spacing-1)]">
              <li className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] list-circle">
                Buttons
              </li>
              <li className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] list-circle">
                Forms
              </li>
              <li className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] list-circle">
                Cards
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Icon List */}
      <div className="space-y-[length:var(--spacing-2)]">
        <h4 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
          What's Included
        </h4>
        <ul className="space-y-[length:var(--spacing-3)]">
          <li className="flex items-start gap-[length:var(--spacing-3)]">
            <svg
              className="w-[length:var(--spacing-5)] h-[length:var(--spacing-5)] text-[color:var(--color-success-500)] flex-shrink-0 mt-[length:var(--spacing-0.5)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div>
              <p className="text-[length:var(--text-base)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)]">
                Complete Design System
              </p>
              <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
                Fully customizable tokens and components
              </p>
            </div>
          </li>
          <li className="flex items-start gap-[length:var(--spacing-3)]">
            <svg
              className="w-[length:var(--spacing-5)] h-[length:var(--spacing-5)] text-[color:var(--color-success-500)] flex-shrink-0 mt-[length:var(--spacing-0.5)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div>
              <p className="text-[length:var(--text-base)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)]">
                Export Options
              </p>
              <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
                CSS variables and Tailwind config
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export const listsMeta = {
  id: 'lists',
  name: 'Lists',
  category: 'typography' as const,
  description: 'Unordered, ordered, task lists, and nested list variations',
  complexity: 'simple' as const,
  tags: ['typography', 'lists', 'ul', 'ol', 'tasks', 'nested'],
}
