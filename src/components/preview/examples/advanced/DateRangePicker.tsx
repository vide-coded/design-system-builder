/**
 * Date Range Picker component demonstrating range selection with hover states.
 * Uses design tokens for all styling including range highlight and interactive states.
 */

import { useState } from 'react'

interface DateRange {
  start: Date | null
  end: Date | null
}

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay()
}

export function DateRangePicker() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [range, setRange] = useState<DateRange>({ start: null, end: null })
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null)

  const daysInMonth = getDaysInMonth(currentYear, currentMonth)
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth)

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(currentYear, currentMonth, day)

    if (!range.start || (range.start && range.end)) {
      // Start new range
      setRange({ start: clickedDate, end: null })
    } else {
      // Complete range
      if (clickedDate < range.start) {
        setRange({ start: clickedDate, end: range.start })
      } else {
        setRange({ start: range.start, end: clickedDate })
      }
    }
  }

  const isInRange = (day: number) => {
    if (!range.start) return false
    const date = new Date(currentYear, currentMonth, day)

    const end = range.end || hoveredDate
    if (!end) return false

    const rangeStart = range.start < end ? range.start : end
    const rangeEnd = range.start < end ? end : range.start

    return date >= rangeStart && date <= rangeEnd
  }

  const isRangeStart = (day: number) => {
    if (!range.start) return false
    const date = new Date(currentYear, currentMonth, day)
    return date.getTime() === range.start.getTime()
  }

  const isRangeEnd = (day: number) => {
    if (!range.end) return false
    const date = new Date(currentYear, currentMonth, day)
    return date.getTime() === range.end.getTime()
  }

  const formatDate = (date: Date | null) => {
    if (!date) return 'Select date'
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  const presetRanges = [
    {
      label: 'Today',
      getRange: () => ({ start: today, end: today }),
    },
    {
      label: 'Last 7 days',
      getRange: () => {
        const start = new Date(today)
        start.setDate(today.getDate() - 6)
        return { start, end: today }
      },
    },
    {
      label: 'Last 30 days',
      getRange: () => {
        const start = new Date(today)
        start.setDate(today.getDate() - 29)
        return { start, end: today }
      },
    },
    {
      label: 'This month',
      getRange: () => {
        const start = new Date(today.getFullYear(), today.getMonth(), 1)
        const end = new Date(today.getFullYear(), today.getMonth() + 1, 0)
        return { start, end }
      },
    },
  ]

  return (
    <div className="w-full max-w-[600px] bg-[color:var(--color-card)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] overflow-hidden">
      <div className="grid grid-cols-[200px_1fr] divide-x-[length:var(--border-width)] divide-[color:var(--color-border)]">
        {/* Preset shortcuts */}
        <div className="p-[length:var(--spacing-4)] bg-[color:var(--color-muted)]/50">
          <div className="text-[length:var(--text-xs)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-muted-foreground)] mb-[length:var(--spacing-2)] uppercase tracking-wider">
            Quick Select
          </div>
          <div className="space-y-[length:var(--spacing-1)]">
            {presetRanges.map((preset) => (
              <button
                key={preset.label}
                onClick={() => setRange(preset.getRange())}
                className="w-full text-left px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[length:var(--text-sm)] text-[color:var(--color-foreground)] hover:bg-[color:var(--color-muted)] rounded-[var(--radius-md)] transition-colors duration-[var(--duration-fast)]"
              >
                {preset.label}
              </button>
            ))}
          </div>

          <div className="mt-[length:var(--spacing-4)] pt-[length:var(--spacing-4)] border-t-[length:var(--border-width)] border-[color:var(--color-border)]">
            <button
              onClick={() => setRange({ start: null, end: null })}
              className="w-full px-[length:var(--spacing-3)] py-[length:var(--spacing-2)] text-[length:var(--text-sm)] text-[color:var(--color-error-500)] hover:bg-[color:var(--color-error-100)] rounded-[var(--radius-md)] transition-colors duration-[var(--duration-fast)]"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Calendar */}
        <div className="p-[length:var(--spacing-4)]">
          {/* Header */}
          <div className="flex items-center justify-between mb-[length:var(--spacing-4)]">
            <button
              onClick={() => {
                if (currentMonth === 0) {
                  setCurrentMonth(11)
                  setCurrentYear(currentYear - 1)
                } else {
                  setCurrentMonth(currentMonth - 1)
                }
              }}
              className="p-[length:var(--spacing-2)] hover:bg-[color:var(--color-muted)] rounded-[var(--radius-md)]"
            >
              ←
            </button>
            <div className="text-[length:var(--text-base)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
              {MONTHS[currentMonth]} {currentYear}
            </div>
            <button
              onClick={() => {
                if (currentMonth === 11) {
                  setCurrentMonth(0)
                  setCurrentYear(currentYear + 1)
                } else {
                  setCurrentMonth(currentMonth + 1)
                }
              }}
              className="p-[length:var(--spacing-2)] hover:bg-[color:var(--color-muted)] rounded-[var(--radius-md)]"
            >
              →
            </button>
          </div>

          {/* Day names */}
          <div className="grid grid-cols-7 gap-[length:var(--spacing-1)] mb-[length:var(--spacing-2)]">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
              <div
                key={i}
                className="text-center text-[length:var(--text-xs)] font-[number:var(--font-weight-medium)] text-[color:var(--color-muted-foreground)] py-[length:var(--spacing-2)]"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-[length:var(--spacing-1)]">
            {emptyDays.map((i) => (
              <div key={`empty-${i}`} />
            ))}
            {days.map((day) => {
              const inRange = isInRange(day)
              const start = isRangeStart(day)
              const end = isRangeEnd(day)

              return (
                <button
                  key={day}
                  onClick={() => handleDateClick(day)}
                  onMouseEnter={() =>
                    setHoveredDate(new Date(currentYear, currentMonth, day))
                  }
                  onMouseLeave={() => setHoveredDate(null)}
                  className={`
                    aspect-square flex items-center justify-center
                    text-[length:var(--text-sm)]
                    font-[number:var(--font-weight-medium)]
                    transition-all
                    duration-[var(--duration-fast)]
                    ${
                      start || end
                        ? 'bg-[color:var(--color-primary-500)] text-white rounded-[var(--radius-md)]'
                        : inRange
                          ? 'bg-[color:var(--color-primary-100)] text-[color:var(--color-primary-700)]'
                          : 'text-[color:var(--color-foreground)] hover:bg-[color:var(--color-muted)] rounded-[var(--radius-md)]'
                    }
                  `}
                >
                  {day}
                </button>
              )
            })}
          </div>

          {/* Selected range display */}
          <div className="mt-[length:var(--spacing-4)] pt-[length:var(--spacing-4)] border-t-[length:var(--border-width)] border-[color:var(--color-border)] flex items-center justify-between">
            <div className="flex items-center gap-[length:var(--spacing-2)] text-[length:var(--text-sm)]">
              <span className="text-[color:var(--color-muted-foreground)]">
                From:
              </span>
              <span className="font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)]">
                {formatDate(range.start)}
              </span>
            </div>
            <div className="flex items-center gap-[length:var(--spacing-2)] text-[length:var(--text-sm)]">
              <span className="text-[color:var(--color-muted-foreground)]">
                To:
              </span>
              <span className="font-[number:var(--font-weight-medium)] text-[color:var(--color-foreground)]">
                {formatDate(range.end)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const dateRangePickerMeta = {
  id: 'date-range-picker',
  name: 'Date Range Picker',
  category: 'advanced' as const,
  description: 'Date range picker with preset shortcuts and hover preview',
  complexity: 'complex' as const,
  tags: ['date', 'range', 'picker', 'calendar', 'filter'],
  reactive: true,
}
