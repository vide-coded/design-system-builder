/**
 * Calendar component demonstrating date selection and navigation.
 * Uses design tokens for all styling including grid, cells, and interactive states.
 */

import { useState } from 'react'

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay()
}

export function Calendar() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [selectedDate, setSelectedDate] = useState<Date | null>(today)

  const daysInMonth = getDaysInMonth(currentYear, currentMonth)
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth)

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    )
  }

  const isSelected = (day: number) => {
    if (!selectedDate) return false
    return (
      day === selectedDate.getDate() &&
      currentMonth === selectedDate.getMonth() &&
      currentYear === selectedDate.getFullYear()
    )
  }

  const handleDateClick = (day: number) => {
    setSelectedDate(new Date(currentYear, currentMonth, day))
  }

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  return (
    <div className="space-y-4">
      <div className="w-full max-w-[400px] bg-[color:var(--color-card)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-lg)] p-[length:var(--spacing-4)] shadow-[var(--shadow-md)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-[length:var(--spacing-4)]">
          <button
            onClick={prevMonth}
            className="p-[length:var(--spacing-2)] hover:bg-[color:var(--color-muted)] rounded-[var(--radius-md)] transition-colors duration-[var(--duration-fast)]"
            aria-label="Previous month"
          >
            <svg
              className="w-[length:var(--spacing-5)] h-[length:var(--spacing-5)] text-[color:var(--color-foreground)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="text-center">
            <div className="text-[length:var(--text-lg)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)]">
              {MONTHS[currentMonth]}
            </div>
            <div className="text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
              {currentYear}
            </div>
          </div>

          <button
            onClick={nextMonth}
            className="p-[length:var(--spacing-2)] hover:bg-[color:var(--color-muted)] rounded-[var(--radius-md)] transition-colors duration-[var(--duration-fast)]"
            aria-label="Next month"
          >
            <svg
              className="w-[length:var(--spacing-5)] h-[length:var(--spacing-5)] text-[color:var(--color-foreground)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Day names */}
        <div className="grid grid-cols-7 gap-[length:var(--spacing-1)] mb-[length:var(--spacing-2)]">
          {DAYS.map((day) => (
            <div
              key={day}
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
            const today = isToday(day)
            const selected = isSelected(day)
            return (
              <button
                key={day}
                onClick={() => handleDateClick(day)}
                className={`
                  aspect-square flex items-center justify-center
                  text-[length:var(--text-sm)]
                  font-[number:var(--font-weight-medium)]
                  rounded-[var(--radius-md)]
                  transition-all
                  duration-[var(--duration-fast)]
                  ${
                    selected
                      ? 'bg-[color:var(--color-primary-500)] text-white'
                      : today
                        ? 'border-[length:var(--border-width)] border-[color:var(--color-primary-500)] text-[color:var(--color-primary-500)]'
                        : 'text-[color:var(--color-foreground)] hover:bg-[color:var(--color-muted)]'
                  }
                `}
              >
                {day}
              </button>
            )
          })}
        </div>

        {/* Selected date display */}
        {selectedDate && (
          <div className="mt-[length:var(--spacing-4)] pt-[length:var(--spacing-4)] border-t-[length:var(--border-width)] border-[color:var(--color-border)] text-center text-[length:var(--text-sm)] text-[color:var(--color-muted-foreground)]">
            Selected:{' '}
            {selectedDate.toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </div>
        )}
      </div>

      {/* Compact calendar */}
      <div className="w-full max-w-[300px] bg-[color:var(--color-card)] border-[length:var(--border-width)] border-[color:var(--color-border)] rounded-[var(--radius-lg)] p-[length:var(--spacing-3)] shadow-[var(--shadow-sm)]">
        <div className="text-[length:var(--text-sm)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-foreground)] mb-[length:var(--spacing-2)]">
          Compact Calendar
        </div>
        <div className="grid grid-cols-7 gap-[length:var(--spacing-0.5)]">
          {DAYS.map((day) => (
            <div
              key={day}
              className="text-center text-[length:var(--text-2xs)] text-[color:var(--color-muted-foreground)] py-[length:var(--spacing-1)]"
            >
              {day.charAt(0)}
            </div>
          ))}
          {emptyDays.map((i) => (
            <div key={`empty-${i}`} />
          ))}
          {days.map((day) => (
            <button
              key={day}
              className={`
                aspect-square flex items-center justify-center
                text-[length:var(--text-2xs)]
                rounded-[var(--radius-sm)]
                ${
                  isToday(day)
                    ? 'bg-[color:var(--color-primary-500)] text-white'
                    : 'text-[color:var(--color-foreground)] hover:bg-[color:var(--color-muted)]'
                }
              `}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export const calendarMeta = {
  id: 'calendar',
  name: 'Calendar',
  category: 'advanced' as const,
  description: 'Interactive calendar with date selection and month navigation',
  complexity: 'complex' as const,
  tags: ['calendar', 'date', 'picker', 'month', 'navigation'],
  reactive: true,
}
