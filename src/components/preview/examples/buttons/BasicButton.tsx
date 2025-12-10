/**
 * BasicButton - Demonstrates all button variants with design system tokens
 *
 * Showcases:
 * - Primary, secondary, outline, ghost variants
 * - Hover and active states
 * - Focus ring with design system colors
 * - Proper padding, border radius, and font weight
 */

export function BasicButton() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Primary Button</h3>
        <button className="btn btn-primary">Primary Action</button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Secondary Button</h3>
        <button className="btn btn-secondary">Secondary Action</button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Outline Button</h3>
        <button className="btn btn-outline">Outline Action</button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Ghost Button</h3>
        <button className="btn btn-ghost">Ghost Action</button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Destructive Button</h3>
        <button className="btn btn-destructive">Delete Item</button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Disabled State</h3>
        <button className="btn btn-primary" disabled>
          Disabled Button
        </button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">With Icons</h3>
        <div className="flex gap-3">
          <button className="btn btn-primary">
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            Create New
          </button>
          <button className="btn btn-outline">
            Download
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
