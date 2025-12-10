import { Calendar, Settings, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'

/**
 * Popover examples demonstrating various popover patterns with design tokens.
 * Showcases menu popovers, form popovers, and info popovers.
 */
export function PopoverExample() {
  return (
    <div className="space-y-8">
      {/* Simple Popover */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Simple Popover
        </h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Quick Info</h4>
              <p className="text-sm text-muted-foreground">
                This is a simple popover with some information. Click outside to
                close.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Form Popover */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Form Popover
        </h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <User className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Edit Profile</h4>
                <p className="text-xs text-muted-foreground">
                  Update your profile information.
                </p>
              </div>
              <div className="grid gap-3">
                <div className="grid gap-2">
                  <Label htmlFor="username" className="text-xs">
                    Username
                  </Label>
                  <Input
                    id="username"
                    defaultValue="@johndoe"
                    className="h-8"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email-popover" className="text-xs">
                    Email
                  </Label>
                  <Input
                    id="email-popover"
                    defaultValue="john@example.com"
                    className="h-8"
                  />
                </div>
                <Button size="sm" className="mt-2">
                  Save Changes
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Menu Popover */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Menu Popover
        </h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-0">
            <div className="py-1">
              <button className="flex w-full items-center px-3 py-2 text-sm hover:bg-accent transition-colors">
                <User className="w-4 h-4 mr-2" />
                Account
              </button>
              <button className="flex w-full items-center px-3 py-2 text-sm hover:bg-accent transition-colors">
                <Settings className="w-4 h-4 mr-2" />
                Preferences
              </button>
              <Separator className="my-1" />
              <button className="flex w-full items-center px-3 py-2 text-sm hover:bg-accent transition-colors text-destructive">
                Sign Out
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Date Picker Popover */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Date Picker Popover
        </h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Select Date
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Choose a date</h4>
              <div className="grid grid-cols-7 gap-1 text-center text-xs">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                  <div
                    key={day}
                    className="font-semibold text-muted-foreground py-1"
                  >
                    {day}
                  </div>
                ))}
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 2
                  if (day < 1 || day > 30) {
                    return <div key={i} className="h-8" />
                  }
                  return (
                    <button
                      key={i}
                      className="h-8 w-8 rounded-md hover:bg-accent transition-colors flex items-center justify-center text-sm"
                    >
                      {day}
                    </button>
                  )
                })}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
