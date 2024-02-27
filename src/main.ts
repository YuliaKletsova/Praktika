import './app.pcss'
import App from './App.svelte'

const appElement = document.getElementById('app')
if (!appElement) {
  console.error('No #app element found')
  throw new Error()
}

window.addEventListener('load', () => {
  new App({
    target: appElement,
  })
})
