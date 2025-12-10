import { Label } from '@/components/ui/label'

/**
 * Textarea Examples
 *
 * Demonstrates multi-line text input:
 * - Standard textarea with label
 * - With character count
 * - Error state
 * - Disabled state
 * - Auto-resize behavior
 */
export function Textarea() {
  return (
    <div className="space-y-6 max-w-md">
      {/* Standard Textarea */}
      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <textarea
          id="bio"
          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Tell us about yourself..."
        />
        <p className="text-sm text-muted-foreground">
          Brief description for your profile
        </p>
      </div>

      {/* With Character Count */}
      <div className="space-y-2">
        <Label htmlFor="description">Project Description</Label>
        <textarea
          id="description"
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Describe your project..."
          maxLength={200}
          defaultValue="An innovative design system builder"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Maximum 200 characters</span>
          <span>44 / 200</span>
        </div>
      </div>

      {/* Error State */}
      <div className="space-y-2">
        <Label htmlFor="message-error" className="text-destructive">
          Message
        </Label>
        <textarea
          id="message-error"
          className="flex min-h-[100px] w-full rounded-md border border-destructive bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Enter your message..."
          defaultValue="Hi"
        />
        <p className="text-sm text-destructive">
          Message must be at least 10 characters
        </p>
      </div>

      {/* Disabled State */}
      <div className="space-y-2">
        <Label htmlFor="readonly" className="opacity-50">
          Terms & Conditions
        </Label>
        <textarea
          id="readonly"
          className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          disabled
          defaultValue="By using this service, you agree to our terms and conditions. This document is read-only and cannot be modified."
        />
      </div>
    </div>
  )
}
