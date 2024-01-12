import React from 'react'
import ReactDOM from 'react-dom/client'


import {AppRoutes} from './routes'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
        <div className='App'>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
