import { useStore } from '@tanstack/react-store'
import { getColorValue } from '@/lib/utils/color-helpers'
import { designSystemStore } from '@/stores/design-system.store'

export function Badge() {
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
        Badge Components
      </h3>
      <p
        style={{
          fontSize: typography.fontSize.sm,
          color: colors.mutedForeground,
          marginBottom: spacing[6],
        }}
      >
        Status indicators and labels
      </p>

      <div
        style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}
      >
        {/* Semantic Badges */}
        <div>
          <h4
            style={{
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[3],
            }}
          >
            Semantic Status
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing[3] }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: spacing[2],
                padding: `${spacing[1]} ${spacing[3]}`,
                borderRadius: borderRadius.full,
                backgroundColor: `${getColorValue(colors.success)}20`,
                color: getColorValue(colors.success),
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.medium,
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: borderRadius.full,
                  backgroundColor: getColorValue(colors.success),
                }}
              />
              Active
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: spacing[2],
                padding: `${spacing[1]} ${spacing[3]}`,
                borderRadius: borderRadius.full,
                backgroundColor: `${getColorValue(colors.warning)}20`,
                color: getColorValue(colors.warning),
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.medium,
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: borderRadius.full,
                  backgroundColor: getColorValue(colors.warning),
                }}
              />
              Pending
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: spacing[2],
                padding: `${spacing[1]} ${spacing[3]}`,
                borderRadius: borderRadius.full,
                backgroundColor: `${getColorValue(colors.error)}20`,
                color: getColorValue(colors.error),
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.medium,
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: borderRadius.full,
                  backgroundColor: getColorValue(colors.error),
                }}
              />
              Inactive
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: spacing[2],
                padding: `${spacing[1]} ${spacing[3]}`,
                borderRadius: borderRadius.full,
                backgroundColor: `${getColorValue(colors.info)}20`,
                color: getColorValue(colors.info),
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.medium,
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: borderRadius.full,
                  backgroundColor: getColorValue(colors.info),
                }}
              />
              Draft
            </span>
          </div>
        </div>

        {/* Solid Badges */}
        <div>
          <h4
            style={{
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[3],
            }}
          >
            Solid Variants
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing[3] }}>
            <span
              style={{
                padding: `${spacing[1]} ${spacing[3]}`,
                borderRadius: borderRadius.full,
                backgroundColor: getColorValue(colors.primary),
                color: colors.foreground,
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.semibold,
              }}
            >
              Primary
            </span>
            <span
              style={{
                padding: `${spacing[1]} ${spacing[3]}`,
                borderRadius: borderRadius.full,
                backgroundColor: getColorValue(colors.secondary),
                color: colors.foreground,
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.semibold,
              }}
            >
              Secondary
            </span>
            <span
              style={{
                padding: `${spacing[1]} ${spacing[3]}`,
                borderRadius: borderRadius.full,
                backgroundColor: getColorValue(colors.success),
                color: '#ffffff',
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.semibold,
              }}
            >
              Success
            </span>
            <span
              style={{
                padding: `${spacing[1]} ${spacing[3]}`,
                borderRadius: borderRadius.full,
                backgroundColor: getColorValue(colors.error),
                color: '#ffffff',
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.semibold,
              }}
            >
              Error
            </span>
          </div>
        </div>

        {/* Outline Badges */}
        <div>
          <h4
            style={{
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[3],
            }}
          >
            Outline Variants
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing[3] }}>
            <span
              style={{
                padding: `${spacing[1]} ${spacing[3]}`,
                borderRadius: borderRadius.full,
                backgroundColor: colors.background,
                border: `1px solid ${getColorValue(colors.primary)}`,
                color: getColorValue(colors.primary),
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.medium,
              }}
            >
              Primary
            </span>
            <span
              style={{
                padding: `${spacing[1]} ${spacing[3]}`,
                borderRadius: borderRadius.full,
                backgroundColor: colors.background,
                border: `1px solid ${colors.border}`,
                color: colors.foreground,
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.medium,
              }}
            >
              Default
            </span>
            <span
              style={{
                padding: `${spacing[1]} ${spacing[3]}`,
                borderRadius: borderRadius.full,
                backgroundColor: colors.background,
                border: `1px solid ${getColorValue(colors.success)}`,
                color: getColorValue(colors.success),
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.medium,
              }}
            >
              Success
            </span>
          </div>
        </div>

        {/* Size Variants */}
        <div>
          <h4
            style={{
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[3],
            }}
          >
            Size Variants
          </h4>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: spacing[3],
              alignItems: 'center',
            }}
          >
            <span
              style={{
                padding: `${spacing[0.5]} ${spacing[2]}`,
                borderRadius: borderRadius.full,
                backgroundColor: colors.muted,
                color: colors.mutedForeground,
                fontSize: typography.fontSize.xs,
                fontWeight: typography.fontWeight.medium,
              }}
            >
              Small
            </span>
            <span
              style={{
                padding: `${spacing[1]} ${spacing[3]}`,
                borderRadius: borderRadius.full,
                backgroundColor: colors.muted,
                color: colors.mutedForeground,
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.medium,
              }}
            >
              Medium
            </span>
            <span
              style={{
                padding: `${spacing[2]} ${spacing[4]}`,
                borderRadius: borderRadius.full,
                backgroundColor: colors.muted,
                color: colors.mutedForeground,
                fontSize: typography.fontSize.base,
                fontWeight: typography.fontWeight.medium,
              }}
            >
              Large
            </span>
          </div>
        </div>

        {/* Badges with Icons */}
        <div>
          <h4
            style={{
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[3],
            }}
          >
            With Icons
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing[3] }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: spacing[1.5],
                padding: `${spacing[1]} ${spacing[3]}`,
                borderRadius: borderRadius.full,
                backgroundColor: getColorValue(colors.primary),
                color: colors.foreground,
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.semibold,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1l1.545 4.755h5l-4.045 2.94 1.545 4.755L7 10.51l-4.045 2.94 1.545-4.755L.455 5.755h5L7 1z"
                  fill="currentColor"
                />
              </svg>
              Featured
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: spacing[1.5],
                padding: `${spacing[1]} ${spacing[3]}`,
                borderRadius: borderRadius.full,
                backgroundColor: `${getColorValue(colors.success)}20`,
                color: getColorValue(colors.success),
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.medium,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7l3 3 5-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Verified
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: spacing[1.5],
                padding: `${spacing[1]} ${spacing[3]}`,
                borderRadius: borderRadius.full,
                backgroundColor: colors.muted,
                color: colors.mutedForeground,
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.medium,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle
                  cx="7"
                  cy="7"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M7 4v3l2 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Scheduled
            </span>
          </div>
        </div>

        {/* Badge with Close Button */}
        <div>
          <h4
            style={{
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[3],
            }}
          >
            Removable Badges
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing[2] }}>
            {['React', 'TypeScript', 'Tailwind', 'Vite'].map((tag) => (
              <span
                key={tag}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: spacing[2],
                  padding: `${spacing[1]} ${spacing[2]} ${spacing[1]} ${spacing[3]}`,
                  borderRadius: borderRadius.full,
                  backgroundColor: colors.muted,
                  color: colors.foreground,
                  fontSize: typography.fontSize.sm,
                  fontWeight: typography.fontWeight.medium,
                }}
              >
                {tag}
                <button
                  type="button"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: colors.mutedForeground,
                    cursor: 'pointer',
                    padding: spacing[1],
                    display: 'flex',
                    borderRadius: borderRadius.full,
                  }}
                  aria-label={`Remove ${tag}`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M3 3l6 6m0-6l-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Badge with Count */}
        <div>
          <h4
            style={{
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[3],
            }}
          >
            Notification Badges
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing[4] }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <button
                type="button"
                style={{
                  padding: spacing[3],
                  borderRadius: borderRadius.md,
                  border: `1px solid ${colors.border}`,
                  background: colors.card,
                  cursor: 'pointer',
                }}
                aria-label="Messages"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    stroke={colors.foreground}
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <span
                style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '-6px',
                  padding: `${spacing[0.5]} ${spacing[1.5]}`,
                  borderRadius: borderRadius.full,
                  backgroundColor: getColorValue(colors.error),
                  color: '#ffffff',
                  fontSize: typography.fontSize.xs,
                  fontWeight: typography.fontWeight.bold,
                  minWidth: '20px',
                  textAlign: 'center',
                }}
              >
                3
              </span>
            </div>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <button
                type="button"
                style={{
                  padding: spacing[3],
                  borderRadius: borderRadius.md,
                  border: `1px solid ${colors.border}`,
                  background: colors.card,
                  cursor: 'pointer',
                }}
                aria-label="Notifications"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 2a6 6 0 016 6v2l2 3H2l2-3V8a6 6 0 016-6zm0 14a2 2 0 01-2-2h4a2 2 0 01-2 2z"
                    stroke={colors.foreground}
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <span
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  width: '12px',
                  height: '12px',
                  borderRadius: borderRadius.full,
                  backgroundColor: getColorValue(colors.error),
                  border: `2px solid ${colors.card}`,
                }}
                aria-label="Has new notifications"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
