import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './App.css'
import { ContextProvider } from './socketContext'

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
)
