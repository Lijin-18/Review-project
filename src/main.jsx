import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import ThemeContext, { ThemeContextProvider } from './components/Themecontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeContextProvider>
    <App />
    </ThemeContextProvider>
    
  </StrictMode>,
)