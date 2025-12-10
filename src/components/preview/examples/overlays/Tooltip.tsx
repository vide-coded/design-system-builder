import { AlertCircle, CheckCircle2, HelpCircle, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

/**
 * Tooltip examples demonstrating various tooltip patterns with design tokens.
 * Showcases simple tooltips, icon tooltips, and multi-line tooltips.
 */
export function TooltipExample() {
  return (
    <TooltipProvider>
      <div className="space-y-8">
        {/* Simple Tooltips */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">
            Simple Tooltips
          </h3>
          <div className="flex flex-wrap gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="default">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a simple tooltip</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Top tooltip</Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Tooltip on top</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary">Right tooltip</Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Tooltip on the right</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost">Bottom tooltip</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Tooltip at bottom</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Icon Tooltips */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">
            Icon Tooltips
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-accent transition-colors">
                  <Info className="w-4 h-4 text-muted-foreground" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Additional information</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button className="inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-accent transition-colors">
                  <HelpCircle className="w-4 h-4 text-muted-foreground" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Need help? Click for docs</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button className="inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-accent transition-colors">
                  <AlertCircle className="w-4 h-4 text-warning" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Warning: Check your settings</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button className="inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-accent transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>All systems operational</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Multi-line Tooltips */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">
            Multi-line Tooltips
          </h3>
          <div className="flex flex-wrap gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Rich content</Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <div className="space-y-1">
                  <p className="font-semibold">Keyboard Shortcut</p>
                  <p className="text-xs text-muted-foreground">
                    Press{' '}
                    <kbd className="px-1 py-0.5 text-xs bg-muted rounded">
                      Ctrl
                    </kbd>{' '}
                    +{' '}
                    <kbd className="px-1 py-0.5 text-xs bg-muted rounded">
                      K
                    </kbd>{' '}
                    to open command palette
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Detailed info</Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <div className="space-y-1">
                  <p className="font-semibold text-sm">Feature Details</p>
                  <p className="text-xs text-muted-foreground">
                    This feature allows you to customize your design system
                    tokens in real-time. Changes are reflected immediately in
                    the preview.
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Disabled Element Tooltip */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">
            Disabled Element Tooltip
          </h3>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="inline-block">
                <Button
                  variant="default"
                  disabled
                  className="pointer-events-none"
                >
                  Disabled Button
                </Button>
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>This feature is currently disabled</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  )
}
