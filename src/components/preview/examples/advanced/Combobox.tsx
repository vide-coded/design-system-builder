/**
 * Combobox (autocomplete) component demonstrating search and keyboard navigation.
 * Uses design tokens for all styling including dropdown, options, and highlights.
 */

import { useEffect, useRef, useState } from 'react'

interface Option {
  id: string
  label: string
  description?: string
  icon?: string
}

const countries: Option[] = [
  {
    id: 'us',
    label: 'United States',
    description: 'North America',
    icon: '🇺🇸',
  },
  { id: 'uk', label: 'United Kingdom', description: 'Europe', icon: '🇬🇧' },
  { id: 'ca', label: 'Canada', description: 'North America', icon: '🇨🇦' },
  { id: 'au', label: 'Australia', description: 'Oceania', icon: '🇦🇺' },
  { id: 'de', label: 'Germany', description: 'Europe', icon: '🇩🇪' },
  { id: 'fr', label: 'France', description: 'Europe', icon: '🇫🇷' },
  { id: 'jp', label: 'Japan', description: 'Asia', icon: '🇯🇵' },
  { id: 'br', label: 'Brazil', description: 'South America', icon: '🇧🇷' },
]

const frameworks: Option[] = [
  { id: 'react', label: 'React', description: 'JavaScript library for UI' },
  { id: 'vue', label: 'Vue', description: 'Progressive JavaScript framework' },
  {
    id: 'angular',
    label: 'Angular',
    description: 'Platform for web applications',
  },
  {
    id: 'svelte',
    label: 'Svelte',
    description: 'Cybernetically enhanced web apps',
  },
  {
    id: 'solid',
    label: 'Solid',
    description: 'Simple and performant reactivity',
  },
]

export function Combobox() {
  const [query, setQuery] = useState('')
  const [selectedCountry, setSelectedCountry] = useState<Option | null>(null)
  const [selectedFramework, setSelectedFramework] = useState<Option | null>(
    null,
  )
  const [isCountryOpen, setIsCountryOpen] = useState(false)
  const [isFrameworkOpen, setIsFrameworkOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(0)

  const countryRef = useRef<HTMLDivElement>(null)
  const frameworkRef = useRef<HTMLDivElement>(null)

  const filteredCountries = countries.filter((country) =>
    country.label.toLowerCase().includes(query.toLowerCase()),
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countryRef.current &&
        !countryRef.current.contains(event.target as Node)
      ) {
        setIsCountryOpen(false)
      }
      if (
        frameworkRef.current &&
        !frameworkRef.current.contains(event.target as Node)
      ) {
        setIsFrameworkOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleKeyDown = (
    e: React.KeyboardEvent,
    options: Option[],
    onSelect: (option: Option) => void,
  ) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlightedIndex((prev) => Math.min(prev + 1, options.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlightedIndex((prev) => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter' && options[highlightedIndex]) {
      e.preventDefault()
      onSelect(options[highlightedIndex])
    } else if (e.key === 'Escape') {
      setIsCountryOpen(false)
      setIsFrameworkOpen(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Country Combobox */}
      <div ref={countryRef} className="relative w-full max-w-[400px]">
        <label className="block text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)] mb-[length:var(--spacing-2)]">
          Select Country
        </label>
        <button
          type="button"
          onClick={() => setIsCountryOpen(!isCountryOpen)}
          className="w-full flex items-center justify-between px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] bg-[color:var(--color-background)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] text-left hover:border-[color:var(--color-ring)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ring)] transition-colors duration-[var(--duration-fast)]"
        >
          {selectedCountry ? (
            <span className="flex items-center gap-[length:var(--spacing-2)]">
              <span className="text-[length:var(--text-xl)]">
                {selectedCountry.icon}
              </span>
              <span className="text-[color:var(--color-foreground)]">
                {selectedCountry.label}
              </span>
            </span>
          ) : (
            <span className="text-[color:var(--color-muted-foreground)]">
              Select a country...
            </span>
          )}
          <svg
            className={`w-[length:var(--spacing-4)] h-[length:var(--spacing-4)] text-[color:var(--color-muted-foreground)] transition-transform duration-[var(--duration-fast)] ${
              isCountryOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isCountryOpen && (
          <div className="absolute z-10 w-full mt-[length:var(--spacing-1)] bg-[color:var(--color-card)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] shadow-[var(--shadow-lg)] overflow-hidden">
            <div className="p-[length:var(--spacing-2)] border-b-[length:var(--border-width)] border-[color:var(--color-border)]">
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setHighlightedIndex(0)
                }}
                onKeyDown={(e) =>
                  handleKeyDown(e, filteredCountries, (country) => {
                    setSelectedCountry(country)
                    setIsCountryOpen(false)
                    setQuery('')
                  })
                }
                placeholder="Search countries..."
                className="w-full px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] bg-[color:var(--color-background)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-sm)] text-[length:var(--text-sm)] outline-none focus:ring-2 focus:ring-[color:var(--color-ring)]"
              />
            </div>
            <div className="max-h-[300px] overflow-y-auto p-[length:var(--spacing-1)]">
              {filteredCountries.length === 0 ? (
                <div className="px-[length:var(--spacing-3)] py-[length:var(--spacing-6)] text-center text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
                  No countries found
                </div>
              ) : (
                filteredCountries.map((country, index) => (
                  <button
                    key={country.id}
                    type="button"
                    onClick={() => {
                      setSelectedCountry(country)
                      setIsCountryOpen(false)
                      setQuery('')
                    }}
                    className={`
                      w-full flex items-center gap-[length:var(--spacing-3)] px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] rounded-[var(--radius-sm)] text-left transition-colors duration-[var(--duration-fast)]
                      ${
                        index === highlightedIndex
                          ? 'bg-[color:var(--color-primary-500)] text-white'
                          : 'hover:bg-[color:var(--color-muted)] text-[color:var(--color-foreground)]'
                      }
                    `}
                  >
                    <span className="text-[length:var(--text-2xl)]">
                      {country.icon}
                    </span>
                    <div className="flex-1">
                      <div className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)]">
                        {country.label}
                      </div>
                      {country.description && (
                        <div
                          className={`text-[length:var(--text-xs)] ${index === highlightedIndex ? 'text-white/80' : 'text-[color:var(--color-muted-foreground)]'}`}
                        >
                          {country.description}
                        </div>
                      )}
                    </div>
                    {selectedCountry?.id === country.id && (
                      <svg
                        className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* Framework Combobox (Simple) */}
      <div ref={frameworkRef} className="relative w-full max-w-[400px]">
        <label className="block text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)] mb-[length:var(--spacing-2)]">
          Select Framework
        </label>
        <button
          type="button"
          onClick={() => setIsFrameworkOpen(!isFrameworkOpen)}
          className="w-full flex items-center justify-between px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] bg-[color:var(--color-background)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] text-[length:var(--text-sm)] text-left hover:border-[color:var(--color-ring)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-ring)]"
        >
          {selectedFramework ? (
            <span className="text-[color:var(--color-foreground)]">
              {selectedFramework.label}
            </span>
          ) : (
            <span className="text-[color:var(--color-muted-foreground)]">
              Select a framework...
            </span>
          )}
          <svg
            className="w-[length:var(--spacing-4)] h-[length:var(--spacing-4)] text-[color:var(--color-muted-foreground)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </button>

        {isFrameworkOpen && (
          <div className="absolute z-10 w-full mt-[length:var(--spacing-1)] bg-[color:var(--color-card)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-md)] shadow-[var(--shadow-lg)] overflow-hidden">
            <div className="p-[length:var(--spacing-1)]">
              {frameworks.map((framework) => (
                <button
                  key={framework.id}
                  type="button"
                  onClick={() => {
                    setSelectedFramework(framework)
                    setIsFrameworkOpen(false)
                  }}
                  className="w-full px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] rounded-[var(--radius-sm)] text-left hover:bg-[color:var(--color-muted)] transition-colors duration-[var(--duration-fast)]"
                >
                  <div className="text-[length:var(--text-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)]">
                    {framework.label}
                  </div>
                  <div className="text-[length:var(--text-xs)] text-[color:var(--color-muted-foreground)]">
                    {framework.description}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export const comboboxMeta = {
  id: 'combobox',
  name: 'Combobox',
  category: 'advanced' as const,
  description: 'Autocomplete dropdown with search and keyboard navigation',
  complexity: 'complex' as const,
  tags: ['combobox', 'autocomplete', 'search', 'dropdown', 'select'],
  reactive: true,
}
