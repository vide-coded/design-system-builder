import { formatDistanceToNow } from 'date-fns'
import {
  AlertCircle,
  Check,
  Copy,
  Edit2,
  FileText,
  Palette,
  Plus,
  Trash2,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { useDesignSystem } from '@/hooks/use-design-system'
import { useStorageManager } from '@/hooks/use-persistence'
import { getPresetById, presetMetadata } from '@/lib/design-tokens/presets'

interface DesignsManagerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DesignsManager({ open, onOpenChange }: DesignsManagerProps) {
  const {
    getDesigns,
    loadDesign,
    deleteDesign,
    duplicateDesign,
    renameDesign,
    createNewDesign,
    getCurrentId,
  } = useStorageManager()

  const [designs, setDesigns] = useState(getDesigns())
  const [currentId, setCurrentId] = useState(getCurrentId())
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingName, setEditingName] = useState('')
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [loadingPreset, setLoadingPreset] = useState<string | null>(null)

  const { loadDesignSystem } = useDesignSystem()

  // Refresh designs list
  const refreshDesigns = () => {
    setDesigns(getDesigns())
    setCurrentId(getCurrentId())
  }

  // Create new design
  const handleCreateNew = () => {
    createNewDesign()
    refreshDesigns()
  }

  // Load design
  const handleLoadDesign = (id: string) => {
    loadDesign(id)
    setCurrentId(id)
    onOpenChange(false)
  }

  // Start rename
  const handleStartRename = (id: string, name: string) => {
    setEditingId(id)
    setEditingName(name)
  }

  // Confirm rename
  const handleConfirmRename = () => {
    if (editingId && editingName.trim()) {
      renameDesign(editingId, editingName.trim())
      setEditingId(null)
      setEditingName('')
      refreshDesigns()
    }
  }

  // Cancel rename
  const handleCancelRename = () => {
    setEditingId(null)
    setEditingName('')
  }

  // Duplicate design
  const handleDuplicate = (id: string) => {
    duplicateDesign(id)
    refreshDesigns()
  }

  // Delete design
  const handleDelete = (id: string) => {
    if (designs.length <= 1) {
      alert('Cannot delete the last design. Create a new one first.')
      return
    }

    if (deletingId === id) {
      // Confirm delete
      deleteDesign(id)
      setDeletingId(null)
      refreshDesigns()
    } else {
      // Ask for confirmation
      setDeletingId(id)
      setTimeout(() => setDeletingId(null), 3000) // Reset after 3s
    }
  }

  // Load preset
  const handleLoadPreset = (presetId: string) => {
    const preset = getPresetById(presetId)
    if (!preset) return

    // Confirm before loading
    const confirmed = window.confirm(
      `Load "${preset.name}" preset? This will replace your current design system.`,
    )

    if (confirmed) {
      setLoadingPreset(presetId)
      loadDesignSystem(preset)
      setTimeout(() => {
        setLoadingPreset(null)
        onOpenChange(false)
      }, 500)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Manage Designs</DialogTitle>
          <DialogDescription>
            Create, switch, rename, duplicate, or delete your saved design
            systems.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-muted-foreground">
            {designs.length} design{designs.length !== 1 ? 's' : ''} saved
          </span>
          <Button onClick={handleCreateNew} size="sm">
            <Plus className="w-4 h-4 mr-2" />
            New Design
          </Button>
        </div>

        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-3">
            {designs.length === 0 ? (
              <Alert>
                <AlertCircle className="w-4 h-4" />
                <AlertDescription>
                  No saved designs. Click "New Design" to create one.
                </AlertDescription>
              </Alert>
            ) : (
              designs.map((design) => {
                const isActive = design.id === currentId
                const isEditing = editingId === design.id
                const isDeleting = deletingId === design.id

                return (
                  <div
                    key={design.id}
                    className={`
                      border rounded-lg p-4 transition-colors
                      ${isActive ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}
                    `}
                  >
                    <div className="flex items-start justify-between gap-4">
                      {/* Left: Name and metadata */}
                      <div className="flex-1 min-w-0">
                        {isEditing ? (
                          <div className="flex items-center gap-2">
                            <Input
                              value={editingName}
                              onChange={(e) => setEditingName(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') handleConfirmRename()
                                if (e.key === 'Escape') handleCancelRename()
                              }}
                              autoFocus
                              className="h-8 text-sm"
                            />
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={handleConfirmRename}
                              className="h-8 w-8 p-0"
                            >
                              <Check className="w-4 h-4 text-green-600" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={handleCancelRename}
                              className="h-8 w-8 p-0"
                            >
                              <X className="w-4 h-4 text-red-600" />
                            </Button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            className="cursor-pointer text-left w-full"
                            onClick={() =>
                              !isActive && handleLoadDesign(design.id)
                            }
                            disabled={isActive}
                          >
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
                              <h3 className="font-medium truncate">
                                {design.name}
                              </h3>
                              {isActive && (
                                <span className="text-xs text-primary font-medium">
                                  Active
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                              Created{' '}
                              {formatDistanceToNow(new Date(design.createdAt), {
                                addSuffix: true,
                              })}
                              {design.updatedAt !== design.createdAt && (
                                <>
                                  {' • '}Updated{' '}
                                  {formatDistanceToNow(
                                    new Date(design.updatedAt),
                                    {
                                      addSuffix: true,
                                    },
                                  )}
                                </>
                              )}
                            </p>
                          </button>
                        )}
                      </div>

                      {/* Right: Actions */}
                      {!isEditing && (
                        <div className="flex items-center gap-1">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() =>
                              handleStartRename(design.id, design.name)
                            }
                            className="h-8 w-8 p-0"
                            title="Rename"
                          >
                            <Edit2 className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDuplicate(design.id)}
                            className="h-8 w-8 p-0"
                            title="Duplicate"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDelete(design.id)}
                            className={`h-8 w-8 p-0 ${
                              isDeleting
                                ? 'text-red-600 hover:text-red-700'
                                : ''
                            }`}
                            title={
                              isDeleting ? 'Click again to confirm' : 'Delete'
                            }
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </div>

                    {isDeleting && (
                      <Alert variant="destructive" className="mt-3">
                        <AlertCircle className="w-4 h-4" />
                        <AlertDescription className="text-sm">
                          Click delete again to confirm. This cannot be undone.
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                )
              })
            )}
          </div>
        </ScrollArea>

        {/* Presets section */}
        <div className="pt-4 border-t">
          <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
            <Palette className="w-4 h-4" />
            Load Preset
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {presetMetadata.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => handleLoadPreset(preset.id)}
                disabled={loadingPreset === preset.id}
                className="flex items-start gap-3 p-3 rounded-md border hover:border-primary hover:bg-accent/50 transition-colors text-left disabled:opacity-50"
              >
                <div className="flex gap-1 mt-1">
                  {[
                    preset.preview.primaryColor,
                    preset.preview.secondaryColor,
                    preset.preview.accentColor,
                  ].map((color) => (
                    <div
                      key={color}
                      className="w-4 h-4 rounded border shrink-0"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{preset.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {preset.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <Separator className="my-4" />

        {/* Storage info */}
        <div>
          <p className="text-xs text-muted-foreground">
            Designs are saved to your browser's localStorage. They will persist
            until you clear browser data.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
