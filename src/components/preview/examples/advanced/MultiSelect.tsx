/**
 * Multi-select component demonstrating multiple selection with badges.
 * Uses design tokens for all styling including selected items, dropdown, and interactions.
 */

import { useEffect, useRef, useState } from 'react'

interface Option {
  id: string
  label: string
  color?: string
}

const skills: Option[] = [
  { id: 'react', label: 'React', color: 'var(--color-primary-500)' },
  { id: 'typescript', label: 'TypeScript', color: 'var(--color-info-500)' },
  { id: 'nodejs', label: 'Node.js', color: 'var(--color-success-500)' },
  { id: 'python', label: 'Python', color: 'var(--color-warning-500)' },
  { id: 'sql', label: 'SQL', color: 'var(--color-error-500)' },
  { id: 'docker', label: 'Docker', color: 'var(--color-primary-600)' },
  { id: 'git', label: 'Git', color: 'var(--color-accent-500)' },
  { id: 'graphql', label: 'GraphQL', color: 'var(--color-secondary-500)' },
]

export function MultiSelect() {
  const [selected, setSelected] = useState<Option[]>([skills[0], skills[1]])
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  const filteredOptions = skills.filter(
    (skill) =>
      !selected.find((s) => s.id === skill.id) &&
      skill.label.toLowerCase().includes(query.toLowerCase()),
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
        setQuery('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (option: Option) => {
    setSelected([...selected, option])
    setQuery('')
  }

  const handleRemove = (optionId: string) => {
    setSelected(selected.filter((s) => s.id !== optionId))
  }

  return (
    <div className="space-y-6">
      {/* Multi-select with badges */}
      <div ref={containerRef} className="relative w-full max-w-[500px]">
        <label className="block text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)] mb-[length:var(--spacing-2)]">
          Select Skills
        </label>

        <div
          onClick={() => setIsOpen(true)}
          className="min-h-[42px] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] bg-[color:var(--color-background)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] cursor-text hover:border-[color:var(--color-ring)] focus-within:ring-2 focus-within:ring-[color:var(--color-ring)] transition-colors duration-[var(--duration-fast)]"
        >
          <div className="flex flex-wrap gap-[length:var(--spacing-2)]">
            {selected.map((option) => (
              <span
                key={option.id}
                className="inline-flex items-center gap-[length:var(--spacing-1.5)] px-[length:var(--spacing-2)] py-[length:var(--spacing-1)] bg-[color:var(--color-primary-100)] text-[color:var(--color-primary-700)] rounded-[var(--radius-sm)] text-[length:var(--text-xs)] font-[number:var(--font-weight-medium)]"
              >
                {option.label}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRemove(option.id)
                  }}
                  className="hover:bg-[color:var(--color-primary-200)] rounded-[var(--radius-sm)] p-[length:var(--spacing-0.5)] transition-colors"
                >
                  <svg
                    className="w-[length:var(--spacing-3)] h-[length:var(--spacing-3)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </span>
            ))}
            {isOpen && (
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={
                  selected.length === 0 ? 'Select skills...' : 'Add more...'
                }
                className="flex-1 min-w-[120px] outline-none bg-transparent text-[length:var(--text-sm)] text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-muted-foreground)]"
              />
            )}
            {!isOpen && selected.length === 0 && (
              <span className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
                Select skills...
              </span>
            )}
          </div>
        </div>

        {isOpen && filteredOptions.length > 0 && (
          <div className="absolute z-10 w-full mt-[length:var(--spacing-1)] bg-[color:var(--color-card)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] shadow-[var(--shadow-lg)] overflow-hidden">
            <div className="max-h-[200px] overflow-y-auto p-[length:var(--spacing-1)]">
              {filteredOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className="w-full flex items-center gap-[length:var(--spacing-2)] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] rounded-[var(--radius-sm)] text-left hover:bg-[color:var(--color-muted)] transition-colors duration-[var(--duration-fast)]"
                >
                  <div
                    className="w-[length:var(--spacing-3)] h-[length:var(--spacing-3)] rounded-full"
                    style={{ backgroundColor: option.color }}
                  />
                  <span className="text-[length:var(--text-sm)] text-[color:var(--color-foreground)]">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {selected.length > 0 && (
          <button
            type="button"
            onClick={() => setSelected([])}
            className="mt-[length:var(--spacing-2)] text-[length:var(--text-sm)] text-[color:var(--color-error-500)] hover:underline"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Compact multi-select */}
      <div className="w-full max-w-[400px]">
        <label className="block text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)] mb-[length:var(--spacing-2)]">
          Selected Skills ({selected.length})
        </label>

        {selected.length > 0 ? (
          <div className="flex flex-wrap gap-[length:var(--spacing-2)]">
            {selected.map((option) => (
              <div
                key={option.id}
                className="inline-flex items-center gap-[length:var(--spacing-2)] px-[length:var(--spacing-3)] py-[length:var(--spacing-1.5)] bg-[color:var(--color-card)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-full)] text-[length:var(--text-sm)]"
              >
                <div
                  className="w-[length:var(--spacing-2)] h-[length:var(--spacing-2)] rounded-full"
                  style={{ backgroundColor: option.color }}
                />
                <span className="text-[color:var(--color-foreground)] font-[number:var(--font-weight-medium)]">
                  {option.label}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] italic">
            No skills selected
          </div>
        )}
      </div>
    </div>
  )
}

export const multiSelectMeta = {
  id: 'multi-select',
  name: 'Multi-Select',
  category: 'advanced' as const,
  description: 'Multi-select dropdown with badge display and search',
  complexity: 'complex' as const,
  tags: ['multi-select', 'select', 'dropdown', 'badges', 'tags'],
  reactive: true,
}
