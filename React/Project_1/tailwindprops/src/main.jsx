import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cards from './components/cards.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Cards username = "Hitesh" role ="Software" />
    <Cards role = "design"/>
    <Cards role = "sale"/>

  </StrictMode>,
)
