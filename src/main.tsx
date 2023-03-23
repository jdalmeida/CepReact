import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppRoutes } from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
)