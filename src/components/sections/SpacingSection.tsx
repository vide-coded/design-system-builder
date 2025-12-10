import { RotateCcw } from 'lucide-react'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useDesignSystem } from '@/hooks/use-design-system'
import { updateSpacing as updateSpacingStore } from '@/stores/design-system.store'
import type { Spacing } from '@/types/design-system'

const spacingKeys = [
  '0',
  'px',
  '0.5',
  '1',
  '1.5',
  '2',
  '2.5',
  '3',
  '3.5',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '14',
  '16',
  '20',
  '24',
  '28',
  '32',
  '36',
  '40',
  '44',
  '48',
  '52',
  '56',
  '60',
  '64',
  '72',
  '80',
  '96',
] as const

export function SpacingSection() {
  const { designSystem } = useDesignSystem()
  const spacing = designSystem.spacing

  const updateSpacing = (key: string, value: string) => {
    updateSpacingStore({ [key]: value })
  }

  const resetToDefaults = () => {
    // Reset to default 4px base scale
    const defaults: Spacing = {
      '0': '0px',
      px: '1px',
      '0.5': '0.125rem', // 2px
      '1': '0.25rem', // 4px
      '1.5': '0.375rem', // 6px
      '2': '0.5rem', // 8px
      '2.5': '0.625rem', // 10px
      '3': '0.75rem', // 12px
      '3.5': '0.875rem', // 14px
      '4': '1rem', // 16px
      '5': '1.25rem', // 20px
      '6': '1.5rem', // 24px
      '7': '1.75rem', // 28px
      '8': '2rem', // 32px
      '9': '2.25rem', // 36px
      '10': '2.5rem', // 40px
      '11': '2.75rem', // 44px
      '12': '3rem', // 48px
      '14': '3.5rem', // 56px
      '16': '4rem', // 64px
      '20': '5rem', // 80px
      '24': '6rem', // 96px
      '28': '7rem', // 112px
      '32': '8rem', // 128px
      '36': '9rem', // 144px
      '40': '10rem', // 160px
      '44': '11rem', // 176px
      '48': '12rem', // 192px
      '52': '13rem', // 208px
      '56': '14rem', // 224px
      '60': '15rem', // 240px
      '64': '16rem', // 256px
      '72': '18rem', // 288px
      '80': '20rem', // 320px
      '96': '24rem', // 384px
    }
    updateSpacingStore(defaults)
  }

  // Parse rem value to pixels for display
  const remToPx = (remValue: string): number => {
    if (remValue === '0px') return 0
    if (remValue === '1px') return 1
    const rem = Number.parseFloat(remValue.replace('rem', ''))
    return rem * 16 // Assuming 1rem = 16px
  }

  // Visual preview: group by size ranges
  const smallSpacing = spacingKeys.slice(0, 12) // 0-4
  const mediumSpacing = spacingKeys.slice(12, 20) // 5-12
  const largeSpacing = spacingKeys.slice(20) // 14-96

  return (
    <AccordionItem value="spacing">
      <AccordionTrigger className="text-sm font-medium">
        Spacing & Sizing
      </AccordionTrigger>
      <AccordionContent className="space-y-6 pt-4">
        {/* Header with Reset */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Control spacing scale for padding, margin, gap, and sizing
            utilities.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={resetToDefaults}
            className="h-8 gap-2"
          >
            <RotateCcw className="h-3 w-3" />
            Reset
          </Button>
        </div>

        {/* Visual Preview: Small Spacing (0-4) */}
        <div className="space-y-3 rounded-lg border bg-card p-4">
          <h4 className="text-xs font-medium text-muted-foreground">
            Small Spacing (0-4)
          </h4>
          <div className="space-y-2">
            {smallSpacing.map((key) => (
              <div key={key} className="flex items-center gap-3">
                <div className="w-12 text-xs font-mono text-muted-foreground">
                  {key}
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <div
                    className="h-6 bg-primary rounded transition-all"
                    style={{
                      width: `${Math.min(remToPx(spacing[key]), 100)}px`,
                    }}
                  />
                  <span className="text-xs font-mono tabular-nums text-muted-foreground min-w-[60px]">
                    {spacing[key]}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ({remToPx(spacing[key])}px)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Preview: Medium Spacing (5-12) */}
        <div className="space-y-3 rounded-lg border bg-card p-4">
          <h4 className="text-xs font-medium text-muted-foreground">
            Medium Spacing (5-12)
          </h4>
          <div className="space-y-2">
            {mediumSpacing.map((key) => (
              <div key={key} className="flex items-center gap-3">
                <div className="w-12 text-xs font-mono text-muted-foreground">
                  {key}
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <div
                    className="h-6 bg-primary rounded transition-all"
                    style={{
                      width: `${Math.min(remToPx(spacing[key]), 200)}px`,
                    }}
                  />
                  <span className="text-xs font-mono tabular-nums text-muted-foreground min-w-[60px]">
                    {spacing[key]}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ({remToPx(spacing[key])}px)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Preview: Large Spacing (14-96) */}
        <div className="space-y-3 rounded-lg border bg-card p-4">
          <h4 className="text-xs font-medium text-muted-foreground">
            Large Spacing (14-96)
          </h4>
          <div className="space-y-2 overflow-x-auto">
            {largeSpacing.map((key) => (
              <div key={key} className="flex items-center gap-3 min-w-[600px]">
                <div className="w-12 text-xs font-mono text-muted-foreground">
                  {key}
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <div
                    className="h-6 bg-primary rounded transition-all"
                    style={{
                      width: `${Math.min(remToPx(spacing[key]), 400)}px`,
                    }}
                  />
                  <span className="text-xs font-mono tabular-nums text-muted-foreground min-w-[60px]">
                    {spacing[key]}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ({remToPx(spacing[key])}px)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Value Editor */}
        <div className="space-y-4 rounded-lg border bg-muted/50 p-4">
          <h4 className="text-xs font-medium">Custom Spacing Values</h4>
          <p className="text-xs text-muted-foreground">
            Override individual spacing values. Use rem units (e.g., "1.5rem" =
            24px).
          </p>

          <div className="grid grid-cols-2 gap-4 max-h-[300px] overflow-y-auto pr-2">
            {spacingKeys.map((key) => (
              <div key={key} className="space-y-1.5">
                <Label htmlFor={`spacing-${key}`} className="text-xs font-mono">
                  {key}
                  <span className="ml-2 text-muted-foreground font-normal">
                    ({remToPx(spacing[key])}px)
                  </span>
                </Label>
                <Input
                  id={`spacing-${key}`}
                  value={spacing[key]}
                  onChange={(e) => updateSpacing(key, e.target.value)}
                  className="h-8 text-xs font-mono"
                  placeholder="e.g., 1.5rem"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Usage Examples */}
        <div className="space-y-2 rounded-lg bg-muted/30 p-3 text-xs">
          <div className="font-medium">Usage Examples:</div>
          <div className="space-y-1 text-muted-foreground font-mono">
            <div>
              Padding: <code className="text-foreground">p-4</code> ={' '}
              {spacing['4']}
            </div>
            <div>
              Margin: <code className="text-foreground">m-8</code> ={' '}
              {spacing['8']}
            </div>
            <div>
              Gap: <code className="text-foreground">gap-6</code> ={' '}
              {spacing['6']}
            </div>
            <div>
              Width: <code className="text-foreground">w-64</code> ={' '}
              {spacing['64']}
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
