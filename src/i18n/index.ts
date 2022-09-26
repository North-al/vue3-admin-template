import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { getCurrentLanguage } from '~/utils'
import { en } from './en'
import { zh } from './zh'

const messages = {
	zh_CN: {
		...zh,
		test: '测试'
	},
	en: {
		...en,
		test: 'test'
	}
}

const i18n = createI18n({
	locale: localStorage.getItem('N-language-key') || getCurrentLanguage() || 'zh_CN',
	legacy: false,
	globalInjection: true,
	messages
})

export const setupI18n = (app: App) => {
	app.use(i18n)
}
