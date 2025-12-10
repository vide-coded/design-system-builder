import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

/**
 * Modal examples demonstrating various dialog patterns with design tokens.
 * Showcases simple modals, form modals, and confirmation dialogs.
 */
export function Modal() {
  const [isDestructiveOpen, setIsDestructiveOpen] = useState(false)

  return (
    <div className="space-y-8">
      {/* Simple Modal */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Simple Modal
        </h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">Open Modal</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Modal Title</DialogTitle>
              <DialogDescription>
                This is a simple modal dialog. It can contain any content you
                need to display.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground">
                Modal content goes here. You can add text, images, forms, or any
                other components.
              </p>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button variant="default">Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Form Modal */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Form Modal
        </h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Create Account</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create Account</DialogTitle>
              <DialogDescription>
                Enter your details to create a new account.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button variant="default">Create Account</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Confirmation Dialog */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Confirmation Dialog
        </h3>
        <Dialog open={isDestructiveOpen} onOpenChange={setIsDestructiveOpen}>
          <DialogTrigger asChild>
            <Button variant="destructive">Delete Item</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                item and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsDestructiveOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={() => setIsDestructiveOpen(false)}
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Scrollable Modal */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Scrollable Modal
        </h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">Terms of Service</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[80vh]">
            <DialogHeader>
              <DialogTitle>Terms of Service</DialogTitle>
              <DialogDescription>
                Please read and accept our terms of service.
              </DialogDescription>
            </DialogHeader>
            <div className="overflow-y-auto max-h-[50vh] py-4">
              <div className="space-y-4 text-sm text-foreground">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Decline</Button>
              <Button variant="default">Accept</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
