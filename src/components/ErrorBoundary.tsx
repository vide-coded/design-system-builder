import { AlertCircle } from 'lucide-react'
import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  resetKeys?: unknown[]
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('🚨 Error caught by boundary:', {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
    })

    this.props.onError?.(error, errorInfo)
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    // Reset error state if resetKeys change
    if (
      this.state.hasError &&
      this.props.resetKeys &&
      prevProps.resetKeys &&
      !this.areResetKeysEqual(prevProps.resetKeys, this.props.resetKeys)
    ) {
      this.resetErrorBoundary()
    }
  }

  areResetKeysEqual(prevKeys: unknown[], nextKeys: unknown[]): boolean {
    if (prevKeys.length !== nextKeys.length) return false
    return prevKeys.every((key, index) => key === nextKeys[index])
  }

  resetErrorBoundary = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="flex items-center justify-center p-6">
          <Alert variant="destructive" className="max-w-lg">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Something went wrong</AlertTitle>
            <AlertDescription className="mt-2 space-y-2">
              <p className="text-sm">
                {this.state.error?.message || 'An unexpected error occurred'}
              </p>
              <p className="text-xs text-muted-foreground">
                The error has been logged to the console. If the problem
                persists, try refreshing the page.
              </p>
            </AlertDescription>
            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={this.resetErrorBoundary}
              >
                Try Again
              </Button>
            </div>
          </Alert>
        </div>
      )
    }

    return this.props.children
  }
}

// Compact error boundary for inline use
export function CompactErrorBoundary({
  children,
  componentName = 'Component',
}: {
  children: ReactNode
  componentName?: string
}) {
  return (
    <ErrorBoundary
      fallback={
        <div className="flex flex-col items-center justify-center p-4 text-center">
          <AlertCircle className="mb-2 h-8 w-8 text-destructive" />
          <p className="text-sm font-medium">Failed to load {componentName}</p>
          <Button
            variant="ghost"
            size="sm"
            className="mt-2"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </Button>
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  )
}
