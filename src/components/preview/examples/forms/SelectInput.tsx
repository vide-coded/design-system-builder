import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

/**
 * Select Examples
 *
 * Demonstrates dropdown select:
 * - Standard select with options
 * - With placeholder
 * - With groups
 * - Disabled state
 * - Error state
 */
export function SelectInput() {
  return (
    <div className="space-y-6 max-w-md">
      {/* Standard Select */}
      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <Select defaultValue="us">
          <SelectTrigger id="country">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="au">Australia</SelectItem>
            <SelectItem value="de">Germany</SelectItem>
            <SelectItem value="fr">France</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* With Placeholder */}
      <div className="space-y-2">
        <Label htmlFor="role">Role</Label>
        <Select>
          <SelectTrigger id="role">
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="developer">Developer</SelectItem>
            <SelectItem value="designer">Designer</SelectItem>
            <SelectItem value="manager">Product Manager</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground">
          Choose the role that best describes you
        </p>
      </div>

      {/* Grouped Select */}
      <div className="space-y-2">
        <Label htmlFor="framework">Framework</Label>
        <Select defaultValue="react">
          <SelectTrigger id="framework">
            <SelectValue placeholder="Select a framework" />
          </SelectTrigger>
          <SelectContent>
            <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
              JavaScript
            </div>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="vue">Vue</SelectItem>
            <SelectItem value="angular">Angular</SelectItem>
            <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground mt-2">
              TypeScript
            </div>
            <SelectItem value="next">Next.js</SelectItem>
            <SelectItem value="nuxt">Nuxt.js</SelectItem>
            <SelectItem value="svelte">SvelteKit</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Disabled Select */}
      <div className="space-y-2">
        <Label htmlFor="plan" className="opacity-50">
          Current Plan
        </Label>
        <Select disabled defaultValue="pro">
          <SelectTrigger id="plan">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="free">Free</SelectItem>
            <SelectItem value="pro">Pro</SelectItem>
            <SelectItem value="enterprise">Enterprise</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground">
          Contact support to change your plan
        </p>
      </div>
    </div>
  )
}
