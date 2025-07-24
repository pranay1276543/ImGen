
import { createRoot } from 'react-dom/client'
import { useNavigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AppContextProvider from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
    <AppContextProvider>
        <App />
    </AppContextProvider>
)
