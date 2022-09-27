import { createApp, type App } from 'vue'

import Entry from './App.vue'
import router from './router'

import { setupStyle } from './styles'
import { setupI18n } from './i18n'
import { setupStore } from './store'

const application = async () => {
	const app: App = createApp(Entry)
	await setupStyle()
	setupI18n(app)
	setupStore(app)
	app.use(router).mount('#app')
}

application()
