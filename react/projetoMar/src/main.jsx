import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Componentes/header/Header'
import Home from './page/home/home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
  
  </StrictMode>,
)
