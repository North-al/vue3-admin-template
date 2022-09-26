import { createApp, type App } from 'vue'
import { createPinia } from 'pinia'

import Entry from './App.vue'
import router from './router'
import { setupStyle } from './styles'
import { setupI18n } from './i18n'

const application = async () => {
	const app: App = createApp(Entry)
	await setupStyle()
	setupI18n(app)
	app.use(createPinia()).use(router).mount('#app')
}

application()
