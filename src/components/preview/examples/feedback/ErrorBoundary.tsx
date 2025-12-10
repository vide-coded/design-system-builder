import { useStore } from '@tanstack/react-store'
import { designSystemStore } from '@/stores/design-system.store'

export function ErrorBoundary() {
  const colors = useStore(designSystemStore, (state) => state.colors)
  const spacing = useStore(designSystemStore, (state) => state.spacing)
  const borderRadius = useStore(
    designSystemStore,
    (state) => state.borderRadius,
  )
  const typography = useStore(designSystemStore, (state) => state.typography)

  return (
    <div style={{ padding: spacing[6] }}>
      <h3
        style={{
          fontSize: typography.fontSize.lg,
          fontWeight: typography.fontWeight.semibold,
          marginBottom: spacing[4],
          color: colors.foreground,
        }}
      >
        Error Boundary Examples
      </h3>
      <p
        style={{
          fontSize: typography.fontSize.sm,
          color: colors.mutedForeground,
          marginBottom: spacing[6],
        }}
      >
        Error handling UI patterns
      </p>

      <div
        style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}
      >
        {/* Full Page Error */}
        <div
          style={{
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: spacing[8],
            borderRadius: borderRadius.lg,
            border: `1px solid ${colors.border}`,
            backgroundColor: colors.card,
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: borderRadius.full,
              backgroundColor: `${colors.error[500]}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: spacing[6],
            }}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke={colors.error[500]}
                strokeWidth="3"
              />
              <path
                d="M18 18l12 12m0-12L18 30"
                stroke={colors.error[500]}
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h2
            style={{
              fontSize: typography.fontSize['3xl'],
              fontWeight: typography.fontWeight.bold,
              color: colors.foreground,
              marginBottom: spacing[3],
              textAlign: 'center',
            }}
          >
            Oops! Something went wrong
          </h2>
          <p
            style={{
              fontSize: typography.fontSize.base,
              color: colors.mutedForeground,
              marginBottom: spacing[6],
              textAlign: 'center',
              maxWidth: '500px',
            }}
          >
            We're sorry for the inconvenience. An unexpected error has occurred.
            Our team has been notified and is working on a fix.
          </p>
          <div style={{ display: 'flex', gap: spacing[3] }}>
            <button
              type="button"
              style={{
                padding: `${spacing[3]} ${spacing[6]}`,
                borderRadius: borderRadius.md,
                backgroundColor: 'transparent',
                color: colors.foreground,
                border: `1px solid ${colors.border}`,
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.medium,
                cursor: 'pointer',
              }}
            >
              Go back
            </button>
            <button
              type="button"
              style={{
                padding: `${spacing[3]} ${spacing[6]}`,
                borderRadius: borderRadius.md,
                backgroundColor: colors.primary[500],
                color: '#ffffff',
                border: 'none',
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.medium,
                cursor: 'pointer',
              }}
            >
              Try again
            </button>
          </div>
          <details
            style={{
              marginTop: spacing[8],
              width: '100%',
              maxWidth: '600px',
            }}
          >
            <summary
              style={{
                fontSize: typography.fontSize.sm,
                color: colors.mutedForeground,
                cursor: 'pointer',
                padding: spacing[2],
              }}
            >
              Error details (for developers)
            </summary>
            <div
              style={{
                marginTop: spacing[3],
                padding: spacing[4],
                borderRadius: borderRadius.md,
                backgroundColor: colors.muted,
                fontFamily: typography.fontFamily.mono.join(', '),
                fontSize: typography.fontSize.xs,
                color: colors.foreground,
                overflowX: 'auto',
              }}
            >
              <pre
                style={{
                  margin: 0,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-all',
                }}
              >
                {`Error: Cannot read property 'map' of undefined
  at ComponentName (bundle.js:1234:56)
  at renderWithHooks (react-dom.js:7890:12)
  at updateFunctionComponent (react-dom.js:8901:23)`}
              </pre>
            </div>
          </details>
        </div>

        {/* Inline Component Error */}
        <div
          style={{
            padding: spacing[6],
            borderRadius: borderRadius.lg,
            border: `1px solid ${colors.error[500]}`,
            backgroundColor: `${colors.error[500]}10`,
          }}
        >
          <div
            style={{ display: 'flex', gap: spacing[3], alignItems: 'start' }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: borderRadius.md,
                backgroundColor: colors.error[500],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 8v4m0 4h.01"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <h4
                style={{
                  fontSize: typography.fontSize.base,
                  fontWeight: typography.fontWeight.semibold,
                  color: colors.foreground,
                  marginBottom: spacing[2],
                }}
              >
                Failed to load component
              </h4>
              <p
                style={{
                  fontSize: typography.fontSize.sm,
                  color: colors.mutedForeground,
                  marginBottom: spacing[3],
                  lineHeight: typography.lineHeight.relaxed,
                }}
              >
                This component encountered an error during rendering. You can
                try reloading the page or contact support if the problem
                persists.
              </p>
              <button
                type="button"
                style={{
                  padding: `${spacing[2]} ${spacing[4]}`,
                  borderRadius: borderRadius.md,
                  backgroundColor: colors.error[500],
                  color: '#ffffff',
                  border: 'none',
                  fontSize: typography.fontSize.sm,
                  fontWeight: typography.fontWeight.medium,
                  cursor: 'pointer',
                }}
              >
                Reload component
              </button>
            </div>
          </div>
        </div>

        {/* 404 Error */}
        <div
          style={{
            minHeight: '350px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: spacing[8],
            borderRadius: borderRadius.lg,
            border: `1px solid ${colors.border}`,
            backgroundColor: colors.card,
          }}
        >
          <h1
            style={{
              fontSize: '120px',
              fontWeight: typography.fontWeight.black,
              color: colors.primary[500],
              lineHeight: 1,
              marginBottom: spacing[4],
            }}
          >
            404
          </h1>
          <h2
            style={{
              fontSize: typography.fontSize['2xl'],
              fontWeight: typography.fontWeight.bold,
              color: colors.foreground,
              marginBottom: spacing[2],
              textAlign: 'center',
            }}
          >
            Page not found
          </h2>
          <p
            style={{
              fontSize: typography.fontSize.base,
              color: colors.mutedForeground,
              marginBottom: spacing[6],
              textAlign: 'center',
              maxWidth: '450px',
            }}
          >
            The page you're looking for doesn't exist or has been moved.
          </p>
          <button
            type="button"
            style={{
              padding: `${spacing[3]} ${spacing[6]}`,
              borderRadius: borderRadius.md,
              backgroundColor: colors.primary[500],
              color: '#ffffff',
              border: 'none',
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.medium,
              cursor: 'pointer',
            }}
          >
            Go to homepage
          </button>
        </div>
      </div>
    </div>
  )
}
