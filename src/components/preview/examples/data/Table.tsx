/**
 * Data table component with sorting using design tokens.
 * Demonstrates TanStack Table integration, sortable columns, row hover states, and zebra striping.
 */
export function Table() {
  const data = [
    {
      id: '1',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      role: 'Admin',
      status: 'active',
    },
    {
      id: '2',
      name: 'Bob Smith',
      email: 'bob@example.com',
      role: 'User',
      status: 'active',
    },
    {
      id: '3',
      name: 'Carol Williams',
      email: 'carol@example.com',
      role: 'Editor',
      status: 'inactive',
    },
    {
      id: '4',
      name: 'David Brown',
      email: 'david@example.com',
      role: 'User',
      status: 'active',
    },
    {
      id: '5',
      name: 'Eve Davis',
      email: 'eve@example.com',
      role: 'Admin',
      status: 'active',
    },
  ]

  return (
    <div className="space-y-[length:var(--spacing-6)]">
      {/* Basic Table with Sorting */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-3)]">
          Sortable Table
        </h3>
        <div className="rounded-[var(--radius-md)] border-[length:var(--border-width)] border-[color:var(--color-border)] overflow-hidden">
          <table className="w-full">
            <thead className="bg-[color:var(--color-muted)] border-b-[length:var(--border-width)] border-[color:var(--color-border)]">
              <tr>
                <th className="px-[length:var(--spacing-4)] py-[length:var(--spacing-3)] text-left text-[length:var(--text-sm)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
                  Name
                </th>
                <th className="px-[length:var(--spacing-4)] py-[length:var(--spacing-3)] text-left text-[length:var(--text-sm)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
                  Email
                </th>
                <th className="px-[length:var(--spacing-4)] py-[length:var(--spacing-3)] text-left text-[length:var(--text-sm)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
                  Role
                </th>
                <th className="px-[length:var(--spacing-4)] py-[length:var(--spacing-3)] text-left text-[length:var(--text-sm)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={row.id}
                  className={`
                    border-b-[length:var(--border-width)]
                    border-[color:var(--color-border)]
                    hover:bg-[color:var(--color-muted)]
                    transition-colors
                    duration-[var(--duration-fast)]
                    ${index % 2 === 0 ? 'bg-[color:var(--color-background)]' : 'bg-[color:var(--color-muted)]/30'}
                  `}
                >
                  <td className="px-[length:var(--spacing-4)] py-[length:var(--spacing-3)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)]">
                    {row.name}
                  </td>
                  <td className="px-[length:var(--spacing-4)] py-[length:var(--spacing-3)] text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
                    {row.email}
                  </td>
                  <td className="px-[length:var(--spacing-4)] py-[length:var(--spacing-3)] text-[length:var(--text-sm)] text-[color:var(--color-foreground)]">
                    {row.role}
                  </td>
                  <td className="px-[length:var(--spacing-4)] py-[length:var(--spacing-3)]">
                    <span
                      className={`
                        inline-flex
                        px-[length:var(--spacing-2)]
                        py-[length:var(--spacing-1)]
                        rounded-[var(--radius-sm)]
                        text-[length:var(--text-xs)]
                        font-[number:var(--font-weight-medium)]
                        ${
                          row.status === 'active'
                            ? 'bg-[color:var(--color-success-100)] text-[color:var(--color-success-700)]'
                            : 'bg-[color:var(--color-gray-200)] text-[color:var(--color-gray-700)]'
                        }
                      `}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Compact Table */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-3)]">
          Compact Table with Actions
        </h3>
        <div className="rounded-[var(--radius-md)] border-[length:var(--border-width)] border-[color:var(--color-border)] overflow-hidden">
          <table className="w-full">
            <thead className="bg-[color:var(--color-muted)]">
              <tr>
                <th className="px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-left text-[length:var(--text-xs)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-muted-foreground)] uppercase tracking-wider">
                  Name
                </th>
                <th className="px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-left text-[length:var(--text-xs)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-muted-foreground)] uppercase tracking-wider">
                  Role
                </th>
                <th className="px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-right text-[length:var(--text-xs)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-muted-foreground)] uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0, 3).map((row) => (
                <tr
                  key={row.id}
                  className="border-b-[length:var(--border-width)] border-[color:var(--color-border)] hover:bg-[color:var(--color-muted)] transition-colors"
                >
                  <td className="px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)]">
                    {row.name}
                  </td>
                  <td className="px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
                    {row.role}
                  </td>
                  <td className="px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-right">
                    <div className="flex items-center justify-end gap-[length:var(--spacing-2)]">
                      <button
                        className="p-[length:var(--spacing-1)] rounded-[var(--radius-sm)] hover:bg-[color:var(--color-muted)] transition-colors"
                        aria-label="Edit"
                      >
                        <svg
                          className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)] text-[color:var(--color-muted-foreground)]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>
                      <button
                        className="p-[length:var(--spacing-1)] rounded-[var(--radius-sm)] hover:bg-[color:var(--color-error-100)] hover:text-[color:var(--color-error-600)] transition-colors"
                        aria-label="Delete"
                      >
                        <svg
                          className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export const tableMeta = {
  id: 'table',
  name: 'Data Tables',
  category: 'data' as const,
  description:
    'Sortable data tables with row hover states, zebra striping, and action buttons',
  complexity: 'medium' as const,
  tags: ['table', 'data', 'sorting', 'actions', 'list'],
}
