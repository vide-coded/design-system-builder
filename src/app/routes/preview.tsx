/**
 * Preview Route
 * Rendered inside iframe, isolated from editor UI
 * Styles are injected directly into iframe by parent PreviewContainer
 */

import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ComponentShowcase } from '@/components/preview/ComponentShowcase'
import { CustomHTMLPreview } from '@/components/preview/CustomHTMLPreview'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const Route = createFileRoute('/preview')({
  component: PreviewPage,
})

function PreviewPage() {
  const [activeTab, setActiveTab] = useState<'showcase' | 'demo' | 'custom'>(
    'showcase',
  )

  useEffect(() => {
    // Notify parent that preview iframe is ready
    window.parent.postMessage({ type: 'preview-ready' }, '*')
    console.log('✅ Preview iframe ready')
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as 'showcase' | 'demo')}
        className="h-screen flex flex-col"
      >
        {/* Tab Navigation */}
        <div className="border-b bg-card">
          <div className="px-4 pt-4">
            <div className="mb-4">
              <h1 className="text-2xl font-bold">Component Preview</h1>
              <p className="text-sm text-muted-foreground">
                Live preview with real-time design system updates
              </p>
            </div>
            <TabsList className="w-full justify-start">
              <TabsTrigger value="showcase" className="flex-1 max-w-[200px]">
                📚 Component Library
              </TabsTrigger>
              <TabsTrigger value="demo" className="flex-1 max-w-[200px]">
                🎨 Demo Page
              </TabsTrigger>
              <TabsTrigger value="custom" className="flex-1 max-w-[200px]">
                🔧 Custom HTML
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-hidden">
          <TabsContent value="showcase" className="h-full m-0">
            <ErrorBoundary>
              <ComponentShowcase />
            </ErrorBoundary>
          </TabsContent>

          <TabsContent value="demo" className="h-full m-0 overflow-auto">
            <DemoPage />
          </TabsContent>

          <TabsContent value="custom" className="h-full m-0 overflow-auto">
            <ErrorBoundary>
              <CustomHTMLPreview />
            </ErrorBoundary>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}

// ============================================================================
// Demo Page (Test Components)
// ============================================================================

function DemoPage() {
  return (
    <div className="p-8">
      <div className="space-y-8 max-w-7xl mx-auto">
        {/* Test components showing utility classes work */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <button type="button" className="btn btn-primary">
              Primary Button
            </button>
            <button type="button" className="btn btn-secondary">
              Secondary Button
            </button>
            <button type="button" className="btn btn-outline">
              Outline Button
            </button>
            <button type="button" className="btn btn-ghost">
              Ghost Button
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Cards</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="card">
              <h3 className="font-semibold mb-2">Card Title</h3>
              <p className="text-sm">
                This is a card component using design system tokens.
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">Another Card</h3>
              <p className="text-sm">
                Cards automatically use the correct colors, shadows, and
                borders.
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold mb-2">Third Card</h3>
              <p className="text-sm">
                Hover over cards to see the shadow transition effect.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Form Inputs</h2>
          <div className="space-y-4 max-w-md">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="input"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="input"
                placeholder="your@email.com"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Badges</h2>
          <div className="flex flex-wrap gap-2">
            <span className="badge badge-primary">Primary</span>
            <span className="badge badge-success">Success</span>
            <span className="badge badge-warning">Warning</span>
            <span className="badge badge-error">Error</span>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Alerts</h2>
          <div className="space-y-4">
            <div className="alert alert-info">
              <strong>Info:</strong> This is an informational message.
            </div>
            <div className="alert alert-success">
              <strong>Success:</strong> Operation completed successfully!
            </div>
            <div className="alert alert-warning">
              <strong>Warning:</strong> Please review your changes.
            </div>
            <div className="alert alert-error">
              <strong>Error:</strong> Something went wrong.
            </div>
          </div>
        </div>

        <div className="text-sm text-muted-foreground space-y-1 border-t pt-4">
          <p>✅ Design system styles injected</p>
          <p>✅ Utility classes working</p>
          <p>✅ Real-time updates without reload</p>
          <p className="mt-2 font-medium">
            Switch to Component Library tab to browse all 70+ components →
          </p>
        </div>
      </div>
    </div>
  )
}
