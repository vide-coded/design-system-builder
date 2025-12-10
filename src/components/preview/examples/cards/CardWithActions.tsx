/**
 * CardWithActions - Interactive card with action buttons
 * Demonstrates cards with hover states and multiple actions
 */

export function CardWithActions() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-foreground">
          Card with Actions
        </h3>
        <p className="text-xs text-muted-foreground">
          Interactive cards with buttons and hover states
        </p>
      </div>

      {/* Action Card */}
      <div
        className="rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md"
        style={{
          borderRadius: 'var(--radius-lg)',
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-card)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <div
          className="p-6"
          style={{
            padding: 'var(--spacing-6)',
          }}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3
                className="text-lg font-semibold text-card-foreground"
                style={{
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--color-card-foreground)',
                }}
              >
                Project Alpha
              </h3>
              <p
                className="mt-2 text-sm text-muted-foreground"
                style={{
                  marginTop: 'var(--spacing-2)',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-muted-foreground)',
                }}
              >
                A comprehensive project management tool with real-time
                collaboration features.
              </p>
            </div>
            <button
              type="button"
              className="rounded-full p-2 transition-colors hover:bg-muted"
              style={{
                borderRadius: 'var(--radius-full)',
                padding: 'var(--spacing-2)',
              }}
              aria-label="More options"
            >
              <svg
                className="h-5 w-5 text-muted-foreground"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>More options</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>
          </div>

          {/* Metadata */}
          <div
            className="mt-4 flex items-center gap-4 text-xs text-muted-foreground"
            style={{
              marginTop: 'var(--spacing-4)',
              fontSize: 'var(--font-size-xs)',
              color: 'var(--color-muted-foreground)',
            }}
          >
            <div className="flex items-center gap-1">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Calendar</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Due: Jan 30, 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Users</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span>5 members</span>
            </div>
          </div>

          {/* Actions */}
          <div
            className="mt-6 flex gap-2"
            style={{
              marginTop: 'var(--spacing-6)',
            }}
          >
            <button
              type="button"
              className="flex-1 rounded px-4 py-2 text-sm font-medium transition-colors"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-primary-foreground)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--spacing-2) var(--spacing-4)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
              }}
            >
              Open Project
            </button>
            <button
              type="button"
              className="rounded px-4 py-2 text-sm font-medium transition-colors"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--color-muted-foreground)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--spacing-2) var(--spacing-4)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
              }}
            >
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Action Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {['Active', 'Paused'].map((status) => (
          <div
            key={status}
            className="rounded-lg border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md"
            style={{
              borderRadius: 'var(--radius-lg)',
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-card)',
              padding: 'var(--spacing-4)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div className="flex items-center justify-between">
              <h4
                className="text-sm font-medium text-card-foreground"
                style={{
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--color-card-foreground)',
                }}
              >
                Project {status}
              </h4>
              <span
                className="rounded-full px-2 py-1 text-xs font-medium"
                style={{
                  backgroundColor:
                    status === 'Active'
                      ? 'var(--color-success)'
                      : 'var(--color-muted)',
                  color:
                    status === 'Active'
                      ? 'var(--color-success-foreground)'
                      : 'var(--color-muted-foreground)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--spacing-1) var(--spacing-2)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 'var(--font-weight-medium)',
                }}
              >
                {status}
              </span>
            </div>
            <p
              className="mt-2 text-xs text-muted-foreground"
              style={{
                marginTop: 'var(--spacing-2)',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-muted-foreground)',
              }}
            >
              {status === 'Active'
                ? 'Currently in progress'
                : 'Waiting for approval'}
            </p>
            <div
              className="mt-3 flex gap-2"
              style={{
                marginTop: 'var(--spacing-3)',
              }}
            >
              <button
                type="button"
                className="rounded-full p-1.5 transition-colors hover:bg-muted"
                style={{
                  borderRadius: 'var(--radius-full)',
                }}
                aria-label="Edit"
              >
                <svg
                  className="h-4 w-4 text-muted-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <title>Edit</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="rounded-full p-1.5 transition-colors hover:bg-muted"
                style={{
                  borderRadius: 'var(--radius-full)',
                }}
                aria-label="Delete"
              >
                <svg
                  className="h-4 w-4 text-muted-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <title>Delete</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
