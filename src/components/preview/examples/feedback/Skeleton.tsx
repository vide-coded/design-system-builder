import { useStore } from '@tanstack/react-store'
import { designSystemStore } from '@/stores/design-system.store'

export function Skeleton() {
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
        Skeleton Loaders
      </h3>
      <p
        style={{
          fontSize: typography.fontSize.sm,
          color: colors.mutedForeground,
          marginBottom: spacing[6],
        }}
      >
        Content placeholders while loading
      </p>

      <div
        style={{ display: 'flex', flexDirection: 'column', gap: spacing[8] }}
      >
        {/* Card Skeleton */}
        <div>
          <h4
            style={{
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[4],
            }}
          >
            Card Skeleton
          </h4>
          <div
            style={{
              padding: spacing[6],
              borderRadius: borderRadius.lg,
              border: `1px solid ${colors.border}`,
              backgroundColor: colors.card,
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: spacing[4],
                marginBottom: spacing[4],
              }}
            >
              <div
                className="skeleton"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: borderRadius.full,
                  backgroundColor: colors.muted,
                }}
              />
              <div style={{ flex: 1 }}>
                <div
                  className="skeleton"
                  style={{
                    width: '60%',
                    height: '16px',
                    borderRadius: borderRadius.md,
                    backgroundColor: colors.muted,
                    marginBottom: spacing[2],
                  }}
                />
                <div
                  className="skeleton"
                  style={{
                    width: '40%',
                    height: '14px',
                    borderRadius: borderRadius.md,
                    backgroundColor: colors.muted,
                  }}
                />
              </div>
            </div>
            <div
              className="skeleton"
              style={{
                width: '100%',
                height: '100px',
                borderRadius: borderRadius.md,
                backgroundColor: colors.muted,
                marginBottom: spacing[3],
              }}
            />
            <div
              className="skeleton"
              style={{
                width: '100%',
                height: '12px',
                borderRadius: borderRadius.md,
                backgroundColor: colors.muted,
                marginBottom: spacing[2],
              }}
            />
            <div
              className="skeleton"
              style={{
                width: '90%',
                height: '12px',
                borderRadius: borderRadius.md,
                backgroundColor: colors.muted,
                marginBottom: spacing[2],
              }}
            />
            <div
              className="skeleton"
              style={{
                width: '70%',
                height: '12px',
                borderRadius: borderRadius.md,
                backgroundColor: colors.muted,
              }}
            />
          </div>
        </div>

        {/* List Skeleton */}
        <div>
          <h4
            style={{
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[4],
            }}
          >
            List Skeleton
          </h4>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: spacing[3],
            }}
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: spacing[3],
                  padding: spacing[4],
                  borderRadius: borderRadius.lg,
                  border: `1px solid ${colors.border}`,
                  backgroundColor: colors.card,
                  alignItems: 'center',
                }}
              >
                <div
                  className="skeleton"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: borderRadius.full,
                    backgroundColor: colors.muted,
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    className="skeleton"
                    style={{
                      width: '70%',
                      height: '14px',
                      borderRadius: borderRadius.md,
                      backgroundColor: colors.muted,
                      marginBottom: spacing[2],
                    }}
                  />
                  <div
                    className="skeleton"
                    style={{
                      width: '50%',
                      height: '12px',
                      borderRadius: borderRadius.md,
                      backgroundColor: colors.muted,
                    }}
                  />
                </div>
                <div
                  className="skeleton"
                  style={{
                    width: '80px',
                    height: '32px',
                    borderRadius: borderRadius.md,
                    backgroundColor: colors.muted,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Text Skeleton */}
        <div>
          <h4
            style={{
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[4],
            }}
          >
            Text Skeleton
          </h4>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: spacing[2],
            }}
          >
            <div
              className="skeleton"
              style={{
                width: '100%',
                height: '16px',
                borderRadius: borderRadius.md,
                backgroundColor: colors.muted,
              }}
            />
            <div
              className="skeleton"
              style={{
                width: '95%',
                height: '16px',
                borderRadius: borderRadius.md,
                backgroundColor: colors.muted,
              }}
            />
            <div
              className="skeleton"
              style={{
                width: '90%',
                height: '16px',
                borderRadius: borderRadius.md,
                backgroundColor: colors.muted,
              }}
            />
            <div
              className="skeleton"
              style={{
                width: '75%',
                height: '16px',
                borderRadius: borderRadius.md,
                backgroundColor: colors.muted,
              }}
            />
          </div>
        </div>

        {/* Image Grid Skeleton */}
        <div>
          <h4
            style={{
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[4],
            }}
          >
            Image Grid Skeleton
          </h4>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: spacing[4],
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i}>
                <div
                  className="skeleton"
                  style={{
                    width: '100%',
                    aspectRatio: '1',
                    borderRadius: borderRadius.lg,
                    backgroundColor: colors.muted,
                    marginBottom: spacing[2],
                  }}
                />
                <div
                  className="skeleton"
                  style={{
                    width: '80%',
                    height: '12px',
                    borderRadius: borderRadius.md,
                    backgroundColor: colors.muted,
                    marginBottom: spacing[1],
                  }}
                />
                <div
                  className="skeleton"
                  style={{
                    width: '60%',
                    height: '10px',
                    borderRadius: borderRadius.md,
                    backgroundColor: colors.muted,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes skeleton-loading {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .skeleton {
          background: linear-gradient(
            90deg,
            ${colors.muted} 0%,
            ${colors.muted}dd 50%,
            ${colors.muted} 100%
          );
          background-size: 200% 100%;
          animation: skeleton-loading 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
