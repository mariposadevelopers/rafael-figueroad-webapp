import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import  { Toaster } from 'react-hot-toast'
import { AuthProvider } from './context/AuthContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <App />
    </AuthProvider>
  </StrictMode>,
)
