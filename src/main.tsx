import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// Carrega CSS de forma não-bloqueante após o DOM estar pronto
const loadCSS = () => {
  import('./index.css')
}

// Carrega o CSS após a renderização inicial
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadCSS)
} else {
  // Se o DOM já carregou, agenda para o próximo frame
  requestAnimationFrame(loadCSS)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
