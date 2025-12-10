/**
 * Avatar group component demonstrating user avatars with overflow handling.
 * Uses design tokens for all styling including sizes, borders, and hover effects.
 */

interface User {
  id: string
  name: string
  initials: string
  color: string
}

const users: User[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    initials: 'AJ',
    color: 'var(--color-primary-500)',
  },
  {
    id: '2',
    name: 'Bob Smith',
    initials: 'BS',
    color: 'var(--color-success-500)',
  },
  {
    id: '3',
    name: 'Charlie Brown',
    initials: 'CB',
    color: 'var(--color-warning-500)',
  },
  {
    id: '4',
    name: 'Diana Prince',
    initials: 'DP',
    color: 'var(--color-error-500)',
  },
  {
    id: '5',
    name: 'Eve Davis',
    initials: 'ED',
    color: 'var(--color-info-500)',
  },
  {
    id: '6',
    name: 'Frank Miller',
    initials: 'FM',
    color: 'var(--color-accent-500)',
  },
  {
    id: '7',
    name: 'Grace Lee',
    initials: 'GL',
    color: 'var(--color-secondary-500)',
  },
]

export function AvatarGroup() {
  const displayUsers = users.slice(0, 4)
  const remainingCount = users.length - 4

  return (
    <div className="space-y-8">
      {/* Standard avatar group */}
      <div>
        <div className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)] mb-[length:var(--spacing-3)]">
          Team Members
        </div>
        <div className="flex -space-x-[length:var(--spacing-3)]">
          {displayUsers.map((user) => (
            <div
              key={user.id}
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border-[length:calc(var(--border-width)*2)] border-[color:var(--color-card)] hover:z-10 hover:scale-110 transition-transform duration-[var(--duration-fast)] cursor-pointer"
              style={{ backgroundColor: user.color }}
              title={user.name}
            >
              <span className="text-[length:var(--text-sm)] font-[number:var(--font-weight-semibold)] text-white">
                {user.initials}
              </span>
            </div>
          ))}
          {remainingCount > 0 && (
            <div
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-[color:var(--color-muted)] border-[length:calc(var(--border-width)*2)] border-[color:var(--color-card)] hover:z-10 hover:scale-110 transition-transform duration-[var(--duration-fast)] cursor-pointer"
              title={`+${remainingCount} more`}
            >
              <span className="text-[length:var(--text-xs)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
                +{remainingCount}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Large avatar group */}
      <div>
        <div className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)] mb-[length:var(--spacing-3)]">
          Project Contributors (Large)
        </div>
        <div className="flex -space-x-[length:var(--spacing-4)]">
          {users.slice(0, 5).map((user) => (
            <div
              key={user.id}
              className="relative inline-flex items-center justify-center w-14 h-14 rounded-full border-[length:calc(var(--border-width)*3)] border-[color:var(--color-card)] hover:z-10 hover:scale-110 transition-transform duration-[var(--duration-fast)] cursor-pointer shadow-[var(--shadow-sm)]"
              style={{ backgroundColor: user.color }}
              title={user.name}
            >
              <span className="text-[length:var(--text-base)] font-[number:var(--font-weight-bold)] text-white">
                {user.initials}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Small avatar group */}
      <div>
        <div className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)] mb-[length:var(--spacing-3)]">
          Active Users (Small)
        </div>
        <div className="flex -space-x-[length:var(--spacing-2)]">
          {users.slice(0, 6).map((user) => (
            <div
              key={user.id}
              className="relative inline-flex items-center justify-center w-8 h-8 rounded-full border-[length:calc(var(--border-width)*2)] border-[color:var(--color-card)] hover:z-10 hover:scale-110 transition-transform duration-[var(--duration-fast)] cursor-pointer"
              style={{ backgroundColor: user.color }}
              title={user.name}
            >
              <span className="text-[length:var(--text-xs)] font-[number:var(--font-weight-semibold)] text-white">
                {user.initials}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Avatar group with max limit */}
      <div>
        <div className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)] mb-[length:var(--spacing-3)]">
          Max 3 visible
        </div>
        <div className="flex -space-x-[length:var(--spacing-3)]">
          {users.slice(0, 3).map((user) => (
            <div
              key={user.id}
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border-[length:calc(var(--border-width)*2)] border-[color:var(--color-card)] hover:z-10 hover:scale-110 transition-transform duration-[var(--duration-fast)] cursor-pointer"
              style={{ backgroundColor: user.color }}
              title={user.name}
            >
              <span className="text-[length:var(--text-sm)] font-[number:var(--font-weight-semibold)] text-white">
                {user.initials}
              </span>
            </div>
          ))}
          <div
            className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-[color:var(--color-muted)] border-[length:calc(var(--border-width)*2)] border-[color:var(--color-card)] hover:z-10 hover:scale-110 transition-transform duration-[var(--duration-fast)] cursor-pointer"
            title={`${users.length - 3} more members`}
          >
            <span className="text-[length:var(--text-xs)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
              +{users.length - 3}
            </span>
          </div>
        </div>
      </div>

      {/* Avatar group with status indicators */}
      <div>
        <div className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)] mb-[length:var(--spacing-3)]">
          Online Status
        </div>
        <div className="flex -space-x-[length:var(--spacing-3)]">
          {users.slice(0, 4).map((user, index) => (
            <div key={user.id} className="relative">
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border-[length:calc(var(--border-width)*2)] border-[color:var(--color-card)] hover:z-10 hover:scale-110 transition-transform duration-[var(--duration-fast)] cursor-pointer"
                style={{ backgroundColor: user.color }}
                title={user.name}
              >
                <span className="text-[length:var(--text-sm)] font-[number:var(--font-weight-semibold)] text-white">
                  {user.initials}
                </span>
              </div>
              {/* Status indicator */}
              <div
                className={`absolute bottom-0 right-0 w-[length:var(--spacing-3)] h-[length:var(--spacing-3)] rounded-full border-[length:calc(var(--border-width)*2)] border-[color:var(--color-card)] ${
                  index % 2 === 0
                    ? 'bg-[color:var(--color-success-500)]'
                    : 'bg-[color:var(--color-muted)]'
                }`}
                title={index % 2 === 0 ? 'Online' : 'Offline'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Avatar list with details */}
      <div className="bg-[color:var(--color-card)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-lg)] p-[length:var(--spacing-4)] shadow-[var(--shadow-sm)]">
        <div className="text-[length:var(--text-base)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)] mb-[length:var(--spacing-4)]">
          Team Directory
        </div>
        <div className="space-y-[length:var(--spacing-3)]">
          {users.slice(0, 5).map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-[length:var(--spacing-3)]"
            >
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0"
                style={{ backgroundColor: user.color }}
              >
                <span className="text-[length:var(--text-sm)] font-[number:var(--font-weight-semibold)] text-white">
                  {user.initials}
                </span>
              </div>
              <div className="flex-1">
                <div className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)]">
                  {user.name}
                </div>
                <div className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                  {user.name.toLowerCase().replace(' ', '.')}@example.com
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const avatarGroupMeta = {
  id: 'avatar-group',
  name: 'Avatar Group',
  category: 'advanced' as const,
  description:
    'User avatar groups with overflow handling and status indicators',
  complexity: 'medium' as const,
  tags: ['avatar', 'group', 'users', 'status', 'profile'],
  reactive: true,
}
