import { useStore } from '@tanstack/react-store'
import { useState } from 'react'
import { designSystemStore } from '@/stores/design-system.store'

export function Progress() {
  const colors = useStore(designSystemStore, (state) => state.colors)
  const spacing = useStore(designSystemStore, (state) => state.spacing)
  const borderRadius = useStore(
    designSystemStore,
    (state) => state.borderRadius,
  )
  const typography = useStore(designSystemStore, (state) => state.typography)
  const [value] = useState(65)

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
        Progress Indicators
      </h3>
      <p
        style={{
          fontSize: typography.fontSize.sm,
          color: colors.mutedForeground,
          marginBottom: spacing[6],
        }}
      >
        Progress bars and circular indicators
      </p>

      <div
        style={{ display: 'flex', flexDirection: 'column', gap: spacing[8] }}
      >
        {/* Linear Progress Bars */}
        <div>
          <h4
            style={{
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[4],
            }}
          >
            Linear Progress
          </h4>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: spacing[4],
            }}
          >
            {/* Basic Progress */}
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: spacing[2],
                }}
              >
                <span
                  style={{
                    fontSize: typography.fontSize.sm,
                    color: colors.foreground,
                  }}
                >
                  Progress
                </span>
                <span
                  style={{
                    fontSize: typography.fontSize.sm,
                    color: colors.mutedForeground,
                  }}
                >
                  {value}%
                </span>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: colors.muted,
                  borderRadius: borderRadius.full,
                  overflow: 'hidden',
                }}
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  style={{
                    width: `${value}%`,
                    height: '100%',
                    backgroundColor: colors.primary[500],
                    transition: 'width 0.3s ease',
                  }}
                />
              </div>
            </div>

            {/* Success Progress */}
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: spacing[2],
                }}
              >
                <span
                  style={{
                    fontSize: typography.fontSize.sm,
                    color: colors.foreground,
                  }}
                >
                  Upload complete
                </span>
                <span
                  style={{
                    fontSize: typography.fontSize.sm,
                    color: colors.success[500],
                  }}
                >
                  100%
                </span>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: colors.muted,
                  borderRadius: borderRadius.full,
                  overflow: 'hidden',
                }}
                role="progressbar"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: colors.success[500],
                  }}
                />
              </div>
            </div>

            {/* Striped Progress */}
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: spacing[2],
                }}
              >
                <span
                  style={{
                    fontSize: typography.fontSize.sm,
                    color: colors.foreground,
                  }}
                >
                  Processing...
                </span>
                <span
                  style={{
                    fontSize: typography.fontSize.sm,
                    color: colors.mutedForeground,
                  }}
                >
                  45%
                </span>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '12px',
                  backgroundColor: colors.muted,
                  borderRadius: borderRadius.lg,
                  overflow: 'hidden',
                }}
                role="progressbar"
                aria-valuenow={45}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  style={{
                    width: '45%',
                    height: '100%',
                    backgroundImage: `linear-gradient(
                      45deg,
                      ${colors.primary[600]} 25%,
                      ${colors.primary[500]} 25%,
                      ${colors.primary[500]} 50%,
                      ${colors.primary[600]} 50%,
                      ${colors.primary[600]} 75%,
                      ${colors.primary[500]} 75%,
                      ${colors.primary[500]}
                    )`,
                    backgroundSize: '20px 20px',
                    animation: 'progress-stripes 1s linear infinite',
                  }}
                />
              </div>
            </div>

            {/* Thin Progress */}
            <div>
              <span
                style={{
                  fontSize: typography.fontSize.sm,
                  color: colors.foreground,
                  marginBottom: spacing[2],
                  display: 'block',
                }}
              >
                Page loading
              </span>
              <div
                style={{
                  width: '100%',
                  height: '4px',
                  backgroundColor: colors.muted,
                  borderRadius: borderRadius.full,
                  overflow: 'hidden',
                }}
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  style={{
                    width: '75%',
                    height: '100%',
                    backgroundColor: colors.primary[500],
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Circular Progress */}
        <div>
          <h4
            style={{
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[4],
            }}
          >
            Circular Progress
          </h4>
          <div style={{ display: 'flex', gap: spacing[6], flexWrap: 'wrap' }}>
            {/* Small Circular */}
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  width: '64px',
                  height: '64px',
                  marginBottom: spacing[2],
                }}
              >
                <svg width="64" height="64" viewBox="0 0 64 64">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke={colors.muted}
                    strokeWidth="6"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke={colors.primary[500]}
                    strokeWidth="6"
                    strokeDasharray={`${(65 * 2 * Math.PI * 28) / 100} ${2 * Math.PI * 28}`}
                    strokeDashoffset={2 * Math.PI * 28 * 0.25}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dasharray 0.3s ease' }}
                  />
                  <text
                    x="32"
                    y="32"
                    textAnchor="middle"
                    dy="0.3em"
                    fontSize="14"
                    fontWeight={typography.fontWeight.bold}
                    fill={colors.foreground}
                  >
                    65%
                  </text>
                </svg>
              </div>
              <span
                style={{
                  fontSize: typography.fontSize.sm,
                  color: colors.mutedForeground,
                }}
              >
                Small
              </span>
            </div>

            {/* Medium Circular */}
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  width: '96px',
                  height: '96px',
                  marginBottom: spacing[2],
                }}
              >
                <svg width="96" height="96" viewBox="0 0 96 96">
                  <circle
                    cx="48"
                    cy="48"
                    r="42"
                    fill="none"
                    stroke={colors.muted}
                    strokeWidth="8"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="42"
                    fill="none"
                    stroke={colors.success[500]}
                    strokeWidth="8"
                    strokeDasharray={`${(100 * 2 * Math.PI * 42) / 100} ${2 * Math.PI * 42}`}
                    strokeDashoffset={2 * Math.PI * 42 * 0.25}
                    strokeLinecap="round"
                  />
                  <g>
                    <circle
                      cx="48"
                      cy="48"
                      r="16"
                      fill={`${colors.success[500]}20`}
                    />
                    <svg
                      x="38"
                      y="38"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M5 10l3 3 7-7"
                        stroke={colors.success[500]}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </g>
                </svg>
              </div>
              <span
                style={{
                  fontSize: typography.fontSize.sm,
                  color: colors.mutedForeground,
                }}
              >
                Complete
              </span>
            </div>

            {/* Loading Circular */}
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '96px',
                  height: '96px',
                  marginBottom: spacing[2],
                }}
              >
                <svg width="96" height="96" viewBox="0 0 96 96">
                  <circle
                    cx="48"
                    cy="48"
                    r="42"
                    fill="none"
                    stroke={colors.muted}
                    strokeWidth="8"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="42"
                    fill="none"
                    stroke={colors.primary[500]}
                    strokeWidth="8"
                    strokeDasharray={`${(30 * 2 * Math.PI * 42) / 100} ${2 * Math.PI * 42}`}
                    strokeDashoffset={2 * Math.PI * 42 * 0.25}
                    strokeLinecap="round"
                    style={{
                      animation: 'rotate-progress 1.5s linear infinite',
                    }}
                  />
                </svg>
              </div>
              <span
                style={{
                  fontSize: typography.fontSize.sm,
                  color: colors.mutedForeground,
                }}
              >
                Loading
              </span>
            </div>
          </div>
        </div>

        {/* Multi-step Progress */}
        <div>
          <h4
            style={{
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              color: colors.foreground,
              marginBottom: spacing[4],
            }}
          >
            Multi-Step Progress
          </h4>
          <div
            style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}
          >
            {[1, 2, 3, 4].map((step, index) => (
              <div
                key={step}
                style={{ display: 'flex', alignItems: 'center', flex: 1 }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: borderRadius.full,
                    backgroundColor:
                      index < 2 ? colors.primary[500] : colors.muted,
                    color: index < 2 ? '#ffffff' : colors.mutedForeground,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: typography.fontSize.sm,
                    fontWeight: typography.fontWeight.semibold,
                  }}
                >
                  {index < 2 ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    step
                  )}
                </div>
                {index < 3 && (
                  <div
                    style={{
                      flex: 1,
                      height: '2px',
                      backgroundColor:
                        index < 2 ? colors.primary[500] : colors.muted,
                      marginLeft: spacing[2],
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress-stripes {
          from { background-position: 0 0; }
          to { background-position: 20px 0; }
        }
        @keyframes rotate-progress {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
