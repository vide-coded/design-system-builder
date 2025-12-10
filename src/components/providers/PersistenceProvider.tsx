/**
 * PersistenceProvider
 *
 * Initializes auto-save and loads design system from storage
 */

import type { ReactNode } from 'react'
import { usePersistence } from '@/hooks/use-persistence'

interface PersistenceProviderProps {
  children: ReactNode
}

export function PersistenceProvider({ children }: PersistenceProviderProps) {
  // Initialize persistence (auto-save and load from storage)
  usePersistence()

  return <>{children}</>
}
