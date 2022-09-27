import { createPinia } from 'pinia'
import type { App } from 'vue'

export * from './modules/config'
export * from './subscribe/config.subscribe'

const pinia = createPinia()

export const setupStore = (app: App) => {
	app.use(pinia)
}
