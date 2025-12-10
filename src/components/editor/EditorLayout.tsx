/**
 * Editor Layout Component
 * Main layout wrapper for the design system editor
 */

import { ErrorBoundary } from '@/components/ErrorBoundary'
import { EditorSidebar } from './EditorSidebar'
import { ExportDialog } from './ExportDialog'
import { Header } from './Header'
import { PreviewPane } from './PreviewPane'

interface EditorLayoutProps {
  sidebar: React.ReactNode
  preview: React.ReactNode
}

export function EditorLayout({ sidebar, preview }: EditorLayoutProps) {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-background">
      {/* Header */}
      <Header />

      {/* Main content area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar with controls */}
        <EditorSidebar>{sidebar}</EditorSidebar>

        {/* Preview pane */}
        <PreviewPane>{preview}</PreviewPane>
      </div>

      {/* Export Dialog (rendered globally, controlled by state) */}
      <ErrorBoundary>
        <ExportDialog />
      </ErrorBoundary>
    </div>
  )
}
