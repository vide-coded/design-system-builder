import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import { useDesignSystem } from '@/hooks/use-design-system'
import { updateTypography } from '@/stores/design-system.store'

interface GoogleFont {
  family: string
  category: string
  variants: string[]
}

export function TypographySection() {
  const { designSystem } = useDesignSystem()
  const typography = designSystem.typography

  const [sansFonts, setSansFonts] = useState<string[]>([])
  const [serifFonts, setSerifFonts] = useState<string[]>([])
  const [monoFonts, setMonoFonts] = useState<string[]>([])
  const [isLoadingFonts, setIsLoadingFonts] = useState(false)
  const [fontSearchQuery, setFontSearchQuery] = useState('')

  // Fetch Google Fonts on mount
  useEffect(() => {
    const fetchGoogleFonts = async () => {
      setIsLoadingFonts(true)
      try {
        // Using a public Google Fonts API (no key needed for basic list)
        const response = await fetch(
          'https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyDummyKeyForDemo',
        )

        // Fallback to hardcoded popular fonts if API fails
        if (!response.ok) {
          const popularFonts = {
            sans: [
              'Inter',
              'Roboto',
              'Open Sans',
              'Lato',
              'Montserrat',
              'Poppins',
              'Nunito',
              'Raleway',
              'Ubuntu',
              'Rubik',
              'Work Sans',
              'DM Sans',
            ],
            serif: [
              'Merriweather',
              'Playfair Display',
              'Lora',
              'PT Serif',
              'Crimson Text',
              'Libre Baskerville',
              'EB Garamond',
              'Cormorant',
            ],
            mono: [
              'Roboto Mono',
              'JetBrains Mono',
              'Fira Code',
              'Source Code Pro',
              'IBM Plex Mono',
              'Space Mono',
              'Courier Prime',
            ],
          }

          setSansFonts(popularFonts.sans)
          setSerifFonts(popularFonts.serif)
          setMonoFonts(popularFonts.mono)
          setIsLoadingFonts(false)
          return
        }

        const data = await response.json()

        // Categorize fonts
        const sans = data.items
          .filter((f: GoogleFont) => f.category === 'sans-serif')
          .map((f: GoogleFont) => f.family)
          .slice(0, 50)
        const serif = data.items
          .filter((f: GoogleFont) => f.category === 'serif')
          .map((f: GoogleFont) => f.family)
          .slice(0, 30)
        const mono = data.items
          .filter((f: GoogleFont) => f.category === 'monospace')
          .map((f: GoogleFont) => f.family)
          .slice(0, 20)

        setSansFonts(sans)
        setSerifFonts(serif)
        setMonoFonts(mono)
      } catch (error) {
        console.error('Failed to load Google Fonts:', error)
        // Use fallback fonts
        setSansFonts([
          'Inter',
          'Roboto',
          'Open Sans',
          'Lato',
          'Montserrat',
          'Poppins',
        ])
        setSerifFonts(['Merriweather', 'Playfair Display', 'Lora', 'PT Serif'])
        setMonoFonts(['Roboto Mono', 'JetBrains Mono', 'Fira Code'])
      } finally {
        setIsLoadingFonts(false)
      }
    }

    fetchGoogleFonts()
  }, [])

  // Load Google Font dynamically
  const loadGoogleFont = (fontFamily: string) => {
    const fontName = fontFamily.replace(/\s+/g, '+')
    const link = document.createElement('link')
    link.href = `https://fonts.googleapis.com/css2?family=${fontName}:wght@100;200;300;400;500;600;700;800;900&display=swap`
    link.rel = 'stylesheet'
    link.id = `google-font-${fontName}`

    // Remove existing link if present
    const existing = document.getElementById(`google-font-${fontName}`)
    if (existing) {
      existing.remove()
    }

    document.head.appendChild(link)
  }

  const handleFontFamilyChange = (
    category: 'sans' | 'serif' | 'mono',
    fontFamily: string,
  ) => {
    loadGoogleFont(fontFamily)

    const currentFonts = typography.fontFamily[category]
    const newFonts = [fontFamily, ...currentFonts.slice(1)]

    updateTypography({
      fontFamily: {
        ...typography.fontFamily,
        [category]: newFonts,
      },
    })
  }

  const filteredSansFonts = fontSearchQuery
    ? sansFonts.filter((f) =>
        f.toLowerCase().includes(fontSearchQuery.toLowerCase()),
      )
    : sansFonts

  return (
    <div className="space-y-6">
      <Accordion
        type="multiple"
        defaultValue={['fonts', 'sizes']}
        className="space-y-4"
      >
        {/* Font Families */}
        <AccordionItem value="fonts" className="border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <span className="font-semibold">Font Families</span>
          </AccordionTrigger>
          <AccordionContent className="space-y-6 pt-4">
            <p className="text-sm text-muted-foreground">
              Select fonts from Google Fonts library. Changes apply instantly to
              the preview.
            </p>

            {/* Sans Serif Font */}
            <div className="space-y-3">
              <Label>Sans Serif Font</Label>
              <Select
                value={typography.fontFamily.sans[0]}
                onValueChange={(value) => handleFontFamilyChange('sans', value)}
                disabled={isLoadingFonts}
              >
                <SelectTrigger>
                  <SelectValue
                    placeholder={
                      isLoadingFonts ? 'Loading fonts...' : 'Select font'
                    }
                  />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  <div className="px-2 py-2">
                    <Input
                      placeholder="Search fonts..."
                      value={fontSearchQuery}
                      onChange={(e) => setFontSearchQuery(e.target.value)}
                      className="h-8"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                  {filteredSansFonts.map((font) => (
                    <SelectItem
                      key={font}
                      value={font}
                      style={{ fontFamily: font }}
                    >
                      {font}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="rounded-md border border-border bg-muted p-3 min-h-12 flex items-center">
                {isLoadingFonts ? (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-sm">Loading font...</span>
                  </div>
                ) : (
                  <p
                    className="text-sm w-full"
                    style={{ fontFamily: typography.fontFamily.sans[0] }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </p>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                Used for body text, UI elements, and most content.
              </p>
            </div>

            <Separator />

            {/* Serif Font */}
            <div className="space-y-3">
              <Label>Serif Font</Label>
              <Select
                value={typography.fontFamily.serif[0]}
                onValueChange={(value) =>
                  handleFontFamilyChange('serif', value)
                }
                disabled={isLoadingFonts}
              >
                <SelectTrigger>
                  <SelectValue
                    placeholder={
                      isLoadingFonts ? 'Loading fonts...' : 'Select font'
                    }
                  />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {serifFonts.map((font) => (
                    <SelectItem
                      key={font}
                      value={font}
                      style={{ fontFamily: font }}
                    >
                      {font}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="rounded-md border border-border bg-muted p-3 min-h-12 flex items-center">
                {isLoadingFonts ? (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-sm">Loading font...</span>
                  </div>
                ) : (
                  <p
                    className="text-sm w-full"
                    style={{ fontFamily: typography.fontFamily.serif[0] }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </p>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                Used for headings, editorial content, and elegant typography.
              </p>
            </div>

            <Separator />

            {/* Monospace Font */}
            <div className="space-y-3">
              <Label>Monospace Font</Label>
              <Select
                value={typography.fontFamily.mono[0]}
                onValueChange={(value) => handleFontFamilyChange('mono', value)}
                disabled={isLoadingFonts}
              >
                <SelectTrigger>
                  <SelectValue
                    placeholder={
                      isLoadingFonts ? 'Loading fonts...' : 'Select font'
                    }
                  />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {monoFonts.map((font) => (
                    <SelectItem
                      key={font}
                      value={font}
                      style={{ fontFamily: font }}
                    >
                      {font}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="rounded-md border border-border bg-muted p-3 min-h-12 flex items-center">
                {isLoadingFonts ? (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-sm">Loading font...</span>
                  </div>
                ) : (
                  <p
                    className="text-sm font-mono w-full"
                    style={{ fontFamily: typography.fontFamily.mono[0] }}
                  >
                    const code = "Hello World";
                  </p>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                Used for code blocks, technical content, and fixed-width text.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Font Sizes */}
        <AccordionItem value="sizes" className="border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <span className="font-semibold">Font Sizes</span>
          </AccordionTrigger>
          <AccordionContent className="space-y-6 pt-4">
            <p className="text-sm text-muted-foreground">
              Define the typographic scale. Base size is typically 16px (1rem).
            </p>

            <div className="grid grid-cols-2 gap-4">
              {Object.entries(typography.fontSize).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <Label className="text-xs">
                    {key}{' '}
                    <span className="text-muted-foreground">({value})</span>
                  </Label>
                  <Input
                    type="text"
                    value={value}
                    onChange={(e) =>
                      updateTypography({
                        fontSize: {
                          ...typography.fontSize,
                          [key]: e.target.value,
                        },
                      })
                    }
                    className="h-9 text-sm font-mono"
                  />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Font Weights */}
        <AccordionItem value="weights" className="border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <span className="font-semibold">Font Weights</span>
          </AccordionTrigger>
          <AccordionContent className="space-y-6 pt-4">
            <p className="text-sm text-muted-foreground">
              Weight values from 100 (thin) to 900 (black).
            </p>

            {Object.entries(typography.fontWeight).map(([key, value]) => (
              <div key={key} className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="capitalize">{key}</Label>
                  <span className="text-sm text-muted-foreground font-mono">
                    {value}
                  </span>
                </div>
                <Slider
                  value={[value]}
                  onValueChange={([newValue]) =>
                    updateTypography({
                      fontWeight: {
                        ...typography.fontWeight,
                        [key]: newValue,
                      },
                    })
                  }
                  min={100}
                  max={900}
                  step={100}
                  className="w-full"
                />
                <p className="text-sm" style={{ fontWeight: value }}>
                  The quick brown fox jumps over the lazy dog
                </p>
                {key !== 'black' && <Separator />}
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* Line Height */}
        <AccordionItem value="lineHeight" className="border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <span className="font-semibold">Line Height</span>
          </AccordionTrigger>
          <AccordionContent className="space-y-6 pt-4">
            <p className="text-sm text-muted-foreground">
              Controls vertical spacing between lines of text.
            </p>

            {Object.entries(typography.lineHeight).map(([key, value]) => (
              <div key={key} className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="capitalize">{key}</Label>
                  <span className="text-sm text-muted-foreground font-mono">
                    {value}
                  </span>
                </div>
                <Slider
                  value={[value]}
                  onValueChange={([newValue]) =>
                    updateTypography({
                      lineHeight: {
                        ...typography.lineHeight,
                        [key]: newValue,
                      },
                    })
                  }
                  min={1}
                  max={2.5}
                  step={0.125}
                  className="w-full"
                />
                <p className="text-sm max-w-md" style={{ lineHeight: value }}>
                  The quick brown fox jumps over the lazy dog. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
                {key !== 'loose' && <Separator />}
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* Letter Spacing */}
        <AccordionItem value="letterSpacing" className="border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <span className="font-semibold">Letter Spacing</span>
          </AccordionTrigger>
          <AccordionContent className="space-y-6 pt-4">
            <p className="text-sm text-muted-foreground">
              Controls horizontal spacing between characters.
            </p>

            {Object.entries(typography.letterSpacing).map(([key, value]) => (
              <div key={key} className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="capitalize">{key}</Label>
                  <Input
                    type="text"
                    value={value}
                    onChange={(e) =>
                      updateTypography({
                        letterSpacing: {
                          ...typography.letterSpacing,
                          [key]: e.target.value,
                        },
                      })
                    }
                    className="h-8 w-24 text-xs font-mono"
                  />
                </div>
                <p className="text-sm" style={{ letterSpacing: value }}>
                  The quick brown fox jumps over the lazy dog
                </p>
                {key !== 'widest' && <Separator />}
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
