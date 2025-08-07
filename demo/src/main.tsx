import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {GlobomanticsAnalyticsSDK} from './lib/analytics.js'

GlobomanticsAnalyticsSDK(1000)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
