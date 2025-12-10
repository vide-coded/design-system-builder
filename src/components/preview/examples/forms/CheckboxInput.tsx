import { Label } from '@/components/ui/label'

/**
 * Checkbox Examples
 *
 * Demonstrates checkbox inputs:
 * - Single checkbox
 * - Multiple checkboxes
 * - With descriptions
 * - Disabled state
 * - Checked by default
 */
export function CheckboxInput() {
  return (
    <div className="space-y-6 max-w-md">
      {/* Single Checkbox */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="terms"
          className="h-4 w-4 rounded border-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
        />
        <Label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </Label>
      </div>

      {/* Checkbox Group */}
      <div className="space-y-3">
        <Label className="text-base">Notification Preferences</Label>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="email-notif"
              defaultChecked
              className="h-4 w-4 mt-0.5 rounded border-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
            <div className="space-y-1 leading-none">
              <Label htmlFor="email-notif" className="text-sm font-medium">
                Email notifications
              </Label>
              <p className="text-sm text-muted-foreground">
                Receive emails about your account activity
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="push-notif"
              className="h-4 w-4 mt-0.5 rounded border-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
            <div className="space-y-1 leading-none">
              <Label htmlFor="push-notif" className="text-sm font-medium">
                Push notifications
              </Label>
              <p className="text-sm text-muted-foreground">
                Receive push notifications on your device
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="sms-notif"
              className="h-4 w-4 mt-0.5 rounded border-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
            <div className="space-y-1 leading-none">
              <Label htmlFor="sms-notif" className="text-sm font-medium">
                SMS notifications
              </Label>
              <p className="text-sm text-muted-foreground">
                Receive text messages for important updates
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disabled Checkboxes */}
      <div className="space-y-3">
        <Label className="text-base opacity-50">Required Features</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="feature-1"
              defaultChecked
              disabled
              className="h-4 w-4 rounded border-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50"
            />
            <Label htmlFor="feature-1" className="opacity-50">
              Core functionality (required)
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="feature-2"
              defaultChecked
              disabled
              className="h-4 w-4 rounded border-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50"
            />
            <Label htmlFor="feature-2" className="opacity-50">
              Security features (required)
            </Label>
          </div>
        </div>
      </div>

      {/* Checkbox List */}
      <div className="space-y-3">
        <Label className="text-base">Select Technologies</Label>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="tech-react"
              defaultChecked
              className="h-4 w-4 rounded border-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
            <Label htmlFor="tech-react">React</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="tech-vue"
              className="h-4 w-4 rounded border-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
            <Label htmlFor="tech-vue">Vue</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="tech-angular"
              className="h-4 w-4 rounded border-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
            <Label htmlFor="tech-angular">Angular</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="tech-svelte"
              defaultChecked
              className="h-4 w-4 rounded border-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
            <Label htmlFor="tech-svelte">Svelte</Label>
          </div>
        </div>
      </div>
    </div>
  )
}
