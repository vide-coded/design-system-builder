/**
 * Header Component
 * Top navigation bar with logo, theme toggle, and export button
 */

import { Download, FolderOpen, Menu, Moon, Share2, Sun } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useStorageManager } from '@/hooks/use-persistence'
import { openExportDialog, toggleSidebar } from '@/stores/ui.store'
import { DesignsManager } from './DesignsManager'

export function Header() {
  const { shareViaURL } = useStorageManager()

  // Initialize theme from localStorage or system preference
  const getInitialTheme = () => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
    const initialTheme = stored || (prefersDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
    return initialTheme
  }

  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme)
  const [isSharing, setIsSharing] = useState(false)
  const [designsManagerOpen, setDesignsManagerOpen] = useState(false)

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  const handleExport = () => {
    openExportDialog('css')
  }

  const handleShare = async () => {
    setIsSharing(true)
    try {
      const success = await shareViaURL()
      if (success) {
        // Show success feedback (could add toast later)
        console.log('✅ Link copied to clipboard!')
      } else {
        console.warn('⚠️ Design too large for URL sharing')
      }
    } catch (error) {
      console.error('❌ Failed to share:', error)
    } finally {
      setIsSharing(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-14 sm:h-16 items-center justify-between px-3 sm:px-6 gap-2">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          {/* Mobile/Tablet menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden shrink-0 min-h-11 min-w-11"
            onClick={() => toggleSidebar()}
            aria-label="Toggle sidebar"
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo and title */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
              DS
            </div>
            <div className="flex flex-col min-w-0">
              <h1 className="text-sm sm:text-base font-semibold leading-none truncate">
                Design System Builder
              </h1>
              <span className="text-xs text-muted-foreground hidden sm:inline truncate">
                Visual design token editor
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Designs Manager button */}
          <Button
            variant="ghost"
            size="icon"
            className="min-h-11 min-w-11"
            onClick={() => setDesignsManagerOpen(true)}
            aria-label="Manage designs"
          >
            <FolderOpen className="h-5 w-5" />
          </Button>

          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="min-h-11 min-w-11"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>

          {/* Share button */}
          <Button
            onClick={handleShare}
            variant="outline"
            size="sm"
            className="min-h-11 h-auto"
            disabled={isSharing}
            aria-label="Copy shareable link"
          >
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline sm:ml-2">
              {isSharing ? 'Copying...' : 'Share'}
            </span>
          </Button>

          {/* Export button */}
          <Button onClick={handleExport} size="sm" className="min-h-11 h-auto">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline sm:ml-2">Export</span>
          </Button>
        </div>
      </div>

      {/* Designs Manager Dialog */}
      <DesignsManager
        open={designsManagerOpen}
        onOpenChange={setDesignsManagerOpen}
      />
    </header>
  )
}
