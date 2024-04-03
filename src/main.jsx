import ReactDOM from 'react-dom/client'
import App from './pages/App/index.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

i18next.use(initReactI18next).init({
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es: {
      translation: "",
    },
    en: {
      translation: "",
    }
  }

})

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
