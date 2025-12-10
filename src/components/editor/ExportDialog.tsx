/**
 * Export Dialog Component
 * Dialog with syntax-highlighted CSS and Tailwind config export
 * Includes validation warnings for accessibility and best practices
 */

import { AlertCircle, Check, Copy, Download, Info, XCircle } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { codeToHtml } from 'shiki'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useDesignSystem } from '@/hooks/use-design-system'
import { useUI } from '@/hooks/use-ui'
import { generateCSS, getCSSFileSize } from '@/lib/export/css-generator'
import {
  generateTailwindConfig,
  getTailwindConfigFileSize,
} from '@/lib/export/tailwind-generator'
import {
  type ValidationWarning,
  validateDesignSystem,
} from '@/lib/export/validators'
import { closeExportDialog, setExportFormat } from '@/stores/ui.store'

export function ExportDialog() {
  const ui = useUI()
  const { designSystem } = useDesignSystem()
  const [copied, setCopied] = useState(false)
  const [highlightedCode, setHighlightedCode] = useState<{
    css: string
    tailwind: string
  }>({ css: '', tailwind: '' })

  // Generate code
  const cssCode = generateCSS(designSystem)
  const tailwindCode = generateTailwindConfig(designSystem)

  // Get file sizes
  const cssSize = getCSSFileSize(cssCode)
  const tailwindSize = getTailwindConfigFileSize(tailwindCode)

  // Validate design system
  const validation = useMemo(
    () => validateDesignSystem(designSystem),
    [designSystem],
  )

  // Syntax highlight when dialog opens or code changes
  useEffect(() => {
    if (!ui.exportDialogOpen) return

    let cancelled = false

    // Highlight both formats
    Promise.all([
      codeToHtml(cssCode, {
        lang: 'css',
        theme: 'github-dark',
      }),
      codeToHtml(tailwindCode, {
        lang: 'javascript',
        theme: 'github-dark',
      }),
    ]).then(([cssHtml, tailwindHtml]) => {
      if (!cancelled) {
        setHighlightedCode({
          css: cssHtml,
          tailwind: tailwindHtml,
        })
      }
    })

    return () => {
      cancelled = true
    }
  }, [ui.exportDialogOpen, cssCode, tailwindCode])

  const handleCopy = async () => {
    const code = ui.exportFormat === 'css' ? cssCode : tailwindCode
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleDownload = () => {
    const code = ui.exportFormat === 'css' ? cssCode : tailwindCode
    const filename =
      ui.exportFormat === 'css' ? 'design-system.css' : 'tailwind.config.js'
    const blob = new Blob([code], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const activeCode = ui.exportFormat === 'css' ? cssCode : tailwindCode
  const activeHighlighted =
    ui.exportFormat === 'css' ? highlightedCode.css : highlightedCode.tailwind
  const activeSize = ui.exportFormat === 'css' ? cssSize : tailwindSize

  // Loading state based on whether code is highlighted
  const isLoading = ui.exportDialogOpen && !activeHighlighted

  return (
    <Dialog open={ui.exportDialogOpen} onOpenChange={closeExportDialog}>
      <DialogContent className="max-w-4xl max-h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Export Design System</DialogTitle>
          <DialogDescription>
            Copy or download your design system as CSS variables or Tailwind
            config
          </DialogDescription>
        </DialogHeader>

        {/* Validation Warnings */}
        {validation.warnings.length > 0 && (
          <ValidationWarnings warnings={validation.warnings} />
        )}

        <Tabs
          value={ui.exportFormat}
          onValueChange={(v) => setExportFormat(v as 'css' | 'tailwind')}
          className="flex-1 flex flex-col overflow-hidden"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="css">CSS Variables</TabsTrigger>
            <TabsTrigger value="tailwind">Tailwind Config</TabsTrigger>
          </TabsList>

          <div className="flex-1 overflow-hidden">
            <TabsContent
              value="css"
              className="h-full flex flex-col mt-4 space-y-4"
            >
              <ExportContent
                code={activeCode}
                highlightedCode={activeHighlighted}
                size={activeSize}
                isLoading={isLoading}
                copied={copied}
                onCopy={handleCopy}
                onDownload={handleDownload}
                description="Production-ready CSS with custom properties and utility classes"
              />
            </TabsContent>

            <TabsContent
              value="tailwind"
              className="h-full flex flex-col mt-4 space-y-4"
            >
              <ExportContent
                code={activeCode}
                highlightedCode={activeHighlighted}
                size={activeSize}
                isLoading={isLoading}
                copied={copied}
                onCopy={handleCopy}
                onDownload={handleDownload}
                description="Tailwind CSS v3+ configuration file (ESM format)"
              />
            </TabsContent>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

interface ExportContentProps {
  code: string
  highlightedCode: string
  size: number
  isLoading: boolean
  copied: boolean
  onCopy: () => void
  onDownload: () => void
  description: string
}

function ExportContent({
  code,
  highlightedCode,
  size,
  isLoading,
  copied,
  onCopy,
  onDownload,
  description,
}: ExportContentProps) {
  return (
    <>
      {/* Header with actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-muted-foreground">{description}</p>
          <p className="text-xs text-muted-foreground">
            File size: <span className="font-mono font-medium">{size} KB</span>
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onCopy}
            disabled={isLoading}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </>
            )}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onDownload}
            disabled={isLoading}
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      {/* Code preview */}
      <div className="flex-1 relative overflow-hidden rounded-lg border border-border">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-sm text-muted-foreground">
                Generating code...
              </p>
            </div>
          </div>
        ) : (
          <div className="h-full overflow-auto">
            {highlightedCode ? (
              <div
                className="p-4 text-sm overflow-auto max-h-[50vh] bg-[#0d1117]"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: Shiki generates safe HTML
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
              />
            ) : (
              <pre className="p-4 text-sm overflow-auto max-h-[50vh] bg-muted">
                <code>{code}</code>
              </pre>
            )}
          </div>
        )}
      </div>
    </>
  )
}

interface ValidationWarningsProps {
  warnings: ValidationWarning[]
}

function ValidationWarnings({ warnings }: ValidationWarningsProps) {
  const errors = warnings.filter((w) => w.severity === 'error')
  const warningsList = warnings.filter((w) => w.severity === 'warning')
  const infos = warnings.filter((w) => w.severity === 'info')

  return (
    <ScrollArea className="max-h-48">
      <div className="space-y-2">
        {errors.length > 0 && (
          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertTitle>
              {errors.length} {errors.length === 1 ? 'Error' : 'Errors'} Found
            </AlertTitle>
            <AlertDescription className="space-y-1 mt-2">
              {errors.map((warning, i) => (
                <ValidationWarningItem
                  key={`error-${
                    // biome-ignore lint/suspicious/noArrayIndexKey: Stable list during render
                    i
                  }`}
                  warning={warning}
                />
              ))}
            </AlertDescription>
          </Alert>
        )}

        {warningsList.length > 0 && (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>
              {warningsList.length}{' '}
              {warningsList.length === 1 ? 'Warning' : 'Warnings'}
            </AlertTitle>
            <AlertDescription className="space-y-1 mt-2">
              {warningsList.map((warning, i) => (
                <ValidationWarningItem
                  key={`warning-${
                    // biome-ignore lint/suspicious/noArrayIndexKey: Stable list during render
                    i
                  }`}
                  warning={warning}
                />
              ))}
            </AlertDescription>
          </Alert>
        )}

        {infos.length > 0 && (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>
              {infos.length} {infos.length === 1 ? 'Suggestion' : 'Suggestions'}
            </AlertTitle>
            <AlertDescription className="space-y-1 mt-2">
              {infos.map((warning, i) => (
                <ValidationWarningItem
                  key={`info-${
                    // biome-ignore lint/suspicious/noArrayIndexKey: Stable list during render
                    i
                  }`}
                  warning={warning}
                />
              ))}
            </AlertDescription>
          </Alert>
        )}
      </div>
    </ScrollArea>
  )
}

interface ValidationWarningItemProps {
  warning: ValidationWarning
}

function ValidationWarningItem({ warning }: ValidationWarningItemProps) {
  return (
    <div className="text-sm">
      <p className="font-medium">{warning.message}</p>
      {warning.suggestion && (
        <p className="text-muted-foreground mt-0.5">{warning.suggestion}</p>
      )}
      {warning.affectedToken && (
        <p className="text-xs font-mono text-muted-foreground mt-0.5">
          Token: {warning.affectedToken}
        </p>
      )}
    </div>
  )
}
