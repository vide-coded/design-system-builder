/**
 * ButtonGroup - Demonstrates grouped button layouts
 *
 * Showcases:
 * - Horizontal button groups with shared borders
 * - Segmented controls (radio-style button groups)
 * - Toolbar-style button groups
 * - Vertical button groups
 * - Split buttons with dropdowns
 */

export function ButtonGroup() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Basic Button Group</h3>
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button className="btn btn-outline rounded-r-none">Left</button>
          <button className="btn btn-outline rounded-none border-l-0">
            Middle
          </button>
          <button className="btn btn-outline rounded-l-none border-l-0">
            Right
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Segmented Control</h3>
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button className="btn btn-primary rounded-r-none">Day</button>
          <button className="btn btn-outline rounded-none border-l-0">
            Week
          </button>
          <button className="btn btn-outline rounded-l-none border-l-0">
            Month
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Icon Button Group</h3>
        <div className="inline-flex rounded-md shadow-sm" role="toolbar">
          <button className="btn btn-outline rounded-r-none" aria-label="Bold">
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
                d="M6 12h.01M12 12h.01M18 12h.01"
              />
            </svg>
          </button>
          <button
            className="btn btn-outline rounded-none border-l-0"
            aria-label="Italic"
          >
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
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </button>
          <button
            className="btn btn-outline rounded-l-none border-l-0"
            aria-label="Underline"
          >
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
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Vertical Button Group</h3>
        <div
          className="inline-flex flex-col rounded-md shadow-sm w-32"
          role="group"
        >
          <button className="btn btn-outline rounded-b-none">Option 1</button>
          <button className="btn btn-outline rounded-none border-t-0">
            Option 2
          </button>
          <button className="btn btn-outline rounded-t-none border-t-0">
            Option 3
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          Split Button with Dropdown
        </h3>
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button className="btn btn-primary rounded-r-none">
            Save Changes
          </button>
          <button
            className="btn btn-primary rounded-l-none border-l border-white/20 px-2"
            aria-label="More options"
          >
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">
          Multiple Groups with Spacing
        </h3>
        <div className="flex flex-wrap gap-3">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button className="btn btn-outline rounded-r-none">Copy</button>
            <button className="btn btn-outline rounded-none border-l-0">
              Cut
            </button>
            <button className="btn btn-outline rounded-l-none border-l-0">
              Paste
            </button>
          </div>

          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button className="btn btn-outline rounded-r-none">Undo</button>
            <button className="btn btn-outline rounded-l-none border-l-0">
              Redo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
