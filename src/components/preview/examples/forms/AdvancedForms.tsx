import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SwitchInput() {
  return (
    <div className="space-y-4 max-w-md">
      <div className="flex items-center justify-between">
        <div>
          <Label>Dark Mode</Label>
          <p className="text-sm text-muted-foreground">Enable dark theme</p>
        </div>
        <input
          type="checkbox"
          className="relative h-6 w-11 appearance-none rounded-full bg-input after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-background after:transition-all checked:bg-primary checked:after:left-[22px]"
        />
      </div>
    </div>
  )
}

export function FileUpload() {
  return (
    <div className="space-y-4 max-w-md">
      <Label htmlFor="file">Upload File</Label>
      <div className="flex items-center gap-2">
        <Input id="file" type="file" />
      </div>
    </div>
  )
}

export function DatePicker() {
  return (
    <div className="space-y-4 max-w-md">
      <Label htmlFor="date">Select Date</Label>
      <Input id="date" type="date" />
    </div>
  )
}

export function SearchInput() {
  return (
    <div className="space-y-4 max-w-md">
      <div className="relative">
        <Input type="search" placeholder="Search..." className="pl-10" />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <title>Search</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  )
}

export function TagsInput() {
  return (
    <div className="space-y-4 max-w-md">
      <Label>Tags</Label>
      <div className="flex flex-wrap gap-2 p-2 border rounded-md">
        <span className="px-2 py-1 text-sm bg-secondary rounded">React</span>
        <span className="px-2 py-1 text-sm bg-secondary rounded">
          TypeScript
        </span>
        <Input
          type="text"
          placeholder="Add tag..."
          className="flex-1 border-0 p-0 min-w-[100px]"
        />
      </div>
    </div>
  )
}

export function PasswordInput() {
  return (
    <div className="space-y-4 max-w-md">
      <Label htmlFor="password">Password</Label>
      <div className="relative">
        <Input id="password" type="password" placeholder="Enter password" />
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full px-3"
        >
          Show
        </Button>
      </div>
    </div>
  )
}

export function FormValidation() {
  return (
    <div className="space-y-4 max-w-md p-4 border rounded-lg">
      <h3 className="text-lg font-semibold">Sign Up Form</h3>
      <div className="space-y-2">
        <Label htmlFor="val-email">Email</Label>
        <Input
          id="val-email"
          type="email"
          className="border-success"
          defaultValue="user@example.com"
        />
        <p className="text-sm text-success">✓ Email is valid</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="val-pass" className="text-destructive">
          Password
        </Label>
        <Input
          id="val-pass"
          type="password"
          className="border-destructive"
          defaultValue="123"
        />
        <p className="text-sm text-destructive">
          Password must be at least 8 characters
        </p>
      </div>
      <Button className="w-full">Create Account</Button>
    </div>
  )
}
