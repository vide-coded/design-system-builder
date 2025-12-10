import { Label } from '@/components/ui/label'

/**
 * Radio Button Examples
 *
 * Demonstrates radio inputs for single selection
 */
export function RadioInput() {
  return (
    <div className="space-y-6 max-w-md">
      <div className="space-y-3">
        <Label className="text-base">Select Plan</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="plan-free"
              name="plan"
              value="free"
              defaultChecked
              className="h-4 w-4 text-primary focus:ring-2 focus:ring-ring"
            />
            <Label htmlFor="plan-free">Free - $0/month</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="plan-pro"
              name="plan"
              value="pro"
              className="h-4 w-4 text-primary focus:ring-2 focus:ring-ring"
            />
            <Label htmlFor="plan-pro">Pro - $9/month</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="plan-enterprise"
              name="plan"
              value="enterprise"
              className="h-4 w-4 text-primary focus:ring-2 focus:ring-ring"
            />
            <Label htmlFor="plan-enterprise">Enterprise - $99/month</Label>
          </div>
        </div>
      </div>
    </div>
  )
}
