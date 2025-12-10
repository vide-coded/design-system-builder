import { cn } from '@/lib/utils'

function App() {
  return (
    <div className={cn('min-h-screen bg-background text-foreground')}>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Design System Builder</h1>
        <p className="text-muted-foreground">
          A visual tool to create and customize your design system
        </p>
      </div>
    </div>
  )
}

export default App
