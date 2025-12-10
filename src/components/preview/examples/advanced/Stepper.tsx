/**
 * Multi-step form stepper demonstrating progress indicators and step navigation.
 * Uses design tokens for all styling including steps, connectors, and states.
 */

import { useState } from 'react'

interface Step {
  id: number
  label: string
  description: string
}

const steps: Step[] = [
  { id: 1, label: 'Account', description: 'Create your account' },
  { id: 2, label: 'Profile', description: 'Set up your profile' },
  { id: 3, label: 'Preferences', description: 'Choose your preferences' },
  { id: 4, label: 'Review', description: 'Review and confirm' },
]

export function Stepper() {
  const [currentStep, setCurrentStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCompletedSteps([...completedSteps, currentStep])
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleStepClick = (stepId: number) => {
    if (stepId <= currentStep) {
      setCurrentStep(stepId)
    }
  }

  const isStepComplete = (stepId: number) => completedSteps.includes(stepId)
  const isStepCurrent = (stepId: number) => currentStep === stepId
  const isStepAccessible = (stepId: number) => stepId <= currentStep

  return (
    <div className="space-y-8">
      {/* Horizontal Stepper */}
      <div className="bg-[color:var(--color-card)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-lg)] p-[length:var(--spacing-6)] shadow-[var(--shadow-md)]">
        <div className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)] mb-[length:var(--spacing-6)]">
          Multi-Step Form
        </div>

        {/* Steps */}
        <div className="flex items-center justify-between mb-[length:var(--spacing-8)]">
          {steps.map((step, index) => (
            <div key={step.id} className="flex-1 flex items-center">
              {/* Step */}
              <button
                type="button"
                onClick={() => handleStepClick(step.id)}
                disabled={!isStepAccessible(step.id)}
                className={`
                  flex flex-col items-center gap-[length:var(--spacing-2)]
                  ${isStepAccessible(step.id) ? 'cursor-pointer' : 'cursor-not-allowed'}
                `}
              >
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    text-[length:var(--text-sm)] font-[number:var(--font-weight-semibold)]
                    transition-all duration-[var(--duration-normal)]
                    ${
                      isStepComplete(step.id)
                        ? 'bg-[color:var(--color-success-500)] text-white'
                        : isStepCurrent(step.id)
                          ? 'bg-[color:var(--color-primary-500)] text-white'
                          : isStepAccessible(step.id)
                            ? 'bg-[color:var(--color-muted)] text-[color:var(--color-foreground)]'
                            : 'bg-[color:var(--color-muted)] text-[color:var(--color-muted-foreground)]'
                    }
                  `}
                >
                  {isStepComplete(step.id) ? '✓' : step.id}
                </div>
                <div className="text-center">
                  <div
                    className={`
                      text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)]
                      ${
                        isStepCurrent(step.id)
                          ? 'text-[color:var(--color-foreground)]'
                          : 'text-[color:var(--color-muted-foreground)]'
                      }
                    `}
                  >
                    {step.label}
                  </div>
                  <div className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                    {step.description}
                  </div>
                </div>
              </button>

              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-[2px] mx-[length:var(--spacing-4)] mt-[-40px]">
                  <div
                    className={`
                      h-full transition-all duration-[var(--duration-normal)]
                      ${
                        isStepComplete(step.id)
                          ? 'bg-[color:var(--color-success-500)]'
                          : 'bg-[color:var(--color-border)]'
                      }
                    `}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="bg-[color:var(--color-muted)]/50 rounded-[var(--radius-md)] p-[length:var(--spacing-8)] mb-[length:var(--spacing-6)]">
          <div className="text-center">
            <div className="text-[length:var(--text-2xl)] font-[number:var(--font-weight-bold)] text-[color:var(--color-foreground)] mb-[length:var(--spacing-2)]">
              Step {currentStep}: {steps[currentStep - 1].label}
            </div>
            <div className="text-[length:var(--text-base)] text-[color:var(--color-muted-foreground)] mb-[length:var(--spacing-6)]">
              {steps[currentStep - 1].description}
            </div>
            <div className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
              This is where your form content would go for this step.
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="px-[length:var(--spacing-4)] py-[length:var(--spacing-2)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)] hover:bg-[color:var(--color-muted)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-[var(--duration-fast)]"
          >
            Back
          </button>
          <div className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
            Step {currentStep} of {steps.length}
          </div>
          <button
            type="button"
            onClick={handleNext}
            disabled={currentStep === steps.length}
            className="px-[length:var(--spacing-4)] py-[length:var(--spacing-2)] bg-[color:var(--color-primary-500)] hover:bg-[color:var(--color-primary-600)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-[var(--duration-fast)]"
          >
            {currentStep === steps.length ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>

      {/* Vertical Stepper */}
      <div className="bg-[color:var(--color-card)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-lg)] p-[length:var(--spacing-6)] shadow-[var(--shadow-md)]">
        <div className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)] mb-[length:var(--spacing-6)]">
          Vertical Stepper
        </div>

        <div className="space-y-[length:var(--spacing-4)]">
          {steps.map((step) => (
            <div key={step.id} className="flex gap-[length:var(--spacing-4)]">
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    text-[length:var(--text-xs)] font-[number:var(--font-weight-semibold)]
                    ${
                      isStepComplete(step.id)
                        ? 'bg-[color:var(--color-success-500)] text-white'
                        : isStepCurrent(step.id)
                          ? 'bg-[color:var(--color-primary-500)] text-white'
                          : 'bg-[color:var(--color-muted)] text-[color:var(--color-muted-foreground)]'
                    }
                  `}
                >
                  {isStepComplete(step.id) ? '✓' : step.id}
                </div>
                {step.id < steps.length && (
                  <div
                    className={`
                      w-[2px] flex-1 min-h-[40px]
                      ${
                        isStepComplete(step.id)
                          ? 'bg-[color:var(--color-success-500)]'
                          : 'bg-[color:var(--color-border)]'
                      }
                    `}
                  />
                )}
              </div>
              <div className="flex-1 pb-[length:var(--spacing-4)]">
                <div className="text-[length:var(--text-base)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
                  {step.label}
                </div>
                <div className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)] mt-[length:var(--spacing-1)]">
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const stepperMeta = {
  id: 'stepper',
  name: 'Stepper',
  category: 'advanced' as const,
  description:
    'Multi-step form progress indicator with horizontal and vertical layouts',
  complexity: 'complex' as const,
  tags: ['stepper', 'wizard', 'multi-step', 'progress', 'form'],
  reactive: true,
}
