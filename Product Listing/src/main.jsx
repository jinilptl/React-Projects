import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppcontextProvider from './utils/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <AppcontextProvider>

 
    <BrowserRouter>
    <App />
    </BrowserRouter>
     </AppcontextProvider>
    
  
)
