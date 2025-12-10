/**
 * Steps (Stepper) component for multi-step processes.
 * Shows progress through a sequence of steps in forms or wizards.
 * Uses design tokens for all styling properties.
 */
export function Steps() {
  return (
    <div className="space-y-12">
      {/* Horizontal Steps - Basic */}
      <div>
        <ol className="flex items-center justify-between">
          {/* Step 1 - Complete */}
          <li className="flex-1">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[color:var(--color-success-500)] text-white font-[number:var(--font-weight-semibold)] text-[length:var(--text-sm)]">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <title>Complete</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="flex-1 ml-4">
                <p className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)]">
                  Account Info
                </p>
                <p className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                  Enter your details
                </p>
              </div>
            </div>
          </li>

          {/* Connector */}
          <div className="flex-1 h-[length:var(--border-width)] bg-[color:var(--color-success-500)] mx-2" />

          {/* Step 2 - Current */}
          <li className="flex-1">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[color:var(--color-primary-500)] bg-[color:var(--color-primary-500)] text-white font-[number:var(--font-weight-semibold)] text-[length:var(--text-sm)]">
                2
              </div>
              <div className="flex-1 ml-4">
                <p className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)]">
                  Preferences
                </p>
                <p className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                  Customize settings
                </p>
              </div>
            </div>
          </li>

          {/* Connector */}
          <div className="flex-1 h-[length:var(--border-width)] bg-[color:var(--color-border)] mx-2" />

          {/* Step 3 - Upcoming */}
          <li className="flex-1">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[color:var(--color-border)] bg-[color:var(--color-background)] text-[color:var(--color-muted-foreground)] font-[number:var(--font-weight-semibold)] text-[length:var(--text-sm)]">
                3
              </div>
              <div className="flex-1 ml-4">
                <p className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-muted-foreground)]">
                  Confirmation
                </p>
                <p className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                  Review and confirm
                </p>
              </div>
            </div>
          </li>
        </ol>
      </div>

      {/* Vertical Steps */}
      <div>
        <ol className="space-y-6">
          {/* Step 1 - Complete */}
          <li>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[color:var(--color-success-500)] text-white">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title>Complete</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="w-[length:var(--border-width)] flex-1 bg-[color:var(--color-success-500)] my-2 min-h-[40px]" />
              </div>
              <div className="pb-8">
                <h4 className="text-[length:var(--text-base)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
                  Personal Information
                </h4>
                <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mt-1">
                  Basic details completed successfully
                </p>
              </div>
            </div>
          </li>

          {/* Step 2 - Current */}
          <li>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[color:var(--color-primary-500)] bg-[color:var(--color-primary-500)] text-white text-[length:var(--text-sm)] font-[number:var(--font-weight-semibold)]">
                  2
                </div>
                <div className="w-[length:var(--border-width)] flex-1 bg-[color:var(--color-border)] my-2 min-h-[40px]" />
              </div>
              <div className="pb-8">
                <h4 className="text-[length:var(--text-base)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
                  Payment Method
                </h4>
                <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mt-1">
                  Add your payment information
                </p>
              </div>
            </div>
          </li>

          {/* Step 3 - Upcoming */}
          <li>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[color:var(--color-border)] text-[color:var(--color-muted-foreground)] text-[length:var(--text-sm)] font-[number:var(--font-weight-semibold)]">
                  3
                </div>
              </div>
              <div>
                <h4 className="text-[length:var(--text-base)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-muted-foreground)]">
                  Review
                </h4>
                <p className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mt-1">
                  Confirm your order
                </p>
              </div>
            </div>
          </li>
        </ol>
      </div>

      {/* Compact Steps */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
            Step 2 of 4
          </span>
          <span className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-primary-500)]">
            50% Complete
          </span>
        </div>
        <div className="h-2 bg-[color:var(--color-muted)] rounded-full overflow-hidden">
          <div
            className="h-full bg-[color:var(--color-primary-500)] transition-all duration-[var(--duration-normal)]"
            style={{ width: '50%' }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
            Profile
          </span>
          <span className="text-[length:var(--text-xs)] font-[number:var(--font-weight-medium)] text-[color:var(--color-primary-500)]">
            Settings
          </span>
          <span className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
            Billing
          </span>
          <span className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
            Complete
          </span>
        </div>
      </div>
    </div>
  )
}

export const stepsMeta = {
  id: 'steps',
  name: 'Steps (Stepper)',
  category: 'navigation' as const,
  description:
    'Multi-step process indicators with horizontal, vertical, and compact layouts',
  complexity: 'medium' as const,
  tags: ['navigation', 'stepper', 'steps', 'progress', 'wizard'],
}
