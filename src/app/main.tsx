import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import QueryProvider from './providers/QueryProvider'
import ThemaProvider from './providers/ThemeProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemaProvider>
        <QueryProvider>
          <App />
        </QueryProvider>
      </ThemaProvider>
  </StrictMode>,
)
