/**
 * Main Editor Page
 * Split-pane layout with controls (left) and preview (right)
 */

import { createFileRoute } from '@tanstack/react-router'
import { Box, Palette, Ruler, Type } from 'lucide-react'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { EditorLayout } from '@/components/editor/EditorLayout'
import { PreviewContainer } from '@/components/preview/PreviewContainer'
import { AnimationsSection } from '@/components/sections/AnimationsSection'
import { BordersSection } from '@/components/sections/BordersSection'
import { ColorsSection } from '@/components/sections/ColorsSection'
import { SpacingSection } from '@/components/sections/SpacingSection'
import { TypographySection } from '@/components/sections/TypographySection'
import { Accordion } from '@/components/ui/accordion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const Route = createFileRoute('/')({
  component: EditorPage,
})

function EditorPage() {
  return (
    <main>
      <EditorLayout
        sidebar={<SidebarContent />}
        preview={
          <ErrorBoundary>
            <PreviewContainer />
          </ErrorBoundary>
        }
      />
    </main>
  )
}

function SidebarContent() {
  return (
    <Tabs defaultValue="colors" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="colors" className="gap-2">
          <Palette className="h-4 w-4" />
          <span className="hidden sm:inline">Colors</span>
        </TabsTrigger>
        <TabsTrigger value="typography" className="gap-2">
          <Type className="h-4 w-4" />
          <span className="hidden sm:inline">Type</span>
        </TabsTrigger>
        <TabsTrigger value="spacing" className="gap-2">
          <Ruler className="h-4 w-4" />
          <span className="hidden sm:inline">Spacing</span>
        </TabsTrigger>
        <TabsTrigger value="effects" className="gap-2">
          <Box className="h-4 w-4" />
          <span className="hidden sm:inline">Effects</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="colors" className="mt-6">
        <ColorsSection />
      </TabsContent>

      <TabsContent value="typography" className="mt-6">
        <TypographySection />
      </TabsContent>

      <TabsContent value="spacing" className="mt-6">
        <Accordion type="single" collapsible className="w-full">
          <SpacingSection />
        </Accordion>
      </TabsContent>

      <TabsContent value="effects" className="mt-6 space-y-6">
        <BordersSection />
        <AnimationsSection />
      </TabsContent>
    </Tabs>
  )
}
