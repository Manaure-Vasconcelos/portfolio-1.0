import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n.ts'
import { ThemeProvider } from './components/themeProvider.tsx';
import { Toaster } from './components/ui/toaster.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Toaster />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
