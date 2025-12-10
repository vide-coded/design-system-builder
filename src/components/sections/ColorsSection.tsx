import { ColorPicker } from '@/components/controls/ColorPicker'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { useDesignSystem } from '@/hooks/use-design-system'
import { updateColors } from '@/stores/design-system.store'

export function ColorsSection() {
  const { designSystem } = useDesignSystem()
  const colors = designSystem.colors

  return (
    <div className="space-y-6">
      <Accordion
        type="multiple"
        defaultValue={['brand', 'surface']}
        className="space-y-4"
      >
        {/* Brand Colors */}
        <AccordionItem value="brand" className="border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <span className="font-semibold">Brand Colors</span>
          </AccordionTrigger>
          <AccordionContent className="space-y-6 pt-4">
            {/* Primary */}
            <div className="space-y-3">
              <Label>Primary</Label>
              <ColorPicker
                value={colors.primary[500]}
                onChange={(color) =>
                  updateColors({ primary: { ...colors.primary, 500: color } })
                }
                showScale
              />
              <p className="text-xs text-muted-foreground">
                Your brand's primary color. Used for primary buttons, links, and
                key actions.
              </p>
            </div>

            <Separator />

            {/* Secondary */}
            <div className="space-y-3">
              <Label>Secondary</Label>
              <ColorPicker
                value={colors.secondary[500]}
                onChange={(color) =>
                  updateColors({
                    secondary: { ...colors.secondary, 500: color },
                  })
                }
                showScale
              />
              <p className="text-xs text-muted-foreground">
                Secondary brand color. Used for less prominent actions and
                accents.
              </p>
            </div>

            <Separator />

            {/* Accent */}
            <div className="space-y-3">
              <Label>Accent</Label>
              <ColorPicker
                value={colors.accent[500]}
                onChange={(color) =>
                  updateColors({ accent: { ...colors.accent, 500: color } })
                }
                showScale
              />
              <p className="text-xs text-muted-foreground">
                Accent color for highlights and special elements.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Semantic Colors */}
        <AccordionItem value="semantic" className="border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <span className="font-semibold">Semantic Colors</span>
          </AccordionTrigger>
          <AccordionContent className="space-y-6 pt-4">
            {/* Success */}
            <div className="space-y-3">
              <Label>Success</Label>
              <ColorPicker
                value={colors.success[500]}
                onChange={(color) =>
                  updateColors({ success: { ...colors.success, 500: color } })
                }
                showScale
              />
              <p className="text-xs text-muted-foreground">
                Indicates successful operations, confirmations, and positive
                states.
              </p>
            </div>

            <Separator />

            {/* Warning */}
            <div className="space-y-3">
              <Label>Warning</Label>
              <ColorPicker
                value={colors.warning[500]}
                onChange={(color) =>
                  updateColors({ warning: { ...colors.warning, 500: color } })
                }
                showScale
              />
              <p className="text-xs text-muted-foreground">
                Alerts users to caution, pending actions, or important notices.
              </p>
            </div>

            <Separator />

            {/* Error */}
            <div className="space-y-3">
              <Label>Error/Danger</Label>
              <ColorPicker
                value={colors.error[500]}
                onChange={(color) =>
                  updateColors({ error: { ...colors.error, 500: color } })
                }
                showScale
              />
              <p className="text-xs text-muted-foreground">
                Used for error states, delete actions, and warnings.
              </p>
            </div>

            <Separator />

            {/* Info */}
            <div className="space-y-3">
              <Label>Info</Label>
              <ColorPicker
                value={colors.info[500]}
                onChange={(color) =>
                  updateColors({ info: { ...colors.info, 500: color } })
                }
                showScale
              />
              <p className="text-xs text-muted-foreground">
                Informational messages, tips, and neutral notifications.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Surface Colors */}
        <AccordionItem value="surface" className="border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <span className="font-semibold">Surface Colors</span>
          </AccordionTrigger>
          <AccordionContent className="space-y-6 pt-4">
            <p className="text-sm text-muted-foreground">
              Surface colors define your app's foundation, cards, and text
              colors.
            </p>

            {/* Background */}
            <div className="space-y-3">
              <Label>Background</Label>
              <ColorPicker
                value={colors.background}
                onChange={(color) => updateColors({ background: color })}
              />
              <p className="text-xs text-muted-foreground">
                Main page background color. Usually white or very dark.
              </p>
            </div>

            <Separator />

            {/* Foreground */}
            <div className="space-y-3">
              <Label>Foreground (Text)</Label>
              <ColorPicker
                value={colors.foreground}
                onChange={(color) => updateColors({ foreground: color })}
              />
              <p className="text-xs text-muted-foreground">
                Primary text color displayed on background.
              </p>
            </div>

            <Separator />

            {/* Card */}
            <div className="space-y-3">
              <Label>Card</Label>
              <ColorPicker
                value={colors.card}
                onChange={(color) => updateColors({ card: color })}
              />
              <p className="text-xs text-muted-foreground">
                Background color for cards, panels, and elevated surfaces.
              </p>
            </div>

            <Separator />

            {/* Card Foreground */}
            <div className="space-y-3">
              <Label>Card Foreground</Label>
              <ColorPicker
                value={colors.cardForeground}
                onChange={(color) => updateColors({ cardForeground: color })}
              />
              <p className="text-xs text-muted-foreground">
                Text color displayed on card backgrounds.
              </p>
            </div>

            <Separator />

            {/* Muted */}
            <div className="space-y-3">
              <Label>Muted</Label>
              <ColorPicker
                value={colors.muted}
                onChange={(color) => updateColors({ muted: color })}
              />
              <p className="text-xs text-muted-foreground">
                Subtle background color for disabled or inactive elements.
              </p>
            </div>

            <Separator />

            {/* Muted Foreground */}
            <div className="space-y-3">
              <Label>Muted Foreground</Label>
              <ColorPicker
                value={colors.mutedForeground}
                onChange={(color) => updateColors({ mutedForeground: color })}
              />
              <p className="text-xs text-muted-foreground">
                Secondary text color for less prominent content.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Border & Focus */}
        <AccordionItem value="border" className="border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <span className="font-semibold">Border & Focus</span>
          </AccordionTrigger>
          <AccordionContent className="space-y-6 pt-4">
            {/* Border */}
            <div className="space-y-3">
              <Label>Border</Label>
              <ColorPicker
                value={colors.border}
                onChange={(color) => updateColors({ border: color })}
              />
              <p className="text-xs text-muted-foreground">
                Default border color for inputs, cards, and dividers.
              </p>
            </div>

            <Separator />

            {/* Input */}
            <div className="space-y-3">
              <Label>Input Border</Label>
              <ColorPicker
                value={colors.input}
                onChange={(color) => updateColors({ input: color })}
              />
              <p className="text-xs text-muted-foreground">
                Border color for form inputs in default state.
              </p>
            </div>

            <Separator />

            {/* Ring */}
            <div className="space-y-3">
              <Label>Focus Ring</Label>
              <ColorPicker
                value={colors.ring}
                onChange={(color) => updateColors({ ring: color })}
              />
              <p className="text-xs text-muted-foreground">
                Color of the focus ring for accessibility.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
