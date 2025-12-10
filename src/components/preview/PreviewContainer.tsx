/**
 * Preview Container Component
 * Manages iframe, postMessage communication, zoom, and viewport controls
 */

import {
  Maximize,
  Monitor,
  Smartphone,
  Tablet,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useDesignSystem } from '@/hooks/use-design-system'
import { useUI } from '@/hooks/use-ui'
import { createDebouncedStyleInjector } from '@/lib/preview/style-injector'
import { cn } from '@/lib/utils'
import { setPreviewScale, setViewportSize } from '@/stores/ui.store'

const ZOOM_LEVELS = [0.5, 0.75, 1, 1.25, 1.5] as const
const VIEWPORT_SIZES = {
  mobile: { width: 375, label: 'Mobile', icon: Smartphone },
  tablet: { width: 768, label: 'Tablet', icon: Tablet },
  desktop: { width: 1024, label: 'Desktop', icon: Monitor },
  auto: { width: null, label: 'Auto', icon: Maximize },
} as const

export function PreviewContainer() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isReady, setIsReady] = useState(false)
  const { designSystem } = useDesignSystem()
  const uiState = useUI()
  const { previewScale, viewportSize } = uiState

  // Listen for preview ready message
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'preview-ready') {
        setIsReady(true)
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  // Inject styles into iframe when design system changes
  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe || !isReady) return

    const injectStyles = createDebouncedStyleInjector(iframe)

    // Inject styles whenever design system changes
    injectStyles(designSystem)
  }, [designSystem, isReady])

  // Persist zoom and viewport to localStorage
  useEffect(() => {
    localStorage.setItem('preview-scale', previewScale.toString())
  }, [previewScale])

  useEffect(() => {
    localStorage.setItem('preview-viewport', viewportSize)
  }, [viewportSize])

  // Load persisted preferences on mount
  useEffect(() => {
    const savedScale = localStorage.getItem('preview-scale')
    const savedViewport = localStorage.getItem('preview-viewport')

    if (savedScale) {
      const scale = Number.parseFloat(savedScale)
      if (!Number.isNaN(scale)) {
        setPreviewScale(scale)
      }
    }

    if (savedViewport && savedViewport in VIEWPORT_SIZES) {
      setViewportSize(savedViewport as keyof typeof VIEWPORT_SIZES)
    }
  }, [])

  const handleZoomIn = () => {
    const currentIndex = ZOOM_LEVELS.indexOf(
      previewScale as (typeof ZOOM_LEVELS)[number],
    )
    if (currentIndex < ZOOM_LEVELS.length - 1) {
      setPreviewScale(ZOOM_LEVELS[currentIndex + 1])
    }
  }

  const handleZoomOut = () => {
    const currentIndex = ZOOM_LEVELS.indexOf(
      previewScale as (typeof ZOOM_LEVELS)[number],
    )
    if (currentIndex > 0) {
      setPreviewScale(ZOOM_LEVELS[currentIndex - 1])
    }
  }

  const handleZoomReset = () => {
    setPreviewScale(1)
  }

  const handleViewportChange = (value: string) => {
    setViewportSize(value as keyof typeof VIEWPORT_SIZES)
  }

  const currentViewport =
    VIEWPORT_SIZES[viewportSize as keyof typeof VIEWPORT_SIZES]
  const ViewportIcon = currentViewport.icon
  const canZoomIn = previewScale < ZOOM_LEVELS[ZOOM_LEVELS.length - 1]
  const canZoomOut = previewScale > ZOOM_LEVELS[0]

  return (
    <div className="flex-1 flex flex-col bg-muted/30">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-3 sm:px-4 py-2 gap-2 sm:gap-0 border-b bg-background/95 backdrop-blur">
        {/* Viewport Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          <TooltipProvider>
            <Select value={viewportSize} onValueChange={handleViewportChange}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SelectTrigger className="w-[120px] sm:w-[140px] min-h-11 text-xs">
                    <SelectValue>
                      <div className="flex items-center gap-2">
                        <ViewportIcon className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">
                          {currentViewport.label}
                        </span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Viewport size</p>
                </TooltipContent>
              </Tooltip>
              <SelectContent>
                {Object.entries(VIEWPORT_SIZES).map(
                  ([key, { label, icon: Icon }]) => (
                    <SelectItem key={key} value={key}>
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span>{label}</span>
                        {key !== 'auto' && (
                          <span className="text-muted-foreground text-xs ml-1">
                            (
                            {
                              VIEWPORT_SIZES[key as keyof typeof VIEWPORT_SIZES]
                                .width
                            }
                            px)
                          </span>
                        )}
                      </div>
                    </SelectItem>
                  ),
                )}
              </SelectContent>
            </Select>
          </TooltipProvider>

          <Separator orientation="vertical" className="h-6" />

          {/* Zoom Controls */}
          <div className="flex items-center gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="min-h-11 min-w-11"
                    onClick={handleZoomOut}
                    disabled={!canZoomOut}
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Zoom out</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="min-h-11 min-w-[60px] text-xs font-mono"
                    onClick={handleZoomReset}
                  >
                    {Math.round(previewScale * 100)}%
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reset zoom (100%)</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="min-h-11 min-w-11"
                    onClick={handleZoomIn}
                    disabled={!canZoomIn}
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Zoom in</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div
            className={cn(
              'w-2 h-2 rounded-full',
              isReady ? 'bg-green-500 animate-pulse' : 'bg-yellow-500',
            )}
          />
          <span>{isReady ? 'Live Preview' : 'Loading...'}</span>
        </div>
      </div>

      {/* Iframe Container */}
      <div className="flex-1 overflow-auto bg-muted/30">
        <div
          className={cn(
            'min-h-full flex justify-center transition-all duration-300',
            viewportSize !== 'auto' && 'py-8',
          )}
        >
          <div
            className={cn(
              'w-full transition-all duration-300',
              viewportSize !== 'auto' && 'shadow-lg',
            )}
            style={{
              maxWidth: currentViewport.width
                ? `${currentViewport.width}px`
                : undefined,
            }}
          >
            <iframe
              ref={iframeRef}
              src="/preview"
              title="Component Preview"
              className={cn(
                'w-full border-0 bg-background transition-transform duration-200',
                viewportSize !== 'auto' ? 'rounded-lg' : 'min-h-screen',
              )}
              style={{
                height: viewportSize !== 'auto' ? '800px' : '100vh',
                transform: `scale(${previewScale})`,
                transformOrigin: 'top center',
              }}
              sandbox="allow-same-origin allow-scripts"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
