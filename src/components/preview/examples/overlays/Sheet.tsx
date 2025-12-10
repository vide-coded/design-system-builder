import { Bell, Settings, Shield, User, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

/**
 * Sheet (slide-in panel) examples demonstrating various sheet patterns with design tokens.
 * Showcases side sheets from different directions and use cases.
 */
export function Sheet() {
  const [rightOpen, setRightOpen] = useState(false)
  const [leftOpen, setLeftOpen] = useState(false)
  const [topOpen, setTopOpen] = useState(false)

  return (
    <div className="space-y-8">
      {/* Right Sheet */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Right Sheet (Settings)
        </h3>
        <Button onClick={() => setRightOpen(true)} variant="outline">
          <Settings className="w-4 h-4 mr-2" />
          Open Settings
        </Button>

        {rightOpen && (
          <>
            <div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              onClick={() => setRightOpen(false)}
            />
            <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background border-l border-border shadow-lg z-50 animate-in slide-in-from-right duration-300">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <h2 className="text-lg font-semibold">Settings</h2>
                  <button
                    onClick={() => setRightOpen(false)}
                    className="rounded-md p-1 hover:bg-accent transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Profile
                      </h3>
                      <div className="space-y-2">
                        <Label htmlFor="sheet-name">Name</Label>
                        <Input id="sheet-name" defaultValue="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sheet-email">Email</Label>
                        <Input
                          id="sheet-email"
                          type="email"
                          defaultValue="john@example.com"
                        />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold flex items-center gap-2">
                        <Bell className="w-4 h-4" />
                        Notifications
                      </h3>
                      <div className="space-y-2">
                        <label className="flex items-center justify-between">
                          <span className="text-sm">Email notifications</span>
                          <input
                            type="checkbox"
                            defaultChecked
                            className="rounded"
                          />
                        </label>
                        <label className="flex items-center justify-between">
                          <span className="text-sm">Push notifications</span>
                          <input type="checkbox" className="rounded" />
                        </label>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        Security
                      </h3>
                      <Button variant="outline" size="sm" className="w-full">
                        Change Password
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        Two-Factor Authentication
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t border-border">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setRightOpen(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={() => setRightOpen(false)}
                      className="flex-1"
                    >
                      Save Changes
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Left Sheet */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Left Sheet (Navigation)
        </h3>
        <Button onClick={() => setLeftOpen(true)} variant="outline">
          Open Navigation
        </Button>

        {leftOpen && (
          <>
            <div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              onClick={() => setLeftOpen(false)}
            />
            <div className="fixed left-0 top-0 bottom-0 w-64 bg-background border-r border-border shadow-lg z-50 animate-in slide-in-from-left duration-300">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <h2 className="text-lg font-semibold">Menu</h2>
                  <button
                    onClick={() => setLeftOpen(false)}
                    className="rounded-md p-1 hover:bg-accent transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <nav className="flex-1 p-4 space-y-1">
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm"
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm"
                  >
                    Settings
                  </a>
                </nav>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Top Sheet */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Top Sheet (Notifications)
        </h3>
        <Button onClick={() => setTopOpen(true)} variant="outline">
          <Bell className="w-4 h-4 mr-2" />
          Show Notifications
        </Button>

        {topOpen && (
          <>
            <div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              onClick={() => setTopOpen(false)}
            />
            <div className="fixed top-0 left-0 right-0 max-h-96 bg-background border-b border-border shadow-lg z-50 animate-in slide-in-from-top duration-300">
              <div className="flex flex-col">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <h2 className="text-lg font-semibold">Notifications</h2>
                  <button
                    onClick={() => setTopOpen(false)}
                    className="rounded-md p-1 hover:bg-accent transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="overflow-y-auto max-h-80 p-4 space-y-3">
                  <div className="p-3 rounded-md border border-border hover:bg-accent transition-colors">
                    <p className="text-sm font-semibold">New message</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      You have a new message from Sarah
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      2 minutes ago
                    </p>
                  </div>
                  <div className="p-3 rounded-md border border-border hover:bg-accent transition-colors">
                    <p className="text-sm font-semibold">Task completed</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Design review has been completed
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      1 hour ago
                    </p>
                  </div>
                  <div className="p-3 rounded-md border border-border hover:bg-accent transition-colors">
                    <p className="text-sm font-semibold">System update</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      A new version is available
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      3 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
