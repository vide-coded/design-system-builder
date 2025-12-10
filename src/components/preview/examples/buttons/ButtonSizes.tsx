/**
 * ButtonSizes - Demonstrates responsive button sizing
 *
 * Showcases:
 * - Small, medium, large, extra-large sizes
 * - Consistent padding scale using spacing tokens
 * - Font size adjustments
 * - All variants work at all sizes
 */

export function ButtonSizes() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Size: Small</h3>
        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary btn-sm">Small Primary</button>
          <button className="btn btn-secondary btn-sm">Small Secondary</button>
          <button className="btn btn-outline btn-sm">Small Outline</button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Size: Medium (Default)</h3>
        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary">Medium Primary</button>
          <button className="btn btn-secondary">Medium Secondary</button>
          <button className="btn btn-outline">Medium Outline</button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Size: Large</h3>
        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary btn-lg">Large Primary</button>
          <button className="btn btn-secondary btn-lg">Large Secondary</button>
          <button className="btn btn-outline btn-lg">Large Outline</button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Full Width</h3>
        <button className="btn btn-primary w-full">Full Width Button</button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Icon Only Buttons</h3>
        <div className="flex gap-3">
          <button className="btn btn-primary btn-sm p-2" aria-label="Add">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          <button className="btn btn-primary p-2.5" aria-label="Edit">
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
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button className="btn btn-primary btn-lg p-3" aria-label="Delete">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
