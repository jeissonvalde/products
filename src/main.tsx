import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { Home } from './pages/home'
import './res/styles.scss'

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <React.StrictMode>
            <Home />
        </React.StrictMode>,
    )
})