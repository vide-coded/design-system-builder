import {
  ChevronDown,
  CreditCard,
  LogOut,
  Plus,
  Settings,
  User,
  Users,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

/**
 * Dropdown menu examples demonstrating various dropdown patterns with design tokens.
 * Showcases navigation dropdowns, action menus, and user menus.
 */
export function Dropdown() {
  return (
    <div className="space-y-8">
      {/* Simple Dropdown */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Simple Dropdown
        </h3>
        <div className="relative inline-block group">
          <Button variant="outline">
            Options
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-popover border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-1">
              <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors">
                Option 1
              </button>
              <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors">
                Option 2
              </button>
              <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors">
                Option 3
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* User Menu Dropdown */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          User Menu Dropdown
        </h3>
        <div className="relative inline-block group">
          <Button variant="outline" className="gap-2">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-semibold">
              JD
            </div>
            John Doe
            <ChevronDown className="w-4 h-4" />
          </Button>
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-popover border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-1">
              <div className="px-4 py-2">
                <p className="text-sm font-semibold">John Doe</p>
                <p className="text-xs text-muted-foreground">
                  john@example.com
                </p>
              </div>
              <Separator className="my-1" />
              <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors">
                <User className="w-4 h-4 mr-2" />
                Profile
              </button>
              <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors">
                <CreditCard className="w-4 h-4 mr-2" />
                Billing
              </button>
              <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </button>
              <Separator className="my-1" />
              <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors text-destructive">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Action Menu Dropdown */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Action Menu Dropdown
        </h3>
        <div className="relative inline-block group">
          <Button variant="default">
            <Plus className="w-4 h-4 mr-2" />
            New
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-popover border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-1">
              <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors">
                <User className="w-4 h-4 mr-2" />
                New User
              </button>
              <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors">
                <Users className="w-4 h-4 mr-2" />
                New Team
              </button>
              <Separator className="my-1" />
              <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors">
                Import from file
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Nested Dropdown */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Nested Dropdown
        </h3>
        <div className="relative inline-block group">
          <Button variant="outline">
            File
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-popover border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-1">
              <button className="flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-accent transition-colors">
                New
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </button>
              <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors">
                Open...
                <span className="ml-auto text-xs text-muted-foreground">
                  ⌘O
                </span>
              </button>
              <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors">
                Save
                <span className="ml-auto text-xs text-muted-foreground">
                  ⌘S
                </span>
              </button>
              <Separator className="my-1" />
              <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-accent transition-colors">
                Export...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
