import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

/**
 * Text Input Examples
 *
 * Demonstrates various text input states:
 * - Standard input with label
 * - With placeholder
 * - With helper text
 * - Error state with message
 * - Success state
 * - Disabled state
 */
export function TextInput() {
  return (
    <div className="space-y-6 max-w-md">
      {/* Standard Input */}
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" type="text" placeholder="Enter your full name" />
        <p className="text-sm text-muted-foreground">
          This is how your name will appear on your profile
        </p>
      </div>

      {/* Email Input */}
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>

      {/* Error State */}
      <div className="space-y-2">
        <Label htmlFor="username" className="text-destructive">
          Username
        </Label>
        <Input
          id="username"
          type="text"
          placeholder="johndoe"
          className="border-destructive focus-visible:ring-destructive"
          defaultValue="john.doe"
        />
        <p className="text-sm text-destructive">
          Username cannot contain special characters
        </p>
      </div>

      {/* Success State */}
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-success">
          Phone Number
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          className="border-success focus-visible:ring-success"
          defaultValue="+1 (555) 123-4567"
        />
        <p className="text-sm text-success">✓ Phone number verified</p>
      </div>

      {/* Disabled State */}
      <div className="space-y-2">
        <Label htmlFor="disabled-input" className="opacity-50">
          Account Type
        </Label>
        <Input
          id="disabled-input"
          type="text"
          defaultValue="Premium"
          disabled
        />
        <p className="text-sm text-muted-foreground">
          Contact support to change account type
        </p>
      </div>

      {/* With Icons */}
      <div className="space-y-2">
        <Label htmlFor="search">Search</Label>
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <title>Search icon</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <Input
            id="search"
            type="text"
            placeholder="Search..."
            className="pl-10"
          />
        </div>
      </div>
    </div>
  )
}
