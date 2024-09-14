import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextApp } from './context/ContextApi.jsx'


createRoot(document.getElementById('root')).render(
 <ContextApp>
    <App />
 </ContextApp>


)
