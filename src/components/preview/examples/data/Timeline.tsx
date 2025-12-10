/**
 * Timeline component for displaying chronological events using design tokens.
 * Demonstrates vertical timeline with icons, dates, and descriptions.
 */
export function Timeline() {
  const events = [
    {
      id: '1',
      title: 'Project Kickoff',
      description: 'Initial team meeting and project planning session',
      date: 'Jan 15, 2025',
      time: '10:00 AM',
      type: 'start',
      status: 'completed',
    },
    {
      id: '2',
      title: 'Design Phase Complete',
      description: 'All mockups and prototypes approved by stakeholders',
      date: 'Jan 22, 2025',
      time: '3:30 PM',
      type: 'milestone',
      status: 'completed',
    },
    {
      id: '3',
      title: 'Development Sprint 1',
      description: 'Backend API implementation and database schema finalized',
      date: 'Feb 5, 2025',
      time: '9:00 AM',
      type: 'progress',
      status: 'in-progress',
    },
    {
      id: '4',
      title: 'QA Testing',
      description: 'Comprehensive testing phase begins',
      date: 'Feb 20, 2025',
      time: '2:00 PM',
      type: 'review',
      status: 'upcoming',
    },
    {
      id: '5',
      title: 'Production Launch',
      description: 'Deploy to production environment',
      date: 'Mar 1, 2025',
      time: '12:00 PM',
      type: 'launch',
      status: 'upcoming',
    },
  ]

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'completed':
        return {
          iconBg: 'bg-[color:var(--color-success-100)]',
          iconColor: 'text-[color:var(--color-success-600)]',
          line: 'bg-[color:var(--color-success-300)]',
        }
      case 'in-progress':
        return {
          iconBg: 'bg-[color:var(--color-primary-100)]',
          iconColor: 'text-[color:var(--color-primary-600)]',
          line: 'bg-[color:var(--color-border)]',
        }
      case 'upcoming':
        return {
          iconBg: 'bg-[color:var(--color-muted)]',
          iconColor: 'text-[color:var(--color-muted-foreground)]',
          line: 'bg-[color:var(--color-border)]',
        }
      default:
        return {
          iconBg: 'bg-[color:var(--color-muted)]',
          iconColor: 'text-[color:var(--color-muted-foreground)]',
          line: 'bg-[color:var(--color-border)]',
        }
    }
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'start':
        return (
          <svg
            className="w-[length:var(--spacing-5)] h-[length:var(--spacing-5)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        )
      case 'milestone':
        return (
          <svg
            className="w-[length:var(--spacing-5)] h-[length:var(--spacing-5)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        )
      case 'progress':
        return (
          <svg
            className="w-[length:var(--spacing-5)] h-[length:var(--spacing-5)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        )
      case 'review':
        return (
          <svg
            className="w-[length:var(--spacing-5)] h-[length:var(--spacing-5)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        )
      case 'launch':
        return (
          <svg
            className="w-[length:var(--spacing-5)] h-[length:var(--spacing-5)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        )
      default:
        return (
          <svg
            className="w-[length:var(--spacing-5)] h-[length:var(--spacing-5)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        )
    }
  }

  return (
    <div className="space-y-[length:var(--spacing-6)]">
      {/* Vertical Timeline */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-3)]">
          Project Timeline
        </h3>
        <div className="rounded-[var(--radius-lg)] border-[length:var(--border-width)] border-[color:var(--color-border)] bg-[color:var(--color-card)] p-[length:var(--spacing-6)]">
          <div className="space-y-[length:var(--spacing-6)]">
            {events.map((event, index) => {
              const styles = getStatusStyles(event.status)
              const isLast = index === events.length - 1

              return (
                <div
                  key={event.id}
                  className="relative flex gap-[length:var(--spacing-4)]"
                >
                  {/* Timeline line and icon */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`
                        w-[length:var(--spacing-10)]
                        h-[length:var(--spacing-10)]
                        rounded-[var(--radius-full)]
                        ${styles.iconBg}
                        ${styles.iconColor}
                        flex
                        items-center
                        justify-center
                        z-10
                        flex-shrink-0
                      `}
                    >
                      {getIcon(event.type)}
                    </div>
                    {!isLast && (
                      <div
                        className={`
                          w-[length:var(--border-width)]
                          h-full
                          absolute
                          top-[length:var(--spacing-10)]
                          ${styles.line}
                        `}
                      />
                    )}
                  </div>

                  {/* Event content */}
                  <div className="flex-1 pb-[length:var(--spacing-8)]">
                    <div className="flex items-start justify-between gap-[length:var(--spacing-4)] mb-[length:var(--spacing-2)]">
                      <h4 className="text-[length:var(--text-base)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
                        {event.title}
                      </h4>
                      <span className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)] whitespace-nowrap">
                        {event.time}
                      </span>
                    </div>
                    <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mb-[length:var(--spacing-2)]">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-[length:var(--spacing-2)]">
                      <svg
                        className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)] text-[color:var(--color-muted-foreground)]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                        {event.date}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Compact Timeline */}
      <div>
        <h3 className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] mb-[length:var(--spacing-3)]">
          Activity Timeline (Compact)
        </h3>
        <div className="rounded-[var(--radius-lg)] border-[length:var(--border-width)] border-[color:var(--color-border)] bg-[color:var(--color-card)] p-[length:var(--spacing-4)] space-y-[length:var(--spacing-3)]">
          {[
            {
              action: 'Created new project',
              user: 'Alice Johnson',
              time: '2 hours ago',
            },
            {
              action: 'Uploaded design files',
              user: 'Bob Smith',
              time: '5 hours ago',
            },
            {
              action: 'Updated project status',
              user: 'Carol Williams',
              time: '1 day ago',
            },
            {
              action: 'Added 3 new members',
              user: 'David Brown',
              time: '2 days ago',
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-start gap-[length:var(--spacing-3)]"
            >
              <div className="w-[length:var(--spacing-2)] h-[length:var(--spacing-2)] rounded-[var(--radius-full)] bg-[color:var(--color-primary-500)] mt-[length:var(--spacing-2)] flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-[length:var(--text-sm)] text-[color:var(--color-foreground)]">
                  <span className="font-[number:var(--font-weight-semibold)]">
                    {activity.user}
                  </span>{' '}
                  <span className="text-[color:var(--color-muted-foreground)]">
                    {activity.action}
                  </span>
                </p>
                <p className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)] mt-[length:var(--spacing-1)]">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const timelineMeta = {
  id: 'timeline',
  name: 'Timeline',
  category: 'data' as const,
  description:
    'Vertical timeline for chronological events, project milestones, and activity feeds',
  complexity: 'medium' as const,
  tags: ['timeline', 'chronological', 'events', 'milestones', 'activity'],
}
