import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes'
import { RouterProvider } from 'react-router'
import { ThemeProvider } from './providers/theme.provider'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster richColors />
      </ThemeProvider>
    </Provider>
  </StrictMode>
)
