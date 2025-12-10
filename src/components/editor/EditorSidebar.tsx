/**
 * Editor Sidebar Component
 * Left sidebar containing design system controls
 */

import { useEffect, useRef, useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { useSidebar } from '@/hooks/use-ui'
import { cn } from '@/lib/utils'
import { setSidebarWidth, toggleSidebar } from '@/stores/ui.store'

interface EditorSidebarProps {
  children: React.ReactNode
}

export function EditorSidebar({ children }: EditorSidebarProps) {
  const { width, collapsed } = useSidebar()
  const [isResizing, setIsResizing] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Handle resize
  useEffect(() => {
    if (!isResizing) return

    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = e.clientX
      setSidebarWidth(newWidth)
    }

    const handleMouseUp = () => {
      setIsResizing(false)
      // Save to localStorage
      localStorage.setItem('sidebar-width', width.toString())
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isResizing, width])

  // Load saved width on mount
  useEffect(() => {
    const saved = localStorage.getItem('sidebar-width')
    if (saved) {
      setSidebarWidth(Number(saved))
    }
  }, [])

  // Prevent text selection while resizing
  useEffect(() => {
    if (isResizing) {
      document.body.style.userSelect = 'none'
      document.body.style.cursor = 'col-resize'
    } else {
      document.body.style.userSelect = ''
      document.body.style.cursor = ''
    }
  }, [isResizing])

  return (
    <>
      {/* Desktop/Tablet Sidebar */}
      <aside
        ref={sidebarRef}
        className={cn(
          'relative border-r border-border bg-card transition-all duration-200',
          'hidden md:block', // Show on tablet (768px) and up
          collapsed && 'md:hidden',
        )}
        style={{ width: `${width}px`, minWidth: '300px', maxWidth: '600px' }}
      >
        <ScrollArea className="h-full">
          <div className="p-4 md:p-6 space-y-4 md:space-y-6">
            {/* Header */}
            <div>
              <h2 className="text-lg font-semibold">Design Tokens</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Customize your design system
              </p>
            </div>

            <Separator />

            {/* Content */}
            {children}
          </div>
        </ScrollArea>

        {/* Resize handle */}
        <button
          type="button"
          className={cn(
            'absolute top-0 right-0 bottom-0 w-1 cursor-col-resize',
            'hover:bg-primary/50 transition-colors',
            'after:absolute after:inset-y-0 after:-right-1 after:w-3',
            isResizing && 'bg-primary',
          )}
          onMouseDown={() => setIsResizing(true)}
          aria-label="Resize sidebar"
        />
      </aside>

      {/* Mobile/Tablet Sidebar (Overlay) */}
      {!collapsed && (
        <div
          className={cn(
            'fixed inset-0 z-50 md:hidden',
            'animate-in fade-in-0 duration-200',
          )}
        >
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => toggleSidebar()}
            onKeyDown={(e) => e.key === 'Escape' && toggleSidebar()}
            aria-label="Close sidebar"
          />

          {/* Sidebar Panel */}
          <aside
            className={cn(
              'absolute left-0 top-16 bottom-0 w-[85vw] max-w-sm',
              'border-r border-border bg-card shadow-lg',
              'animate-in slide-in-from-left duration-200',
            )}
            role="dialog"
            aria-label="Design system controls"
          >
            <ScrollArea className="h-full">
              <div className="p-4 space-y-4">
                {/* Header */}
                <div>
                  <h2 className="text-lg font-semibold">Design Tokens</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Customize your design system
                  </p>
                </div>

                <Separator />

                {/* Content with touch-friendly spacing */}
                <div className="pb-6">{children}</div>
              </div>
            </ScrollArea>
          </aside>
        </div>
      )}
    </>
  )
}
