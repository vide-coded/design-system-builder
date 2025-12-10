/**
 * Preview Pane Component
 * Right side preview container for component showcase
 */

import { usePreview } from '@/hooks/use-ui'
import { cn } from '@/lib/utils'

interface PreviewPaneProps {
  children: React.ReactNode
}

export function PreviewPane({ children }: PreviewPaneProps) {
  const { scale, viewportSize } = usePreview()

  return (
    <main className="flex-1 overflow-auto bg-muted/30">
      <div
        className={cn(
          'min-h-full p-8 transition-transform duration-200',
          viewportSize === 'mobile' && 'max-w-md mx-auto',
          viewportSize === 'tablet' && 'max-w-3xl mx-auto',
          viewportSize === 'desktop' && 'max-w-7xl mx-auto',
        )}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
        }}
      >
        {children}
      </div>
    </main>
  )
}
