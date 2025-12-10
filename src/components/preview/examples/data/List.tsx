/**
 * List components with avatars, badges, and actions using design tokens.
 * Demonstrates various list layouts with rich content.
 */
export function List() {
  const notifications = [
    {
      id: '1',
      user: 'Alice Johnson',
      action: 'commented on your post',
      time: '2 min ago',
      unread: true,
    },
    {
      id: '2',
      user: 'Bob Smith',
      action: 'liked your photo',
      time: '1 hour ago',
      unread: true,
    },
    {
      id: '3',
      user: 'Carol Williams',
      action: 'started following you',
      time: '3 hours ago',
      unread: false,
    },
    {
      id: '4',
      user: 'David Brown',
      action: 'mentioned you in a comment',
      time: '1 day ago',
      unread: false,
    },
  ]

  const files = [
    {
      id: '1',
      name: 'Project Proposal.pdf',
      size: '2.4 MB',
      modified: '2 hours ago',
      type: 'pdf',
    },
    {
      id: '2',
      name: 'Design Mockups.fig',
      size: '18.7 MB',
      modified: '5 hours ago',
      type: 'figma',
    },
    {
      id: '3',
      name: 'Meeting Notes.docx',
      size: '156 KB',
      modified: '1 day ago',
      type: 'doc',
    },
    {
      id: '4',
      name: 'Budget Spreadsheet.xlsx',
      size: '3.2 MB',
      modified: '2 days ago',
      type: 'excel',
    },
  ]

  return (
    <div className="space-y-[length:var(--spacing-6)]">
      {/* Notification List */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-3)]">
          Notifications List
        </h3>
        <div className="rounded-[var(--radius-lg)] border-[length:var(--border-width)] border-[color:var(--color-border)] overflow-hidden">
          {notifications.map((notification, index) => (
            <div
              key={notification.id}
              className={`
                flex items-center gap-[length:var(--spacing-3)]
                px-[length:var(--spacing-4)]
                py-[length:var(--spacing-3)]
                hover:bg-[color:var(--color-muted)]
                transition-colors
                duration-[var(--duration-fast)]
                cursor-pointer
                ${index !== notifications.length - 1 ? 'border-b-[length:var(--border-width)] border-[color:var(--color-border)]' : ''}
                ${notification.unread ? 'bg-[color:var(--color-primary-50)]' : 'bg-[color:var(--color-background)]'}
              `}
            >
              <div className="w-[length:var(--spacing-10)] h-[length:var(--spacing-10)] rounded-[var(--radius-full)] bg-[color:var(--color-primary-100)] flex items-center justify-center flex-shrink-0">
                <span className="text-[length:var(--text-sm)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-primary-700)]">
                  {notification.user
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[length:var(--text-sm)] text-[color:var(--color-foreground)]">
                  <span className="font-[number:var(--font-weight-semibold)]">
                    {notification.user}
                  </span>{' '}
                  <span className="text-[color:var(--color-muted-foreground)]">
                    {notification.action}
                  </span>
                </p>
                <p className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)] mt-[length:var(--spacing-1)]">
                  {notification.time}
                </p>
              </div>
              {notification.unread && (
                <div className="w-[length:var(--spacing-2)] h-[length:var(--spacing-2)] rounded-[var(--radius-full)] bg-[color:var(--color-primary-500)] flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* File List */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-3)]">
          File List with Actions
        </h3>
        <div className="rounded-[var(--radius-lg)] border-[length:var(--border-width)] border-[color:var(--color-border)] divide-y divide-[color:var(--color-border)]">
          {files.map((file) => (
            <div
              key={file.id}
              className="flex items-center gap-[length:var(--spacing-3)] px-[length:var(--spacing-4)] py-[length:var(--spacing-3)] hover:bg-[color:var(--color-muted)] transition-colors"
            >
              <div className="w-[length:var(--spacing-10)] h-[length:var(--spacing-10)] rounded-[var(--radius-md)] bg-[color:var(--color-muted)] flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-[length:var(--spacing-5)] h-[length:var(--spacing-5)] text-[color:var(--color-muted-foreground)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                  <polyline points="13 2 13 9 20 9" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)] truncate">
                  {file.name}
                </p>
                <p className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)] mt-[length:var(--spacing-1)]">
                  {file.size} • Modified {file.modified}
                </p>
              </div>
              <div className="flex items-center gap-[length:var(--spacing-2)] flex-shrink-0">
                <button
                  className="p-[length:var(--spacing-2)] rounded-[var(--radius-md)] hover:bg-[color:var(--color-muted)] transition-colors"
                  aria-label="Download"
                >
                  <svg
                    className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)] text-[color:var(--color-muted-foreground)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </button>
                <button
                  className="p-[length:var(--spacing-2)] rounded-[var(--radius-md)] hover:bg-[color:var(--color-muted)] transition-colors"
                  aria-label="More options"
                >
                  <svg
                    className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)] text-[color:var(--color-muted-foreground)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple List */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-3)]">
          Simple List
        </h3>
        <div className="rounded-[var(--radius-lg)] border-[length:var(--border-width)] border-[color:var(--color-border)] divide-y divide-[color:var(--color-border)]">
          {['Dashboard', 'Analytics', 'Reports', 'Settings', 'Help Center'].map(
            (item, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-[length:var(--spacing-4)] py-[length:var(--spacing-3)] hover:bg-[color:var(--color-muted)] transition-colors cursor-pointer"
              >
                <span className="text-[length:var(--text-sm)] text-[color:var(--color-foreground)]">
                  {item}
                </span>
                <svg
                  className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)] text-[color:var(--color-muted-foreground)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export const listMeta = {
  id: 'list',
  name: 'Lists',
  category: 'data' as const,
  description: 'Lists with avatars, badges, actions, notifications, and files',
  complexity: 'simple' as const,
  tags: ['list', 'notifications', 'files', 'avatars', 'actions'],
}
