/**
 * Borders & Shadows Section
 * Visual controls for border radius, width, and shadow elevations
 */

import { RotateCcw } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useDesignSystem } from '@/hooks/use-design-system'

export function BordersSection() {
  const { designSystem, updateBorderRadius, updateBoxShadow, resetSection } =
    useDesignSystem()

  const handleResetBorders = () => {
    resetSection('borders')
  }

  // Border Radius presets for quick selection
  const radiusPresets = [
    { label: 'none', value: '0px', key: 'none' as const },
    { label: 'sm', value: '0.125rem', key: 'sm' as const },
    { label: 'base', value: '0.25rem', key: 'base' as const },
    { label: 'md', value: '0.375rem', key: 'md' as const },
    { label: 'lg', value: '0.5rem', key: 'lg' as const },
    { label: 'xl', value: '0.75rem', key: 'xl' as const },
    { label: '2xl', value: '1rem', key: '2xl' as const },
    { label: '3xl', value: '1.5rem', key: '3xl' as const },
    { label: 'full', value: '9999px', key: 'full' as const },
  ]

  // Shadow elevations with visual preview
  const shadowPresets = [
    {
      label: 'none',
      value: '0 0 #0000',
      key: 'none' as const,
      description: 'No shadow',
    },
    {
      label: 'sm',
      value: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      key: 'sm' as const,
      description: 'Subtle shadow',
    },
    {
      label: 'base',
      value: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      key: 'base' as const,
      description: 'Default elevation',
    },
    {
      label: 'md',
      value: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      key: 'md' as const,
      description: 'Medium elevation',
    },
    {
      label: 'lg',
      value:
        '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      key: 'lg' as const,
      description: 'Large elevation',
    },
    {
      label: 'xl',
      value:
        '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      key: 'xl' as const,
      description: 'Extra large elevation',
    },
    {
      label: '2xl',
      value: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      key: '2xl' as const,
      description: 'Maximum elevation',
    },
    {
      label: 'inner',
      value: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      key: 'inner' as const,
      description: 'Inner shadow',
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Borders & Shadows</h3>
          <p className="text-sm text-muted-foreground">
            Configure border radius and shadow elevations
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleResetBorders}
          title="Reset to defaults"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      <Accordion
        type="multiple"
        defaultValue={['radius', 'shadows']}
        className="w-full"
      >
        {/* Border Radius */}
        <AccordionItem value="radius">
          <AccordionTrigger>
            <div className="flex items-center justify-between w-full pr-4">
              <span>Border Radius</span>
              <span className="text-xs text-muted-foreground">9 values</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <p className="text-sm text-muted-foreground">
                Define rounded corner sizes for buttons, cards, and other
                elements.
              </p>

              {/* Quick Presets */}
              <div className="grid grid-cols-3 gap-2">
                {radiusPresets.map((preset) => (
                  <button
                    key={preset.key}
                    type="button"
                    onClick={() => updateBorderRadius(preset.key, preset.value)}
                    className="flex flex-col items-center gap-2 p-3 rounded-md border hover:bg-accent hover:text-accent-foreground transition-colors"
                    title={`${preset.label}: ${preset.value}`}
                  >
                    <div
                      className="w-12 h-12 bg-primary"
                      style={{ borderRadius: preset.value }}
                    />
                    <span className="text-xs font-medium">{preset.label}</span>
                    <span className="text-xs text-muted-foreground">
                      {preset.value}
                    </span>
                  </button>
                ))}
              </div>

              {/* Custom Values Editor */}
              <div className="space-y-3 pt-4 border-t">
                <h4 className="text-sm font-medium">Custom Values</h4>
                <div className="grid gap-3">
                  {radiusPresets.map((preset) => (
                    <div
                      key={preset.key}
                      className="grid grid-cols-[100px_1fr] items-center gap-3"
                    >
                      <Label
                        htmlFor={`radius-${preset.key}`}
                        className="text-sm"
                      >
                        {preset.label}
                      </Label>
                      <Input
                        id={`radius-${preset.key}`}
                        type="text"
                        value={designSystem.borderRadius[preset.key]}
                        onChange={(e) =>
                          updateBorderRadius(preset.key, e.target.value)
                        }
                        className="h-8"
                        placeholder="0px"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Usage Example */}
              <div className="pt-4 border-t space-y-2">
                <h4 className="text-sm font-medium">Preview</h4>
                <div className="flex flex-wrap gap-2">
                  <div
                    className="w-16 h-16 bg-primary"
                    style={{ borderRadius: designSystem.borderRadius.sm }}
                    title={`sm: ${designSystem.borderRadius.sm}`}
                  />
                  <div
                    className="w-16 h-16 bg-primary"
                    style={{ borderRadius: designSystem.borderRadius.md }}
                    title={`md: ${designSystem.borderRadius.md}`}
                  />
                  <div
                    className="w-16 h-16 bg-primary"
                    style={{ borderRadius: designSystem.borderRadius.lg }}
                    title={`lg: ${designSystem.borderRadius.lg}`}
                  />
                  <div
                    className="w-16 h-16 bg-primary"
                    style={{ borderRadius: designSystem.borderRadius.xl }}
                    title={`xl: ${designSystem.borderRadius.xl}`}
                  />
                  <div
                    className="w-16 h-16 bg-primary"
                    style={{ borderRadius: designSystem.borderRadius['2xl'] }}
                    title={`2xl: ${designSystem.borderRadius['2xl']}`}
                  />
                  <div
                    className="w-16 h-16 bg-primary"
                    style={{ borderRadius: designSystem.borderRadius.full }}
                    title={`full: ${designSystem.borderRadius.full}`}
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Box Shadows */}
        <AccordionItem value="shadows">
          <AccordionTrigger>
            <div className="flex items-center justify-between w-full pr-4">
              <span>Box Shadows</span>
              <span className="text-xs text-muted-foreground">
                8 elevations
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <p className="text-sm text-muted-foreground">
                Create depth and elevation with shadow layers.
              </p>

              {/* Shadow Presets with Visual Preview */}
              <div className="grid gap-3">
                {shadowPresets.map((preset) => (
                  <div
                    key={preset.key}
                    className="grid grid-cols-[120px_1fr] items-center gap-4 p-3 rounded-lg border"
                  >
                    {/* Visual Preview */}
                    <div className="flex items-center justify-center h-16 bg-muted/30 rounded">
                      <div
                        className="w-12 h-12 bg-card rounded"
                        style={{ boxShadow: preset.value }}
                      />
                    </div>

                    {/* Controls */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-sm font-medium">
                            {preset.label}
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            {preset.description}
                          </p>
                        </div>
                      </div>
                      <Input
                        type="text"
                        value={designSystem.boxShadow[preset.key]}
                        onChange={(e) =>
                          updateBoxShadow(preset.key, e.target.value)
                        }
                        className="h-8 font-mono text-xs"
                        placeholder="0 0 #0000"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Usage Examples */}
              <div className="pt-4 border-t space-y-3">
                <h4 className="text-sm font-medium">Usage Examples</h4>
                <div className="grid grid-cols-2 gap-4">
                  {/* Card with Shadow */}
                  <div
                    className="p-4 bg-card rounded-lg"
                    style={{ boxShadow: designSystem.boxShadow.md }}
                  >
                    <div className="space-y-2">
                      <div className="h-3 w-20 bg-muted rounded" />
                      <div className="h-2 w-full bg-muted rounded" />
                      <div className="h-2 w-3/4 bg-muted rounded" />
                    </div>
                  </div>

                  {/* Button with Shadow */}
                  <div className="flex items-center justify-center">
                    <button
                      type="button"
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
                      style={{
                        boxShadow: designSystem.boxShadow.sm,
                        borderRadius: designSystem.borderRadius.md,
                      }}
                    >
                      Button with Shadow
                    </button>
                  </div>

                  {/* Elevated Panel */}
                  <div
                    className="p-4 bg-card rounded-lg"
                    style={{ boxShadow: designSystem.boxShadow.lg }}
                  >
                    <div className="space-y-2">
                      <div className="h-3 w-16 bg-muted rounded" />
                      <div className="h-2 w-full bg-muted rounded" />
                    </div>
                  </div>

                  {/* Input with Inner Shadow */}
                  <div className="flex items-center justify-center">
                    <div
                      className="w-full px-3 py-2 bg-background border rounded-md"
                      style={{
                        boxShadow: designSystem.boxShadow.inner,
                        borderRadius: designSystem.borderRadius.md,
                      }}
                    >
                      <span className="text-sm text-muted-foreground">
                        Input field
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Notes */}
              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Technical Notes</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>
                    • <strong>sm-md</strong>: Use for buttons, inputs, small
                    cards
                  </li>
                  <li>
                    • <strong>lg-xl</strong>: Use for modals, popovers,
                    dropdowns
                  </li>
                  <li>
                    • <strong>2xl</strong>: Use for hero sections, large panels
                  </li>
                  <li>
                    • <strong>inner</strong>: Use for input fields, wells
                  </li>
                  <li>• Shadows use rgb(0 0 0 / opacity) for consistency</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
