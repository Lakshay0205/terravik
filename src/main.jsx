import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/theme.css'
import './styles/responsive.css'
import { initializePerformanceOptimizations } from './utils/performanceUtils'
import { initializeAccessibilityChecks } from './utils/accessibilityUtils'

// Initialize performance optimizations
if (process.env.NODE_ENV === 'production') {
  initializePerformanceOptimizations()
}

// Initialize accessibility checks
if (process.env.NODE_ENV === 'development') {
  initializeAccessibilityChecks()
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
