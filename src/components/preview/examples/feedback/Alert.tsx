import { useStore } from '@tanstack/react-store'
import { getColorValue } from '@/lib/utils/color-helpers'
import { designSystemStore } from '@/stores/design-system.store'

export function Alert() {
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
        Alert Components
      </h3>
      <p
        style={{
          fontSize: typography.fontSize.sm,
          color: colors.mutedForeground,
          marginBottom: spacing[6],
        }}
      >
        Status alerts for different feedback scenarios
      </p>

      <div
        style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}
      >
        {/* Info Alert */}
        <div
          style={{
            padding: `${spacing[4]} ${spacing[4]}`,
            borderRadius: borderRadius.lg,
            border: `1px solid ${getColorValue(colors.info)}`,
            backgroundColor: `${getColorValue(colors.info)}15`,
            display: 'flex',
            gap: spacing[3],
            alignItems: 'start',
          }}
          role="alert"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{ flexShrink: 0, marginTop: '2px' }}
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              stroke={getColorValue(colors.info)}
              strokeWidth="2"
            />
            <path
              d="M10 6v4m0 2v2"
              stroke={getColorValue(colors.info)}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.semibold,
                color: getColorValue(colors.info),
                marginBottom: spacing[1],
              }}
            >
              Information
            </p>
            <p
              style={{
                fontSize: typography.fontSize.sm,
                color: colors.foreground,
                lineHeight: typography.lineHeight.relaxed,
              }}
            >
              This is an informational message to keep you updated on your
              progress.
            </p>
          </div>
        </div>

        {/* Success Alert */}
        <div
          style={{
            padding: `${spacing[4]} ${spacing[4]}`,
            borderRadius: borderRadius.lg,
            border: `1px solid ${getColorValue(colors.success)}`,
            backgroundColor: `${getColorValue(colors.success)}15`,
            display: 'flex',
            gap: spacing[3],
            alignItems: 'start',
          }}
          role="alert"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{ flexShrink: 0, marginTop: '2px' }}
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              stroke={getColorValue(colors.success)}
              strokeWidth="2"
            />
            <path
              d="M6 10l3 3 5-6"
              stroke={getColorValue(colors.success)}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.semibold,
                color: getColorValue(colors.success),
                marginBottom: spacing[1],
              }}
            >
              Success
            </p>
            <p
              style={{
                fontSize: typography.fontSize.sm,
                color: colors.foreground,
                lineHeight: typography.lineHeight.relaxed,
              }}
            >
              Your changes have been saved successfully.
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
              borderRadius: borderRadius.sm,
            }}
            aria-label="Dismiss alert"
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

        {/* Warning Alert */}
        <div
          style={{
            padding: `${spacing[4]} ${spacing[4]}`,
            borderRadius: borderRadius.lg,
            border: `1px solid ${getColorValue(colors.warning)}`,
            backgroundColor: `${getColorValue(colors.warning)}15`,
            display: 'flex',
            gap: spacing[3],
            alignItems: 'start',
          }}
          role="alert"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{ flexShrink: 0, marginTop: '2px' }}
          >
            <path
              d="M10 2L2 16h16L10 2z"
              stroke={getColorValue(colors.warning)}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 8v3m0 2v1"
              stroke={getColorValue(colors.warning)}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.semibold,
                color: getColorValue(colors.warning),
                marginBottom: spacing[1],
              }}
            >
              Warning
            </p>
            <p
              style={{
                fontSize: typography.fontSize.sm,
                color: colors.foreground,
                lineHeight: typography.lineHeight.relaxed,
              }}
            >
              Please review your settings before proceeding to avoid potential
              issues.
            </p>
          </div>
        </div>

        {/* Error Alert */}
        <div
          style={{
            padding: `${spacing[4]} ${spacing[4]}`,
            borderRadius: borderRadius.lg,
            border: `1px solid ${getColorValue(colors.error)}`,
            backgroundColor: `${getColorValue(colors.error)}15`,
            display: 'flex',
            gap: spacing[3],
            alignItems: 'start',
          }}
          role="alert"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{ flexShrink: 0, marginTop: '2px' }}
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              stroke={getColorValue(colors.error)}
              strokeWidth="2"
            />
            <path
              d="M6 6l8 8m0-8l-8 8"
              stroke={getColorValue(colors.error)}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.semibold,
                color: getColorValue(colors.error),
                marginBottom: spacing[1],
              }}
            >
              Error
            </p>
            <p
              style={{
                fontSize: typography.fontSize.sm,
                color: colors.foreground,
                lineHeight: typography.lineHeight.relaxed,
                marginBottom: spacing[2],
              }}
            >
              There was an error processing your request. Please try again.
            </p>
            <button
              type="button"
              style={{
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.medium,
                color: getColorValue(colors.error),
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                textDecoration: 'underline',
              }}
            >
              View details →
            </button>
          </div>
        </div>

        {/* Compact Alerts */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacing[2],
            marginTop: spacing[2],
          }}
        >
          <div
            style={{
              padding: `${spacing[2]} ${spacing[3]}`,
              borderRadius: borderRadius.md,
              border: `1px solid ${colors.border}`,
              backgroundColor: colors.muted,
              fontSize: typography.fontSize.sm,
              color: colors.foreground,
            }}
          >
            📢 Compact info alert without icon
          </div>
          <div
            style={{
              padding: `${spacing[2]} ${spacing[3]}`,
              borderRadius: borderRadius.md,
              backgroundColor: getColorValue(colors.primary),
              fontSize: typography.fontSize.sm,
              color: colors.foreground,
              fontWeight: typography.fontWeight.medium,
            }}
          >
            ✨ Primary branded alert
          </div>
        </div>
      </div>
    </div>
  )
}
