import { createApp, type App } from 'vue'
import { createPinia } from 'pinia'

import Entry from './App.vue'
import router from './router'
import { setupStyle } from './styles'

const application = async () => {
	const app: App = createApp(Entry)
	await setupStyle()
	app.use(createPinia()).use(router).mount('#app')
}

application()
