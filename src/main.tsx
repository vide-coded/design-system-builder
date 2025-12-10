import { RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import { router } from './app/router'
import { PersistenceProvider } from './components/providers/PersistenceProvider'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

createRoot(rootElement).render(
  <StrictMode>
    <PersistenceProvider>
      <RouterProvider router={router} />
    </PersistenceProvider>
  </StrictMode>,
)
