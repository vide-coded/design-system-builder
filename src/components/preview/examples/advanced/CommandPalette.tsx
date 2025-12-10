/**
 * Command Palette (⌘K style) demonstrating advanced keyboard shortcuts and search.
 * Uses design tokens for all styling including backdrop, panel, input, and results.
 */

import { useCallback, useEffect, useState } from 'react'

interface Command {
  id: string
  label: string
  shortcut?: string
  icon: string
  category: string
}

const commands: Command[] = [
  { id: '1', label: 'New File', shortcut: '⌘N', icon: '📄', category: 'File' },
  { id: '2', label: 'Open File', shortcut: '⌘O', icon: '📂', category: 'File' },
  { id: '3', label: 'Save', shortcut: '⌘S', icon: '💾', category: 'File' },
  { id: '4', label: 'Copy', shortcut: '⌘C', icon: '📋', category: 'Edit' },
  { id: '5', label: 'Paste', shortcut: '⌘V', icon: '📌', category: 'Edit' },
  {
    id: '6',
    label: 'Search Files',
    shortcut: '⌘P',
    icon: '🔍',
    category: 'Go',
  },
  { id: '7', label: 'Settings', shortcut: '⌘,', icon: '⚙️', category: 'Go' },
  {
    id: '8',
    label: 'Toggle Theme',
    shortcut: '⌘T',
    icon: '🎨',
    category: 'View',
  },
]

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(query.toLowerCase()) ||
      cmd.category.toLowerCase().includes(query.toLowerCase()),
  )

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      setIsOpen((prev) => !prev)
      setQuery('')
      setSelectedIndex(0)
    }
    if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) =>
        Math.min(prev + 1, filteredCommands.length - 1),
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      // Execute command
      setIsOpen(false)
      setQuery('')
    }
  }

  const groupedCommands = filteredCommands.reduce(
    (acc, cmd) => {
      if (!acc[cmd.category]) acc[cmd.category] = []
      acc[cmd.category].push(cmd)
      return acc
    },
    {} as Record<string, Command[]>,
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-[length:var(--spacing-4)] bg-[color:var(--color-muted)] rounded-[var(--radius-md)] border-[length:var(--border-width)] border-[color:var(--color-border)]">
        <p className="text-[length:var(--text-sm)] text-[color:var(--color-foreground)]">
          Press{' '}
          <kbd className="px-[length:var(--spacing-2)] py-[length:var(--spacing-1)] bg-[color:var(--color-background)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-sm)] text-[length:var(--text-xs)] font-[number:var(--font-weight-medium)]">
            ⌘K
          </kbd>{' '}
          to open command palette
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] bg-[color:var(--color-primary-500)] hover:bg-[color:var(--color-primary-600)] text-white rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] transition-colors duration-[var(--duration-fast)]"
        >
          Open Palette
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-[length:var(--spacing-4)]"
          onClick={() => setIsOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Command Palette Panel */}
          <div
            className="relative w-full max-w-[640px] bg-[color:var(--color-card)] rounded-[var(--radius-lg)] shadow-[var(--shadow-2xl)] border-[length:var(--border-width)] border-[color:var(--color-border)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="p-[length:var(--spacing-4)] border-b-[length:var(--border-width)] border-[color:var(--color-border)]">
              <div className="flex items-center gap-[length:var(--spacing-2)]">
                <span className="text-[length:var(--text-xl)]">🔍</span>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value)
                    setSelectedIndex(0)
                  }}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent outline-none text-[length:var(--text-base)] text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-muted-foreground)]"
                />
                <kbd className="px-[length:var(--spacing-2)] py-[length:var(--spacing-1)] bg-[color:var(--color-muted)] rounded-[var(--radius-sm)] text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                  ESC
                </kbd>
              </div>
            </div>

            {/* Results */}
            <div className="max-h-[400px] overflow-y-auto p-[length:var(--spacing-2)]">
              {filteredCommands.length === 0 ? (
                <div className="p-[length:var(--spacing-8)] text-center text-[color:var(--color-muted-foreground)] text-[length:var(--text-sm)]">
                  No commands found
                </div>
              ) : (
                Object.entries(groupedCommands).map(([category, cmds]) => (
                  <div key={category} className="mb-[length:var(--spacing-2)]">
                    <div className="px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[length:var(--text-xs)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-muted-foreground)] uppercase tracking-wider">
                      {category}
                    </div>
                    {cmds.map((cmd, _index) => {
                      const globalIndex = filteredCommands.indexOf(cmd)
                      const isSelected = globalIndex === selectedIndex
                      return (
                        <button
                          key={cmd.id}
                          className={`
                            w-full flex items-center justify-between px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] rounded-[var(--radius-md)] text-left transition-colors duration-[var(--duration-fast)]
                            ${
                              isSelected
                                ? 'bg-[color:var(--color-primary-500)] text-white'
                                : 'hover:bg-[color:var(--color-muted)] text-[color:var(--color-foreground)]'
                            }
                          `}
                          onClick={() => {
                            setIsOpen(false)
                            setQuery('')
                          }}
                        >
                          <div className="flex items-center gap-[length:var(--spacing-3)]">
                            <span className="text-[length:var(--text-xl)]">
                              {cmd.icon}
                            </span>
                            <span className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)]">
                              {cmd.label}
                            </span>
                          </div>
                          {cmd.shortcut && (
                            <kbd
                              className={`
                                px-[length:var(--spacing-2)] py-[length:var(--spacing-1)] rounded-[var(--radius-sm)] text-[length:var(--text-xs)]
                                ${
                                  isSelected
                                    ? 'bg-white/20 text-white'
                                    : 'bg-[color:var(--color-muted)] text-[color:var(--color-muted-foreground)]'
                                }
                              `}
                            >
                              {cmd.shortcut}
                            </kbd>
                          )}
                        </button>
                      )
                    })}
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-[length:var(--spacing-4)] py-[length:var(--spacing-3)] border-t-[length:var(--border-width)] border-[color:var(--color-border)] bg-[color:var(--color-muted)]/50">
              <div className="flex items-center gap-[length:var(--spacing-4)] text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                <span className="flex items-center gap-[length:var(--spacing-1)]">
                  <kbd className="px-[length:var(--spacing-1.5)] py-[length:var(--spacing-0.5)] bg-[color:var(--color-background)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-sm)]">
                    ↑↓
                  </kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-[length:var(--spacing-1)]">
                  <kbd className="px-[length:var(--spacing-1.5)] py-[length:var(--spacing-0.5)] bg-[color:var(--color-background)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-sm)]">
                    ↵
                  </kbd>
                  Select
                </span>
                <span className="flex items-center gap-[length:var(--spacing-1)]">
                  <kbd className="px-[length:var(--spacing-1.5)] py-[length:var(--spacing-0.5)] bg-[color:var(--color-background)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-sm)]">
                    ESC
                  </kbd>
                  Close
                </span>
              </div>
              <span className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                {filteredCommands.length} results
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export const commandPaletteMeta = {
  id: 'command-palette',
  name: 'Command Palette',
  category: 'advanced' as const,
  description: 'Keyboard-driven command palette with search and shortcuts',
  complexity: 'complex' as const,
  tags: ['command', 'search', 'keyboard', 'shortcuts', 'modal'],
  reactive: true,
}
