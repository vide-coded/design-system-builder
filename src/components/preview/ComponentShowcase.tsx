/**
 * Component Showcase
 *
 * Grid view of all preview components with filtering and search.
 * Displays component metadata and renders each in a card.
 */

import { Search } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  type CategoryInfo,
  type ComponentCategory,
  type ComponentMetadata,
  filterComponents,
  getCategories,
} from './registry'

// ============================================================================
// Main Component
// ============================================================================

export function ComponentShowcase() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<
    ComponentCategory[]
  >([])
  const [isLoading, setIsLoading] = useState(true)

  // Simulate initial component loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600)
    return () => clearTimeout(timer)
  }, [])

  const categories = useMemo(() => getCategories(), [])

  // Filter components based on search and categories
  const filteredComponents = useMemo(() => {
    return filterComponents(searchQuery, selectedCategories)
  }, [searchQuery, selectedCategories])

  // Toggle category filter
  const toggleCategory = (category: ComponentCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    )
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategories([])
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="p-4 space-y-4">
          {/* Title */}
          <div>
            <h1 className="text-2xl font-bold">Component Library</h1>
            <p className="text-sm text-muted-foreground">
              {filteredComponents.length} components available
            </p>
          </div>

          {/* Search */}
          <div className="relative">
            <label htmlFor="component-search" className="sr-only">
              Search components
            </label>
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              id="component-search"
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
              aria-label="Search components by name, description, or tags"
            />
          </div>

          {/* Category Filters */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium">Categories</p>
              {(searchQuery || selectedCategories.length > 0) && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Clear all filters"
                >
                  Clear filters
                </button>
              )}
            </div>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter by category"
            >
              {categories.map((category) => (
                <CategoryFilterButton
                  key={category.id}
                  category={category}
                  isActive={selectedCategories.includes(category.id)}
                  onClick={() => toggleCategory(category.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Component Grid */}
      <ScrollArea className="flex-1">
        <div className="p-4">
          {isLoading ? (
            <LoadingSkeleton />
          ) : filteredComponents.length === 0 ? (
            <EmptyState searchQuery={searchQuery} />
          ) : (
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filteredComponents.map((component) => (
                <ComponentCard key={component.id} component={component} />
              ))}
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}

// ============================================================================
// Sub-Components
// ============================================================================

interface CategoryFilterButtonProps {
  category: CategoryInfo
  isActive: boolean
  onClick: () => void
}

function CategoryFilterButton({
  category,
  isActive,
  onClick,
}: CategoryFilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium
        transition-colors border
        ${
          isActive
            ? 'bg-primary text-primary-foreground border-primary'
            : 'bg-background hover:bg-muted border-border'
        }
      `}
      aria-label={`Filter by ${category.name} (${category.count} components)`}
      aria-pressed={isActive}
    >
      <span aria-hidden="true">{category.icon}</span>
      <span>{category.name}</span>
      <span
        className={`
        text-xs px-1.5 py-0.5 rounded
        ${
          isActive
            ? 'bg-primary-foreground/20 text-primary-foreground'
            : 'bg-muted text-muted-foreground'
        }
      `}
      >
        {category.count}
      </span>
    </button>
  )
}

// ----------------------------------------------------------------------------

interface ComponentCardProps {
  component: ComponentMetadata
}

function ComponentCard({ component }: ComponentCardProps) {
  const complexityColor = {
    1: 'bg-green-500/10 text-green-600 dark:text-green-400',
    2: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
    3: 'bg-red-500/10 text-red-600 dark:text-red-400',
  }[component.complexity]

  const complexityLabel = {
    1: 'Simple',
    2: 'Moderate',
    3: 'Complex',
  }[component.complexity]

  return (
    <div className="card group border border-border hover:border-primary/50 transition-all duration-200 overflow-hidden">
      <div className="space-y-3 p-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold truncate group-hover:text-primary transition-colors">
              {component.name}
            </h3>
            <p className="text-xs text-muted-foreground capitalize">
              {component.category}
            </p>
          </div>
          <div
            className={`px-2 py-0.5 rounded text-xs font-medium ${complexityColor}`}
          >
            {complexityLabel}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {component.description}
        </p>

        {/* Tags */}
        {component.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {component.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {component.tags.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{component.tags.length - 3}
              </Badge>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            {component.reactive && (
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Reactive
              </span>
            )}
          </div>
          <button
            type="button"
            className="text-xs font-medium text-primary hover:underline"
          >
            View Code →
          </button>
        </div>
      </div>

      {/* Component Preview */}
      {component.component && (
        <div className="border-t bg-muted/30 p-6">
          <component.component />
        </div>
      )}
    </div>
  )
}

// ----------------------------------------------------------------------------

interface EmptyStateProps {
  searchQuery: string
}

function EmptyState({ searchQuery }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        <Search className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">No components found</h3>
      {searchQuery ? (
        <p className="text-sm text-muted-foreground max-w-md">
          No components match "{searchQuery}". Try a different search term or
          clear filters.
        </p>
      ) : (
        <p className="text-sm text-muted-foreground max-w-md">
          No components match the selected filters. Try selecting different
          categories.
        </p>
      )}
    </div>
  )
}

// ----------------------------------------------------------------------------

function LoadingSkeleton() {
  // Generate stable unique keys for skeleton items
  const skeletonKeys = Array.from(
    { length: 9 },
    (_, i) => `loading-card-${Date.now()}-${i}`,
  )

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {skeletonKeys.map((key) => (
        <div
          key={key}
          className="rounded-lg border border-border bg-card overflow-hidden animate-pulse"
        >
          <div className="p-4 space-y-3">
            {/* Header skeleton */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 space-y-2">
                <div className="h-5 bg-muted rounded w-2/3" />
                <div className="h-3 bg-muted rounded w-1/3" />
              </div>
              <div className="h-6 bg-muted rounded w-16" />
            </div>
            {/* Description skeleton */}
            <div className="space-y-2">
              <div className="h-3 bg-muted rounded w-full" />
              <div className="h-3 bg-muted rounded w-4/5" />
            </div>
            {/* Tags skeleton */}
            <div className="flex gap-2">
              <div className="h-5 bg-muted rounded w-16" />
              <div className="h-5 bg-muted rounded w-20" />
              <div className="h-5 bg-muted rounded w-14" />
            </div>
          </div>
          {/* Preview skeleton */}
          <div className="border-t border-border bg-muted/30 p-6">
            <div className="h-24 bg-muted rounded" />
          </div>
        </div>
      ))}
    </div>
  )
}
