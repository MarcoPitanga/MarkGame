import React from 'react'
import ReactDOM from 'react-dom'
import './styles/tailwind-styles.css'

import { Rotas } from './routes/index'

ReactDOM.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>,
  document.getElementById('root')
)
