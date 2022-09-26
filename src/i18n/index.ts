import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { en } from './en'
import { zh } from './zh'

const i18n = createI18n({
	locale: 'en',
	messages: {
		zh,
		en
	}
})

export const setupI18n = (app: App) => {
	app.use(i18n)
}
