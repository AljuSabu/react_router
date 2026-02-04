import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>,
)
