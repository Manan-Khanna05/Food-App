import React from 'react'

import './App.css'
import './styles/theme.css'
import AppRoutes from './routes/AppRoutes'
import { AuthProvider } from './contexts/AuthContext'

function App() {


  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App
