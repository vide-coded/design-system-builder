/**
 * LoadingButton - Demonstrates loading states for async actions
 *
 * Showcases:
 * - Spinner animation using design system timing
 * - Disabled state during loading
 * - Text replacement patterns
 * - Different loading indicator styles
 * - Loading with and without text
 */

import { useState } from 'react'

export function LoadingButton() {
  const [isLoading1, setIsLoading1] = useState(false)
  const [isLoading2, setIsLoading2] = useState(false)
  const [isLoading3, setIsLoading3] = useState(false)
  const [isLoading4, setIsLoading4] = useState(false)

  const simulateAsync = (setter: (val: boolean) => void) => {
    setter(true)
    setTimeout(() => setter(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Loading with Spinner</h3>
        <button
          className="btn btn-primary"
          onClick={() => simulateAsync(setIsLoading1)}
          disabled={isLoading1}
        >
          {isLoading1 ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading...
            </>
          ) : (
            'Submit Form'
          )}
        </button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          Loading with Dots Animation
        </h3>
        <button
          className="btn btn-secondary"
          onClick={() => simulateAsync(setIsLoading2)}
          disabled={isLoading2}
        >
          {isLoading2 ? (
            <span className="flex items-center">
              Processing
              <span className="ml-1 flex space-x-1">
                <span
                  className="animate-bounce"
                  style={{ animationDelay: '0ms' }}
                >
                  .
                </span>
                <span
                  className="animate-bounce"
                  style={{ animationDelay: '150ms' }}
                >
                  .
                </span>
                <span
                  className="animate-bounce"
                  style={{ animationDelay: '300ms' }}
                >
                  .
                </span>
              </span>
            </span>
          ) : (
            'Save Changes'
          )}
        </button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Loading with Progress</h3>
        <button
          className="btn btn-outline"
          onClick={() => simulateAsync(setIsLoading3)}
          disabled={isLoading3}
        >
          {isLoading3 ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Uploading...
            </>
          ) : (
            <>
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              Upload File
            </>
          )}
        </button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Icon Only Loading</h3>
        <button
          className="btn btn-primary p-2.5"
          onClick={() => simulateAsync(setIsLoading4)}
          disabled={isLoading4}
          aria-label={isLoading4 ? 'Loading' : 'Refresh'}
        >
          {isLoading4 ? (
            <svg
              className="animate-spin h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          )}
        </button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">All States Together</h3>
        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary" disabled>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading
          </button>
          <button className="btn btn-secondary" disabled>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing
          </button>
          <button className="btn btn-outline" disabled>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Saving
          </button>
        </div>
      </div>
    </div>
  )
}
