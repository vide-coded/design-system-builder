/**
 * StatsCard - Statistics and metrics cards
 * Demonstrates dashboard-style stat cards with icons and trends
 */

export function StatsCard() {
  const stats = [
    {
      label: 'Total Revenue',
      value: '$45,231',
      change: '+20.1%',
      trend: 'up',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      label: 'Active Users',
      value: '2,384',
      change: '+12.5%',
      trend: 'up',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      ),
    },
    {
      label: 'New Orders',
      value: '156',
      change: '-3.2%',
      trend: 'down',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      ),
    },
    {
      label: 'Conversion Rate',
      value: '3.24%',
      change: '+2.4%',
      trend: 'up',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-foreground">Stats Card</h3>
        <p className="text-xs text-muted-foreground">
          Dashboard statistics with trends and icons
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            style={{
              borderRadius: 'var(--radius-lg)',
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-card)',
              padding: 'var(--spacing-6)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div className="flex items-center justify-between">
              <p
                className="text-sm font-medium text-muted-foreground"
                style={{
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--color-muted-foreground)',
                }}
              >
                {stat.label}
              </p>
              <div
                className="rounded-full p-2"
                style={{
                  backgroundColor: 'var(--color-muted)',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--spacing-2)',
                }}
              >
                <svg
                  className="h-4 w-4 text-muted-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <title>{stat.label}</title>
                  {stat.icon}
                </svg>
              </div>
            </div>
            <div
              className="mt-3"
              style={{
                marginTop: 'var(--spacing-3)',
              }}
            >
              <p
                className="text-2xl font-bold text-card-foreground"
                style={{
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--color-card-foreground)',
                }}
              >
                {stat.value}
              </p>
              <div
                className="mt-1 flex items-center gap-1"
                style={{
                  marginTop: 'var(--spacing-1)',
                }}
              >
                <span
                  className={`text-xs font-medium ${
                    stat.trend === 'up' ? 'text-success' : 'text-error'
                  }`}
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-medium)',
                    color:
                      stat.trend === 'up'
                        ? 'var(--color-success)'
                        : 'var(--color-error)',
                  }}
                >
                  {stat.change}
                </span>
                <span
                  className="text-xs text-muted-foreground"
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--color-muted-foreground)',
                  }}
                >
                  from last month
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Alternative Compact Stats */}
      <div className="space-y-3">
        <h4
          className="text-xs font-medium uppercase tracking-wide text-muted-foreground"
          style={{
            fontSize: 'var(--font-size-xs)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-muted-foreground)',
            letterSpacing: '0.05em',
          }}
        >
          Compact Style
        </h4>
        <div
          className="rounded-lg border border-border bg-card shadow-sm"
          style={{
            borderRadius: 'var(--radius-lg)',
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-card)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex items-center justify-between p-4 ${
                index !== stats.length - 1 ? 'border-b border-border' : ''
              }`}
              style={{
                padding: 'var(--spacing-4)',
                borderBottomColor:
                  index !== stats.length - 1
                    ? 'var(--color-border)'
                    : 'transparent',
              }}
            >
              <div>
                <p
                  className="text-sm font-medium text-card-foreground"
                  style={{
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-card-foreground)',
                  }}
                >
                  {stat.label}
                </p>
                <p
                  className="mt-1 text-xs text-muted-foreground"
                  style={{
                    marginTop: 'var(--spacing-1)',
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--color-muted-foreground)',
                  }}
                >
                  {stat.change} change
                </p>
              </div>
              <p
                className="text-xl font-bold text-card-foreground"
                style={{
                  fontSize: 'var(--font-size-xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--color-card-foreground)',
                }}
              >
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
