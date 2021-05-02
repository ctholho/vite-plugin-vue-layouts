import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import './index.css'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(App, { routes })
