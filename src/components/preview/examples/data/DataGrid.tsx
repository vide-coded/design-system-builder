/**
 * Data grid component with card layout using design tokens.
 * Demonstrates responsive grid, card-based data display, and hover effects.
 */
export function DataGrid() {
  const users = [
    {
      id: '1',
      name: 'Alice Johnson',
      role: 'Product Designer',
      avatar: 'AJ',
      status: 'online',
      projects: 12,
    },
    {
      id: '2',
      name: 'Bob Smith',
      role: 'Frontend Developer',
      avatar: 'BS',
      status: 'offline',
      projects: 8,
    },
    {
      id: '3',
      name: 'Carol Williams',
      role: 'Backend Developer',
      avatar: 'CW',
      status: 'online',
      projects: 15,
    },
    {
      id: '4',
      name: 'David Brown',
      role: 'DevOps Engineer',
      avatar: 'DB',
      status: 'away',
      projects: 6,
    },
    {
      id: '5',
      name: 'Eve Davis',
      role: 'UX Researcher',
      avatar: 'ED',
      status: 'online',
      projects: 9,
    },
    {
      id: '6',
      name: 'Frank Miller',
      role: 'Product Manager',
      avatar: 'FM',
      status: 'offline',
      projects: 11,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-[color:var(--color-success-500)]'
      case 'away':
        return 'bg-[color:var(--color-warning-500)]'
      case 'offline':
        return 'bg-[color:var(--color-gray-400)]'
      default:
        return 'bg-[color:var(--color-gray-400)]'
    }
  }

  return (
    <div className="space-y-[length:var(--spacing-6)]">
      {/* User Cards Grid */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-3)]">
          Team Members Grid
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[length:var(--spacing-4)]">
          {users.map((user) => (
            <div
              key={user.id}
              className="
                rounded-[var(--radius-lg)]
                border-[length:var(--border-width)]
                border-[color:var(--color-border)]
                bg-[color:var(--color-card)]
                p-[length:var(--spacing-4)]
                hover:shadow-[var(--shadow-md)]
                hover:border-[color:var(--color-primary-300)]
                transition-all
                duration-[var(--duration-normal)]
                cursor-pointer
              "
            >
              <div className="flex items-start gap-[length:var(--spacing-3)]">
                <div className="relative">
                  <div className="w-[length:var(--spacing-12)] h-[length:var(--spacing-12)] rounded-[var(--radius-full)] bg-[color:var(--color-primary-100)] flex items-center justify-center">
                    <span className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-primary-700)]">
                      {user.avatar}
                    </span>
                  </div>
                  <div
                    className={`absolute bottom-0 right-0 w-[length:var(--spacing-3)] h-[length:var(--spacing-3)] rounded-[var(--radius-full)] border-2 border-[color:var(--color-card)] ${getStatusColor(
                      user.status,
                    )}`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[length:var(--text-base)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)] truncate">
                    {user.name}
                  </h4>
                  <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] truncate">
                    {user.role}
                  </p>
                  <div className="mt-[length:var(--spacing-2)] flex items-center gap-[length:var(--spacing-1)] text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                    <svg
                      className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                    <span>{user.projects} projects</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-3)]">
          Project Stats Grid
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[length:var(--spacing-4)]">
          {[
            { label: 'Total Projects', value: '24', icon: 'folder' },
            { label: 'Active Tasks', value: '156', icon: 'check' },
            { label: 'Team Members', value: '12', icon: 'users' },
            { label: 'Completion', value: '87%', icon: 'chart' },
          ].map((stat, index) => (
            <div
              key={index}
              className="
                rounded-[var(--radius-lg)]
                border-[length:var(--border-width)]
                border-[color:var(--color-border)]
                bg-[color:var(--color-card)]
                p-[length:var(--spacing-4)]
                hover:shadow-[var(--shadow-sm)]
                transition-shadow
                duration-[var(--duration-normal)]
              "
            >
              <div className="flex items-center justify-between mb-[length:var(--spacing-2)]">
                <span className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
                  {stat.label}
                </span>
                <svg
                  className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)] text-[color:var(--color-muted-foreground)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {stat.icon === 'folder' && (
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  )}
                  {stat.icon === 'check' && (
                    <polyline points="20 6 9 17 4 12" />
                  )}
                  {stat.icon === 'users' && (
                    <>
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </>
                  )}
                  {stat.icon === 'chart' && (
                    <>
                      <line x1="12" y1="20" x2="12" y2="10" />
                      <line x1="18" y1="20" x2="18" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="16" />
                    </>
                  )}
                </svg>
              </div>
              <div className="text-[length:var(--text-2xl)] font-[number:var(--font-weight-bold)] text-[color:var(--color-foreground)]">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const dataGridMeta = {
  id: 'data-grid',
  name: 'Data Grid',
  category: 'data' as const,
  description: 'Responsive grid layout with cards, user profiles, and stats',
  complexity: 'medium' as const,
  tags: ['grid', 'cards', 'users', 'stats', 'responsive'],
}
