import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/main.scss'
import { scrollHeader, scrollActive } from './services/util-service.js'

window.addEventListener('scroll', scrollHeader)
window.addEventListener('scroll', scrollActive)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
