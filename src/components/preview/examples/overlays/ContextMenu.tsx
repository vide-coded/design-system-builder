import {
  ClipboardPaste,
  Copy,
  Download,
  Edit,
  Scissors,
  Share2,
  Trash2,
} from 'lucide-react'
import { Separator } from '@/components/ui/separator'

/**
 * Context menu examples demonstrating right-click menu patterns with design tokens.
 * Showcases various context menu use cases for different content types.
 */
export function ContextMenu() {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <div className="space-y-8">
      {/* Text Context Menu */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Text Context Menu
        </h3>
        <div
          className="p-6 border border-border rounded-md bg-card relative group"
          onContextMenu={handleContextMenu}
        >
          <p className="text-sm text-muted-foreground">
            Right-click on this text to see the context menu. This demonstrates
            typical text editing operations.
          </p>
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-48 rounded-md shadow-lg bg-popover border border-border">
              <div className="py-1">
                <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                  <span className="ml-auto text-xs text-muted-foreground">
                    ⌘C
                  </span>
                </button>
                <button
                  type="button"
                  className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors"
                >
                  <Scissors className="w-4 h-4 mr-2" />
                  Cut
                  <span className="ml-auto text-xs text-muted-foreground">
                    ⌘X
                  </span>
                </button>
                <button
                  type="button"
                  className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors"
                >
                  <ClipboardPaste className="w-4 h-4 mr-2" />
                  Paste
                  <span className="ml-auto text-xs text-muted-foreground">
                    ⌘V
                  </span>
                </button>
                <Separator className="my-1" />
                <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors">
                  Select All
                  <span className="ml-auto text-xs text-muted-foreground">
                    ⌘A
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* File Context Menu */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          File Context Menu
        </h3>
        <div
          className="p-6 border border-border rounded-md bg-card relative group"
          onContextMenu={handleContextMenu}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-muted flex items-center justify-center">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium">document.pdf</p>
              <p className="text-xs text-muted-foreground">2.4 MB</p>
            </div>
          </div>
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-48 rounded-md shadow-lg bg-popover border border-border">
              <div className="py-1">
                <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
                <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
                <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors">
                  <Edit className="w-4 h-4 mr-2" />
                  Rename
                </button>
                <Separator className="my-1" />
                <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors text-destructive">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Context Menu */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Card Context Menu
        </h3>
        <div
          className="p-6 border border-border rounded-md bg-card relative group"
          onContextMenu={handleContextMenu}
        >
          <div className="space-y-2">
            <h4 className="font-semibold">Project Alpha</h4>
            <p className="text-sm text-muted-foreground">
              Active project with 5 team members
            </p>
            <div className="flex gap-2 mt-3">
              <span className="px-2 py-1 rounded-md bg-muted text-xs">
                In Progress
              </span>
              <span className="px-2 py-1 rounded-md bg-muted text-xs">
                High Priority
              </span>
            </div>
          </div>
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-48 rounded-md shadow-lg bg-popover border border-border">
              <div className="py-1">
                <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Project
                </button>
                <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors">
                  <Copy className="w-4 h-4 mr-2" />
                  Duplicate
                </button>
                <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
                <Separator className="my-1" />
                <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors">
                  Archive
                </button>
                <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors text-destructive">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="p-4 rounded-md bg-muted/50 border border-border">
        <p className="text-xs text-muted-foreground">
          💡 <strong>Tip:</strong> In a real implementation, these context menus
          would appear on right-click. Here they show on hover for demonstration
          purposes.
        </p>
      </div>
    </div>
  )
}
