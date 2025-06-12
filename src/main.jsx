import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as Sentry from '@sentry/react'
import App from './App.jsx'
import './index.scss'

Sentry.init({
  dsn: 'https://09ab9c089ad95c38e381dd6824438a24@o4509460538785792.ingest.us.sentry.io/4509461424504832',
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  integrations: [Sentry.replayIntegration()], //Habilita replays de ações no sentry

  // Session Replay

  // gera replay de 10% das seções gerais
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  // gera replay de 100% das seções que geram erros
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.

  _experiments: { enableLogs: true },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
