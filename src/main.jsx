import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './pages/Login/Login'
import GlobalStyle from './styles/Globalstyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Login />
  </StrictMode>,
)
