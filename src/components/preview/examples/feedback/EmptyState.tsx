import { useStore } from '@tanstack/react-store'
import { designSystemStore } from '@/stores/design-system.store'

export function EmptyState() {
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
        Empty States
      </h3>
      <p
        style={{
          fontSize: typography.fontSize.sm,
          color: colors.mutedForeground,
          marginBottom: spacing[6],
        }}
      >
        Helpful messages when there's no content
      </p>

      <div
        style={{ display: 'flex', flexDirection: 'column', gap: spacing[8] }}
      >
        {/* Basic Empty State */}
        <div
          style={{
            padding: spacing[12],
            borderRadius: borderRadius.lg,
            border: `2px dashed ${colors.border}`,
            backgroundColor: colors.muted,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: borderRadius.full,
              backgroundColor: colors.card,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: `0 auto ${spacing[4]}`,
            }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M8 20h16M8 14h16M8 26h8M4 8h24v20H4V8z"
                stroke={colors.mutedForeground}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h4
            style={{
              fontSize: typography.fontSize.lg,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[2],
            }}
          >
            No items yet
          </h4>
          <p
            style={{
              fontSize: typography.fontSize.sm,
              color: colors.mutedForeground,
              marginBottom: spacing[4],
              maxWidth: '400px',
              margin: `0 auto ${spacing[4]}`,
            }}
          >
            Get started by creating your first item.
          </p>
          <button
            type="button"
            style={{
              padding: `${spacing[2]} ${spacing[4]}`,
              borderRadius: borderRadius.md,
              backgroundColor: colors.primary[500],
              color: '#ffffff',
              border: 'none',
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.medium,
              cursor: 'pointer',
            }}
          >
            Create item
          </button>
        </div>

        {/* Search Empty State */}
        <div
          style={{
            padding: spacing[12],
            borderRadius: borderRadius.lg,
            border: `1px solid ${colors.border}`,
            backgroundColor: colors.card,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: borderRadius.full,
              backgroundColor: `${colors.primary[500]}10`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: `0 auto ${spacing[4]}`,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle
                cx="17"
                cy="17"
                r="10"
                stroke={colors.primary[500]}
                strokeWidth="2.5"
              />
              <path
                d="M24 24l8 8"
                stroke={colors.primary[500]}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h4
            style={{
              fontSize: typography.fontSize.lg,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[2],
            }}
          >
            No results found
          </h4>
          <p
            style={{
              fontSize: typography.fontSize.sm,
              color: colors.mutedForeground,
              marginBottom: spacing[4],
              maxWidth: '400px',
              margin: `0 auto ${spacing[4]}`,
            }}
          >
            We couldn't find any matches for "React components". Try adjusting
            your search.
          </p>
          <div
            style={{
              display: 'flex',
              gap: spacing[2],
              justifyContent: 'center',
            }}
          >
            <button
              type="button"
              style={{
                padding: `${spacing[2]} ${spacing[4]}`,
                borderRadius: borderRadius.md,
                backgroundColor: 'transparent',
                color: colors.foreground,
                border: `1px solid ${colors.border}`,
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.medium,
                cursor: 'pointer',
              }}
            >
              Clear search
            </button>
            <button
              type="button"
              style={{
                padding: `${spacing[2]} ${spacing[4]}`,
                borderRadius: borderRadius.md,
                backgroundColor: colors.primary[500],
                color: '#ffffff',
                border: 'none',
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.medium,
                cursor: 'pointer',
              }}
            >
              Browse all
            </button>
          </div>
        </div>

        {/* Error Empty State */}
        <div
          style={{
            padding: spacing[12],
            borderRadius: borderRadius.lg,
            border: `1px solid ${colors.error[500]}30`,
            backgroundColor: `${colors.error[500]}10`,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: borderRadius.full,
              backgroundColor: `${colors.error[500]}20`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: `0 auto ${spacing[4]}`,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle
                cx="20"
                cy="20"
                r="16"
                stroke={colors.error[500]}
                strokeWidth="2.5"
              />
              <path
                d="M20 12v10m0 4v2"
                stroke={colors.error[500]}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h4
            style={{
              fontSize: typography.fontSize.lg,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[2],
            }}
          >
            Something went wrong
          </h4>
          <p
            style={{
              fontSize: typography.fontSize.sm,
              color: colors.mutedForeground,
              marginBottom: spacing[4],
              maxWidth: '400px',
              margin: `0 auto ${spacing[4]}`,
            }}
          >
            We encountered an error while loading your data. Please try again.
          </p>
          <button
            type="button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: spacing[2],
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
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M13 8a5 5 0 11-10 0 5 5 0 0110 0z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M8 5v3l2 2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Retry
          </button>
        </div>

        {/* Inbox Zero Empty State */}
        <div
          style={{
            padding: spacing[16],
            borderRadius: borderRadius.lg,
            border: `1px solid ${colors.border}`,
            backgroundColor: colors.card,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: borderRadius.full,
              backgroundColor: `${colors.success[500]}10`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: `0 auto ${spacing[6]}`,
            }}
          >
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <path
                d="M12 22l20 14 20-14M12 22v24h40V22M12 22h40"
                stroke={colors.success[500]}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="48" cy="16" r="12" fill={colors.success[500]} />
              <path
                d="M44 16l3 3 5-6"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h4
            style={{
              fontSize: typography.fontSize['2xl'],
              fontWeight: typography.fontWeight.bold,
              color: colors.foreground,
              marginBottom: spacing[3],
            }}
          >
            You're all caught up!
          </h4>
          <p
            style={{
              fontSize: typography.fontSize.base,
              color: colors.mutedForeground,
              maxWidth: '500px',
              margin: `0 auto`,
            }}
          >
            Great job! You've read all your messages. Take a break or explore
            other sections.
          </p>
        </div>
      </div>
    </div>
  )
}
