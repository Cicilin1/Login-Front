import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './pages/Login/Login'
import GlobalStyle from './styles/Globalstyles.js'
import { ThemeProvider } from 'styled-components'
import Theme from './styles/theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Login />
    </ThemeProvider>
  </StrictMode>,
)
