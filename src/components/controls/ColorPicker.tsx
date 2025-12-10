import { useState, useEffect } from 'react'
import { HexColorPicker } from 'react-colorful'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import {
  generateColorScale,
  hexToHsl,
  hexToRgb,
  isLightColor,
  isValidHex,
  normalizeHex,
} from '@/lib/utils/color-utils'

interface ColorPickerProps {
  /** Current color value (hex format) */
  value: string
  /** Callback when color changes */
  onChange: (color: string) => void
  /** Label for the color picker */
  label?: string
  /** Show color scale preview */
  showScale?: boolean
  /** Custom preset colors */
  presets?: string[]
  /** Additional CSS classes */
  className?: string
}

const DEFAULT_PRESETS = [
  '#3b82f6', // Blue
  '#8b5cf6', // Purple
  '#ec4899', // Pink
  '#f43f5e', // Rose
  '#f97316', // Orange
  '#eab308', // Yellow
  '#22c55e', // Green
  '#14b8a6', // Teal
  '#06b6d4', // Cyan
  '#6366f1', // Indigo
  '#64748b', // Slate
  '#18181b', // Zinc
]

export function ColorPicker({
  value,
  onChange,
  label,
  showScale = false,
  presets = DEFAULT_PRESETS,
  className,
}: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Derive state from props instead of syncing in effect
  const normalizedValue = normalizeHex(value)
  const [hexInput, setHexInput] = useState(normalizedValue.toUpperCase())

  // Update hex input when value changes
  useEffect(() => {
    setHexInput(normalizedValue.toUpperCase())
  }, [normalizedValue])

  const handleColorChange = (newColor: string) => {
    const normalized = normalizeHex(newColor)
    setHexInput(normalized.toUpperCase())
    onChange(normalized)
  }

  const handleHexInputChange = (input: string) => {
    setHexInput(input)

    // Validate and apply if valid
    const withHash = input.startsWith('#') ? input : `#${input}`
    if (isValidHex(withHash)) {
      const normalized = normalizeHex(withHash)
      onChange(normalized)
    }
  }

  const handlePresetClick = (preset: string) => {
    handleColorChange(preset)
  }

  const rgb = hexToRgb(normalizedValue)
  const hsl = hexToHsl(normalizedValue)
  const scale = showScale ? generateColorScale(normalizedValue) : null
  const isLight = isLightColor(normalizedValue)

  return (
    <div className={cn('space-y-2', className)}>
      {label && (
        <Label className="text-sm font-medium text-foreground">{label}</Label>
      )}

      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start gap-3 px-3 h-10"
            type="button"
          >
            <div
              className="size-6 rounded border border-border shadow-sm"
              style={{ backgroundColor: normalizedValue }}
            />
            <span className="flex-1 text-left font-mono text-sm">
              {normalizedValue.toUpperCase()}
            </span>
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-80 p-4" align="start">
          <Tabs defaultValue="picker" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="picker">Picker</TabsTrigger>
              <TabsTrigger value="presets">Presets</TabsTrigger>
            </TabsList>

            <TabsContent value="picker" className="space-y-4 mt-0">
              {/* Color Picker */}
              <div className="space-y-3">
                <HexColorPicker
                  color={normalizedValue}
                  onChange={handleColorChange}
                  className="w-full"
                />

                {/* Current Color Preview */}
                <div
                  className="w-full h-12 rounded-md border border-border flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: normalizedValue }}
                >
                  <span
                    className="font-mono text-xs font-medium"
                    style={{ color: isLight ? '#000' : '#fff' }}
                  >
                    {normalizedValue.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Format Inputs */}
              <div className="space-y-2">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="hex-input"
                    className="text-xs text-muted-foreground"
                  >
                    HEX
                  </Label>
                  <Input
                    id="hex-input"
                    value={hexInput}
                    onChange={(e) => handleHexInputChange(e.target.value)}
                    className="font-mono text-sm h-9"
                    placeholder="#000000"
                  />
                </div>

                {rgb && (
                  <div className="grid grid-cols-3 gap-2">
                    <div className="space-y-1.5">
                      <Label className="text-xs text-muted-foreground">R</Label>
                      <Input
                        value={rgb.r}
                        readOnly
                        className="font-mono text-sm h-9 bg-muted"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs text-muted-foreground">G</Label>
                      <Input
                        value={rgb.g}
                        readOnly
                        className="font-mono text-sm h-9 bg-muted"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs text-muted-foreground">B</Label>
                      <Input
                        value={rgb.b}
                        readOnly
                        className="font-mono text-sm h-9 bg-muted"
                      />
                    </div>
                  </div>
                )}

                {hsl && (
                  <div className="grid grid-cols-3 gap-2">
                    <div className="space-y-1.5">
                      <Label className="text-xs text-muted-foreground">H</Label>
                      <Input
                        value={`${hsl.h}°`}
                        readOnly
                        className="font-mono text-sm h-9 bg-muted"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs text-muted-foreground">S</Label>
                      <Input
                        value={`${hsl.s}%`}
                        readOnly
                        className="font-mono text-sm h-9 bg-muted"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs text-muted-foreground">L</Label>
                      <Input
                        value={`${hsl.l}%`}
                        readOnly
                        className="font-mono text-sm h-9 bg-muted"
                      />
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="presets" className="space-y-3 mt-0">
              <div className="grid grid-cols-6 gap-2">
                {presets.map((preset) => (
                  <button
                    type="button"
                    key={preset}
                    onClick={() => handlePresetClick(preset)}
                    className={cn(
                      'size-10 rounded border-2 transition-all hover:scale-110',
                      normalizedValue.toLowerCase() === preset.toLowerCase()
                        ? 'border-foreground shadow-md'
                        : 'border-border hover:border-muted-foreground',
                    )}
                    style={{ backgroundColor: preset }}
                    title={preset}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Color Scale Preview */}
          {showScale && scale && (
            <div className="mt-4 pt-4 border-t space-y-2">
              <Label className="text-xs text-muted-foreground">
                Color Scale
              </Label>
              <div className="grid grid-cols-11 gap-1">
                {Object.entries(scale).map(([shade, color]) => (
                  <button
                    type="button"
                    key={shade}
                    onClick={() => handleColorChange(color)}
                    className="group relative"
                    title={`${shade}: ${color}`}
                  >
                    <div
                      className="size-6 rounded border border-border transition-transform hover:scale-125 hover:z-10"
                      style={{ backgroundColor: color }}
                    />
                    <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {shade}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  )
}
