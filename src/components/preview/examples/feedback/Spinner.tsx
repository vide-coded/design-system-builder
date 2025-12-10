import { useStore } from '@tanstack/react-store'
import { designSystemStore } from '@/stores/design-system.store'

export function Spinner() {
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
        Loading Spinners
      </h3>
      <p
        style={{
          fontSize: typography.fontSize.sm,
          color: colors.mutedForeground,
          marginBottom: spacing[6],
        }}
      >
        Various loading spinner styles
      </p>

      <div
        style={{ display: 'flex', flexDirection: 'column', gap: spacing[8] }}
      >
        {/* Circular Spinners */}
        <div>
          <h4
            style={{
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[4],
            }}
          >
            Circular Spinners
          </h4>
          <div
            style={{
              display: 'flex',
              gap: spacing[6],
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {/* Small */}
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  border: `2px solid ${colors.muted}`,
                  borderTopColor: colors.primary[500],
                  borderRadius: borderRadius.full,
                  animation: 'spin 0.8s linear infinite',
                  marginBottom: spacing[2],
                }}
                role="status"
                aria-label="Loading"
              />
              <span
                style={{
                  fontSize: typography.fontSize.xs,
                  color: colors.mutedForeground,
                }}
              >
                Small
              </span>
            </div>

            {/* Medium */}
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  border: `3px solid ${colors.muted}`,
                  borderTopColor: colors.primary[500],
                  borderRadius: borderRadius.full,
                  animation: 'spin 0.8s linear infinite',
                  marginBottom: spacing[2],
                }}
                role="status"
                aria-label="Loading"
              />
              <span
                style={{
                  fontSize: typography.fontSize.xs,
                  color: colors.mutedForeground,
                }}
              >
                Medium
              </span>
            </div>

            {/* Large */}
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  border: `4px solid ${colors.muted}`,
                  borderTopColor: colors.primary[500],
                  borderRadius: borderRadius.full,
                  animation: 'spin 0.8s linear infinite',
                  marginBottom: spacing[2],
                }}
                role="status"
                aria-label="Loading"
              />
              <span
                style={{
                  fontSize: typography.fontSize.xs,
                  color: colors.mutedForeground,
                }}
              >
                Large
              </span>
            </div>
          </div>
        </div>

        {/* Dots Spinner */}
        <div>
          <h4
            style={{
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[4],
            }}
          >
            Dots Spinner
          </h4>
          <div
            style={{
              display: 'flex',
              gap: spacing[6],
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{ display: 'flex', gap: spacing[2], alignItems: 'center' }}
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: borderRadius.full,
                    backgroundColor: colors.primary[500],
                    animation: `bounce 1.4s ease-in-out ${i * 0.16}s infinite`,
                  }}
                />
              ))}
            </div>
            <span
              style={{
                fontSize: typography.fontSize.sm,
                color: colors.mutedForeground,
              }}
            >
              Loading...
            </span>
          </div>
        </div>

        {/* Pulse Spinner */}
        <div>
          <h4
            style={{
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[4],
            }}
          >
            Pulse Spinner
          </h4>
          <div
            style={{ display: 'flex', gap: spacing[6], alignItems: 'center' }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: borderRadius.full,
                backgroundColor: colors.primary[500],
                animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              }}
              role="status"
              aria-label="Loading"
            />
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: borderRadius.lg,
                backgroundColor: colors.primary[500],
                animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              }}
              role="status"
              aria-label="Loading"
            />
          </div>
        </div>

        {/* Ring Spinner */}
        <div>
          <h4
            style={{
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[4],
            }}
          >
            Ring Spinner
          </h4>
          <div
            style={{ display: 'flex', gap: spacing[6], alignItems: 'center' }}
          >
            <div
              style={{ position: 'relative', width: '48px', height: '48px' }}
            >
              <div
                style={{
                  position: 'absolute',
                  width: '48px',
                  height: '48px',
                  border: `4px solid ${colors.muted}`,
                  borderTopColor: colors.primary[500],
                  borderRadius: borderRadius.full,
                  animation: 'spin 1.2s linear infinite',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  width: '48px',
                  height: '48px',
                  border: `4px solid transparent`,
                  borderBottomColor: colors.primary[500],
                  borderRadius: borderRadius.full,
                  animation: 'spin-reverse 0.8s linear infinite',
                }}
              />
            </div>
          </div>
        </div>

        {/* Button with Spinner */}
        <div>
          <h4
            style={{
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[4],
            }}
          >
            Button Loading States
          </h4>
          <div style={{ display: 'flex', gap: spacing[3], flexWrap: 'wrap' }}>
            <button
              type="button"
              disabled
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing[2],
                padding: `${spacing[2]} ${spacing[4]}`,
                borderRadius: borderRadius.md,
                backgroundColor: colors.primary[500],
                color: '#ffffff',
                border: 'none',
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.medium,
                opacity: 0.7,
                cursor: 'not-allowed',
              }}
            >
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  border: '2px solid #ffffff80',
                  borderTopColor: '#ffffff',
                  borderRadius: borderRadius.full,
                  animation: 'spin 0.8s linear infinite',
                }}
              />
              Loading...
            </button>

            <button
              type="button"
              disabled
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing[2],
                padding: `${spacing[2]} ${spacing[4]}`,
                borderRadius: borderRadius.md,
                backgroundColor: colors.card,
                color: colors.foreground,
                border: `1px solid ${colors.border}`,
                fontSize: typography.fontSize.sm,
                fontWeight: typography.fontWeight.medium,
                opacity: 0.7,
                cursor: 'not-allowed',
              }}
            >
              Processing
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: borderRadius.full,
                    backgroundColor: colors.foreground,
                    animation: `bounce 1.4s ease-in-out ${i * 0.16}s infinite`,
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
          40% { transform: scale(1); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  )
}
