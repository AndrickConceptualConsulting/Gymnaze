import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import error suppression for external scripts (browser extensions, etc.)
import './utils/errorSuppression.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
