import { El } from './vite-env'

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root') as El

    rootEl.innerHTML = 'Hello world'
    alert('Ready!')
})