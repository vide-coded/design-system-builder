import { useStore } from '@tanstack/react-store'
import { designSystemStore } from '@/stores/design-system.store'

export function Toast() {
  const colors = useStore(designSystemStore, (state) => state.colors)
  const spacing = useStore(designSystemStore, (state) => state.spacing)
  const borderRadius = useStore(
    designSystemStore,
    (state) => state.borderRadius,
  )
  const typography = useStore(designSystemStore, (state) => state.typography)
  const shadows = useStore(designSystemStore, (state) => state.shadows)

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
        Toast Notifications
      </h3>
      <p
        style={{
          fontSize: typography.fontSize.sm,
          color: colors.mutedForeground,
          marginBottom: spacing[6],
        }}
      >
        Temporary notification messages that appear and auto-dismiss
      </p>

      <div
        style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}
      >
        {/* Toast Examples */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacing[4],
            alignItems: 'flex-end',
          }}
        >
          {/* Success Toast */}
          <div
            style={{
              minWidth: '320px',
              maxWidth: '400px',
              padding: spacing[4],
              borderRadius: borderRadius.lg,
              backgroundColor: colors.card,
              border: `1px solid ${colors.border}`,
              boxShadow: shadows.lg,
              display: 'flex',
              gap: spacing[3],
              alignItems: 'start',
            }}
            role="status"
            aria-live="polite"
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: borderRadius.full,
                backgroundColor: `${colors.success}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 10l3 3 7-7"
                  stroke={colors.success}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontSize: typography.fontSize.sm,
                  fontWeight: typography.fontWeight.semibold,
                  color: colors.foreground,
                  marginBottom: spacing[1],
                }}
              >
                Successfully saved
              </p>
              <p
                style={{
                  fontSize: typography.fontSize.sm,
                  color: colors.mutedForeground,
                  lineHeight: typography.lineHeight.snug,
                }}
              >
                Your changes have been saved to the cloud.
              </p>
            </div>
            <button
              type="button"
              style={{
                background: 'none',
                border: 'none',
                color: colors.mutedForeground,
                cursor: 'pointer',
                padding: spacing[1],
              }}
              aria-label="Dismiss"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 4l8 8m0-8l-8 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Error Toast */}
          <div
            style={{
              minWidth: '320px',
              maxWidth: '400px',
              padding: spacing[4],
              borderRadius: borderRadius.lg,
              backgroundColor: colors.card,
              border: `1px solid ${colors.border}`,
              boxShadow: shadows.lg,
              display: 'flex',
              gap: spacing[3],
              alignItems: 'start',
            }}
            role="alert"
            aria-live="assertive"
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: borderRadius.full,
                backgroundColor: `${colors.error}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  stroke={colors.error}
                  strokeWidth="2"
                />
                <path
                  d="M6 6l8 8m0-8l-8 8"
                  stroke={colors.error}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontSize: typography.fontSize.sm,
                  fontWeight: typography.fontWeight.semibold,
                  color: colors.foreground,
                  marginBottom: spacing[1],
                }}
              >
                Upload failed
              </p>
              <p
                style={{
                  fontSize: typography.fontSize.sm,
                  color: colors.mutedForeground,
                  lineHeight: typography.lineHeight.snug,
                  marginBottom: spacing[2],
                }}
              >
                File size exceeds the 10MB limit.
              </p>
              <button
                type="button"
                style={{
                  fontSize: typography.fontSize.sm,
                  fontWeight: typography.fontWeight.medium,
                  color: colors.error,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                Try again
              </button>
            </div>
          </div>

          {/* Loading Toast */}
          <div
            style={{
              minWidth: '320px',
              maxWidth: '400px',
              padding: spacing[4],
              borderRadius: borderRadius.lg,
              backgroundColor: colors.card,
              border: `1px solid ${colors.border}`,
              boxShadow: shadows.lg,
              display: 'flex',
              gap: spacing[3],
              alignItems: 'center',
            }}
            role="status"
            aria-live="polite"
          >
            <div
              style={{
                width: '20px',
                height: '20px',
                border: `2px solid ${colors.muted}`,
                borderTopColor: colors.primary,
                borderRadius: borderRadius.full,
                animation: 'spin 1s linear infinite',
                flexShrink: 0,
              }}
            />
            <p
              style={{
                fontSize: typography.fontSize.sm,
                color: colors.foreground,
                fontWeight: typography.fontWeight.medium,
              }}
            >
              Uploading files...
            </p>
          </div>

          {/* Simple Toast */}
          <div
            style={{
              minWidth: '280px',
              padding: `${spacing[3]} ${spacing[4]}`,
              borderRadius: borderRadius.lg,
              backgroundColor: colors.foreground,
              color: colors.background,
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.medium,
              boxShadow: shadows.md,
            }}
            role="status"
          >
            Message sent successfully
          </div>
        </div>

        {/* Toast with Action */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              minWidth: '400px',
              padding: spacing[4],
              borderRadius: borderRadius.lg,
              backgroundColor: colors.card,
              border: `1px solid ${colors.border}`,
              boxShadow: shadows.lg,
              display: 'flex',
              gap: spacing[3],
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            role="status"
          >
            <p
              style={{
                fontSize: typography.fontSize.sm,
                color: colors.foreground,
              }}
            >
              Your file has been deleted.
            </p>
            <button
              type="button"
              style={{
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.semibold,
                color: colors.primary,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: `${spacing[2]} ${spacing[3]}`,
                borderRadius: borderRadius.md,
              }}
            >
              Undo
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
