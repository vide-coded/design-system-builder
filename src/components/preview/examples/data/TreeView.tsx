import { useState } from 'react'

/**
 * Tree view component with expandable nodes using design tokens.
 * Demonstrates hierarchical data display with expand/collapse functionality.
 */
export function TreeView() {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(['1', '2']),
  )

  const toggleFolder = (id: string) => {
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedFolders(newExpanded)
  }

  const fileTree = [
    {
      id: '1',
      name: 'src',
      type: 'folder',
      children: [
        {
          id: '1-1',
          name: 'components',
          type: 'folder',
          children: [
            { id: '1-1-1', name: 'Button.tsx', type: 'file' },
            { id: '1-1-2', name: 'Input.tsx', type: 'file' },
            { id: '1-1-3', name: 'Card.tsx', type: 'file' },
          ],
        },
        {
          id: '1-2',
          name: 'utils',
          type: 'folder',
          children: [
            { id: '1-2-1', name: 'helpers.ts', type: 'file' },
            { id: '1-2-2', name: 'validators.ts', type: 'file' },
          ],
        },
        { id: '1-3', name: 'App.tsx', type: 'file' },
        { id: '1-4', name: 'main.tsx', type: 'file' },
      ],
    },
    {
      id: '2',
      name: 'public',
      type: 'folder',
      children: [
        { id: '2-1', name: 'logo.svg', type: 'file' },
        { id: '2-2', name: 'favicon.ico', type: 'file' },
      ],
    },
    { id: '3', name: 'package.json', type: 'file' },
    { id: '4', name: 'tsconfig.json', type: 'file' },
    { id: '5', name: 'README.md', type: 'file' },
  ]

  const renderTreeNode = (node: any, level = 0) => {
    const isExpanded = expandedFolders.has(node.id)
    const hasChildren = node.children && node.children.length > 0

    return (
      <div key={node.id}>
        <div
          className="flex items-center gap-[length:var(--spacing-2)] px-[length:var(--spacing-2)] py-[length:var(--spacing-1.5)] hover:bg-[color:var(--color-muted)] rounded-[var(--radius-sm)] transition-colors cursor-pointer"
          style={{
            paddingLeft: `calc(${level} * var(--spacing-6) + var(--spacing-2))`,
          }}
          onClick={() => node.type === 'folder' && toggleFolder(node.id)}
        >
          {node.type === 'folder' ? (
            <button
              className="p-0 w-[length:var(--spacing-4)] h-[length:var(--spacing-4)] flex items-center justify-center transition-transform duration-[var(--duration-fast)]"
              style={{
                transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
              }}
              aria-label={isExpanded ? 'Collapse folder' : 'Expand folder'}
            >
              <svg
                className="w-[length:var(--spacing-3)] h-[length:var(--spacing-3)] text-[color:var(--color-muted-foreground)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          ) : (
            <div className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)]" />
          )}

          <svg
            className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)] text-[color:var(--color-muted-foreground)] flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {node.type === 'folder' ? (
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            ) : (
              <>
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                <polyline points="13 2 13 9 20 9" />
              </>
            )}
          </svg>

          <span className="text-[length:var(--text-sm)] text-[color:var(--color-foreground)] truncate">
            {node.name}
          </span>
        </div>

        {node.type === 'folder' && isExpanded && hasChildren && (
          <div>
            {node.children.map((child: any) =>
              renderTreeNode(child, level + 1),
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-[length:var(--spacing-6)]">
      {/* File System Tree */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-3)]">
          File System Tree
        </h3>
        <div className="rounded-[var(--radius-lg)] border-[length:var(--border-width)] border-[color:var(--color-border)] bg-[color:var(--color-card)] p-[length:var(--spacing-2)]">
          {fileTree.map((node) => renderTreeNode(node))}
        </div>
      </div>

      {/* Organization Tree */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-3)]">
          Organization Structure
        </h3>
        <div className="rounded-[var(--radius-lg)] border-[length:var(--border-width)] border-[color:var(--color-border)] bg-[color:var(--color-card)] p-[length:var(--spacing-4)]">
          <div className="space-y-[length:var(--spacing-3)]">
            <div className="flex items-center gap-[length:var(--spacing-3)]">
              <div className="w-[length:var(--spacing-10)] h-[length:var(--spacing-10)] rounded-[var(--radius-full)] bg-[color:var(--color-primary-100)] flex items-center justify-center">
                <span className="text-[length:var(--text-sm)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-primary-700)]">
                  CEO
                </span>
              </div>
              <div>
                <p className="text-[length:var(--text-sm)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
                  Sarah Johnson
                </p>
                <p className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                  Chief Executive Officer
                </p>
              </div>
            </div>

            <div className="ml-[length:var(--spacing-8)] space-y-[length:var(--spacing-2)]">
              {[
                'CTO - Michael Chen',
                'CFO - Emily Rodriguez',
                'COO - David Kim',
              ].map((person, index) => (
                <div
                  key={index}
                  className="flex items-center gap-[length:var(--spacing-3)] py-[length:var(--spacing-2)]"
                >
                  <div className="w-[length:var(--spacing-8)] h-[length:var(--spacing-8)] rounded-[var(--radius-full)] bg-[color:var(--color-secondary-100)] flex items-center justify-center">
                    <span className="text-[length:var(--text-xs)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-secondary-700)]">
                      {person.split(' - ')[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)]">
                      {person.split(' - ')[1]}
                    </p>
                    <p className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                      {person.split(' - ')[0]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const treeViewMeta = {
  id: 'tree-view',
  name: 'Tree View',
  category: 'data' as const,
  description:
    'Hierarchical tree view with expandable nodes for file systems and organizations',
  complexity: 'medium' as const,
  tags: ['tree', 'hierarchy', 'expandable', 'files', 'organization'],
}
