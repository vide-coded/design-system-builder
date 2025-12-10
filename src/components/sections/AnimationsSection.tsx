/**
 * Animations Section
 * Controls for animation duration and easing functions
 */

import { Play, RotateCcw } from 'lucide-react'
import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useDesignSystem } from '@/hooks/use-design-system'

export function AnimationsSection() {
  const { designSystem, updateAnimation } = useDesignSystem()
  const { animation } = designSystem

  // Animation preview state
  const [isAnimating, setIsAnimating] = useState<string | null>(null)

  // Duration presets (in milliseconds)
  const durationPresets = [
    { label: 'Very Fast', value: '100ms' },
    { label: 'Fast', value: '150ms' },
    { label: 'Normal', value: '300ms' },
    { label: 'Slow', value: '500ms' },
    { label: 'Very Slow', value: '700ms' },
  ]

  // Easing function presets
  const easingPresets = [
    { label: 'Linear', value: 'linear', curve: 'linear' },
    { label: 'Ease In', value: 'cubic-bezier(0.4, 0, 1, 1)', curve: 'ease-in' },
    {
      label: 'Ease Out',
      value: 'cubic-bezier(0, 0, 0.2, 1)',
      curve: 'ease-out',
    },
    {
      label: 'Ease In Out',
      value: 'cubic-bezier(0.4, 0, 0.2, 1)',
      curve: 'ease-in-out',
    },
    { label: 'Ease', value: 'cubic-bezier(0.25, 0.1, 0.25, 1)', curve: 'ease' },
    {
      label: 'Spring',
      value: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      curve: 'spring',
    },
  ]

  // Play animation
  const playAnimation = (name: string) => {
    setIsAnimating(name)
    setTimeout(
      () => setIsAnimating(null),
      Number.parseInt(animation.duration.normal, 10) || 300,
    )
  }

  // Reset animations to defaults
  const resetAnimations = () => {
    updateAnimation({
      duration: {
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
      },
      easing: {
        linear: 'linear',
        in: 'cubic-bezier(0.4, 0, 1, 1)',
        out: 'cubic-bezier(0, 0, 0.2, 1)',
        inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Animations</h3>
          <p className="text-sm text-muted-foreground">
            Control animation timing and easing
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={resetAnimations}>
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </div>

      <Accordion
        type="single"
        collapsible
        defaultValue="duration"
        className="w-full"
      >
        {/* Duration Controls */}
        <AccordionItem value="duration">
          <AccordionTrigger>
            <div className="flex items-center justify-between w-full pr-4">
              <span className="font-medium">Duration</span>
              <span className="text-xs text-muted-foreground">
                {animation.duration.normal}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <p className="text-sm text-muted-foreground">
                Define how long transitions and animations take to complete
              </p>

              {/* Fast Duration */}
              <div className="space-y-2">
                <Label htmlFor="duration-fast" className="text-sm font-medium">
                  Fast
                  <span className="text-xs text-muted-foreground ml-2">
                    Quick micro-interactions
                  </span>
                </Label>
                <div className="flex gap-2">
                  <Select
                    value={animation.duration.fast}
                    onValueChange={(value) =>
                      updateAnimation({
                        duration: { ...animation.duration, fast: value },
                      })
                    }
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {durationPresets.map((preset) => (
                        <SelectItem key={preset.value} value={preset.value}>
                          {preset.label} ({preset.value})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="duration-fast"
                    value={animation.duration.fast}
                    onChange={(e) =>
                      updateAnimation({
                        duration: {
                          ...animation.duration,
                          fast: e.target.value,
                        },
                      })
                    }
                    className="flex-1"
                    placeholder="150ms"
                  />
                </div>
              </div>

              {/* Normal Duration */}
              <div className="space-y-2">
                <Label
                  htmlFor="duration-normal"
                  className="text-sm font-medium"
                >
                  Normal
                  <span className="text-xs text-muted-foreground ml-2">
                    Standard transitions
                  </span>
                </Label>
                <div className="flex gap-2">
                  <Select
                    value={animation.duration.normal}
                    onValueChange={(value) =>
                      updateAnimation({
                        duration: { ...animation.duration, normal: value },
                      })
                    }
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {durationPresets.map((preset) => (
                        <SelectItem key={preset.value} value={preset.value}>
                          {preset.label} ({preset.value})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="duration-normal"
                    value={animation.duration.normal}
                    onChange={(e) =>
                      updateAnimation({
                        duration: {
                          ...animation.duration,
                          normal: e.target.value,
                        },
                      })
                    }
                    className="flex-1"
                    placeholder="300ms"
                  />
                </div>
              </div>

              {/* Slow Duration */}
              <div className="space-y-2">
                <Label htmlFor="duration-slow" className="text-sm font-medium">
                  Slow
                  <span className="text-xs text-muted-foreground ml-2">
                    Emphasized animations
                  </span>
                </Label>
                <div className="flex gap-2">
                  <Select
                    value={animation.duration.slow}
                    onValueChange={(value) =>
                      updateAnimation({
                        duration: { ...animation.duration, slow: value },
                      })
                    }
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {durationPresets.map((preset) => (
                        <SelectItem key={preset.value} value={preset.value}>
                          {preset.label} ({preset.value})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="duration-slow"
                    value={animation.duration.slow}
                    onChange={(e) =>
                      updateAnimation({
                        duration: {
                          ...animation.duration,
                          slow: e.target.value,
                        },
                      })
                    }
                    className="flex-1"
                    placeholder="500ms"
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Easing Functions */}
        <AccordionItem value="easing">
          <AccordionTrigger>
            <div className="flex items-center justify-between w-full pr-4">
              <span className="font-medium">Easing Functions</span>
              <span className="text-xs text-muted-foreground">
                Cubic Bezier
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <p className="text-sm text-muted-foreground">
                Define how animations accelerate and decelerate
              </p>

              {/* Linear Easing */}
              <div className="space-y-2">
                <Label htmlFor="easing-linear" className="text-sm font-medium">
                  Linear
                  <span className="text-xs text-muted-foreground ml-2">
                    Constant speed
                  </span>
                </Label>
                <div className="flex gap-2">
                  <Select
                    value={animation.easing.linear}
                    onValueChange={(value) =>
                      updateAnimation({
                        easing: { ...animation.easing, linear: value },
                      })
                    }
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {easingPresets.map((preset) => (
                        <SelectItem key={preset.value} value={preset.value}>
                          {preset.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="easing-linear"
                    value={animation.easing.linear}
                    onChange={(e) =>
                      updateAnimation({
                        easing: { ...animation.easing, linear: e.target.value },
                      })
                    }
                    className="flex-1"
                    placeholder="linear"
                  />
                </div>
              </div>

              {/* Ease In */}
              <div className="space-y-2">
                <Label htmlFor="easing-in" className="text-sm font-medium">
                  Ease In
                  <span className="text-xs text-muted-foreground ml-2">
                    Slow start, fast end
                  </span>
                </Label>
                <div className="flex gap-2">
                  <Select
                    value={animation.easing.in}
                    onValueChange={(value) =>
                      updateAnimation({
                        easing: { ...animation.easing, in: value },
                      })
                    }
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {easingPresets.map((preset) => (
                        <SelectItem key={preset.value} value={preset.value}>
                          {preset.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="easing-in"
                    value={animation.easing.in}
                    onChange={(e) =>
                      updateAnimation({
                        easing: { ...animation.easing, in: e.target.value },
                      })
                    }
                    className="flex-1"
                    placeholder="cubic-bezier(0.4, 0, 1, 1)"
                  />
                </div>
              </div>

              {/* Ease Out */}
              <div className="space-y-2">
                <Label htmlFor="easing-out" className="text-sm font-medium">
                  Ease Out
                  <span className="text-xs text-muted-foreground ml-2">
                    Fast start, slow end
                  </span>
                </Label>
                <div className="flex gap-2">
                  <Select
                    value={animation.easing.out}
                    onValueChange={(value) =>
                      updateAnimation({
                        easing: { ...animation.easing, out: value },
                      })
                    }
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {easingPresets.map((preset) => (
                        <SelectItem key={preset.value} value={preset.value}>
                          {preset.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="easing-out"
                    value={animation.easing.out}
                    onChange={(e) =>
                      updateAnimation({
                        easing: { ...animation.easing, out: e.target.value },
                      })
                    }
                    className="flex-1"
                    placeholder="cubic-bezier(0, 0, 0.2, 1)"
                  />
                </div>
              </div>

              {/* Ease In Out */}
              <div className="space-y-2">
                <Label htmlFor="easing-inOut" className="text-sm font-medium">
                  Ease In Out
                  <span className="text-xs text-muted-foreground ml-2">
                    Slow start and end
                  </span>
                </Label>
                <div className="flex gap-2">
                  <Select
                    value={animation.easing.inOut}
                    onValueChange={(value) =>
                      updateAnimation({
                        easing: { ...animation.easing, inOut: value },
                      })
                    }
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {easingPresets.map((preset) => (
                        <SelectItem key={preset.value} value={preset.value}>
                          {preset.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="easing-inOut"
                    value={animation.easing.inOut}
                    onChange={(e) =>
                      updateAnimation({
                        easing: { ...animation.easing, inOut: e.target.value },
                      })
                    }
                    className="flex-1"
                    placeholder="cubic-bezier(0.4, 0, 0.2, 1)"
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Animation Preview */}
        <AccordionItem value="preview">
          <AccordionTrigger>
            <div className="flex items-center justify-between w-full pr-4">
              <span className="font-medium">Preview</span>
              <span className="text-xs text-muted-foreground">Live Demo</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <p className="text-sm text-muted-foreground">
                Test your animation settings with interactive previews
              </p>

              {/* Fade Animation */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Fade</Label>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => playAnimation('fade')}
                  >
                    <Play className="h-3 w-3 mr-1" />
                    Play
                  </Button>
                </div>
                <div className="border rounded-lg p-8 bg-muted/50 flex items-center justify-center">
                  <div
                    className={`px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium ${
                      isAnimating === 'fade' ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{
                      transition: `opacity ${animation.duration.normal} ${animation.easing.inOut}`,
                    }}
                  >
                    Fade Animation
                  </div>
                </div>
              </div>

              {/* Slide Animation */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Slide</Label>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => playAnimation('slide')}
                  >
                    <Play className="h-3 w-3 mr-1" />
                    Play
                  </Button>
                </div>
                <div className="border rounded-lg p-8 bg-muted/50 flex items-center justify-center overflow-hidden">
                  <div
                    className={`px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium ${
                      isAnimating === 'slide'
                        ? '-translate-x-full'
                        : 'translate-x-0'
                    }`}
                    style={{
                      transition: `transform ${animation.duration.slow} ${animation.easing.out}`,
                    }}
                  >
                    Slide Animation
                  </div>
                </div>
              </div>

              {/* Scale Animation */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Scale</Label>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => playAnimation('scale')}
                  >
                    <Play className="h-3 w-3 mr-1" />
                    Play
                  </Button>
                </div>
                <div className="border rounded-lg p-8 bg-muted/50 flex items-center justify-center">
                  <div
                    className={`px-6 py-3 bg-accent text-accent-foreground rounded-md font-medium ${
                      isAnimating === 'scale' ? 'scale-0' : 'scale-100'
                    }`}
                    style={{
                      transition: `transform ${animation.duration.fast} ${animation.easing.in}`,
                    }}
                  >
                    Scale Animation
                  </div>
                </div>
              </div>

              {/* Bounce Animation (Spring) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Bounce</Label>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => playAnimation('bounce')}
                  >
                    <Play className="h-3 w-3 mr-1" />
                    Play
                  </Button>
                </div>
                <div className="border rounded-lg p-8 bg-muted/50 flex items-center justify-center">
                  <div
                    className={`px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium ${
                      isAnimating === 'bounce'
                        ? '-translate-y-8'
                        : 'translate-y-0'
                    }`}
                    style={{
                      transition: `transform ${animation.duration.normal} cubic-bezier(0.68, -0.55, 0.265, 1.55)`,
                    }}
                  >
                    Bounce Animation
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Usage Examples */}
        <AccordionItem value="usage">
          <AccordionTrigger>
            <div className="flex items-center justify-between w-full pr-4">
              <span className="font-medium">Usage Examples</span>
              <span className="text-xs text-muted-foreground">CSS</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              <p className="text-sm text-muted-foreground">
                How to use animation tokens in your CSS
              </p>

              <div className="rounded-lg border bg-muted/50 p-4 font-mono text-xs space-y-2">
                <div className="text-muted-foreground">
                  {/* Button hover transition */}
                </div>
                <div>
                  <span className="text-blue-600">.button</span> {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-purple-600">transition</span>:{' '}
                  <span className="text-green-600">all</span>{' '}
                  <span className="text-orange-600">var(--duration-fast)</span>{' '}
                  <span className="text-orange-600">var(--easing-out)</span>;
                </div>
                <div>{'}'}</div>

                <div className="text-muted-foreground pt-3">
                  {/* Modal slide-in */}
                </div>
                <div>
                  <span className="text-blue-600">.modal</span> {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-purple-600">transition</span>:{' '}
                  <span className="text-green-600">transform</span>{' '}
                  <span className="text-orange-600">
                    var(--duration-normal)
                  </span>{' '}
                  <span className="text-orange-600">var(--easing-in-out)</span>;
                </div>
                <div>{'}'}</div>

                <div className="text-muted-foreground pt-3">
                  {/* Toast fade-out */}
                </div>
                <div>
                  <span className="text-blue-600">.toast</span> {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-purple-600">transition</span>:{' '}
                  <span className="text-green-600">opacity</span>{' '}
                  <span className="text-orange-600">var(--duration-slow)</span>{' '}
                  <span className="text-orange-600">var(--easing-out)</span>;
                </div>
                <div>{'}'}</div>
              </div>

              <div className="text-xs text-muted-foreground space-y-1 pt-2">
                <p>
                  💡 <strong>Best Practices:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>
                    Use <strong>fast</strong> for micro-interactions (hover,
                    focus)
                  </li>
                  <li>
                    Use <strong>normal</strong> for standard UI transitions
                  </li>
                  <li>
                    Use <strong>slow</strong> for emphasized animations (modals,
                    drawers)
                  </li>
                  <li>
                    Use <strong>ease-out</strong> for entering elements
                  </li>
                  <li>
                    Use <strong>ease-in</strong> for exiting elements
                  </li>
                  <li>
                    Use <strong>ease-in-out</strong> for movements and
                    transforms
                  </li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
