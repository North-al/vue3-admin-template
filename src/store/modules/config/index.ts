import { getCurrentLanguage } from '~/utils'

export const useConfigStore = defineStore('N-config-store', () => {
	const sideBar = reactive<ISideBar>({
		width: 270,
		backgroundColor: '#121212',
		collapse: false,
		around: 'left'
	})

	const elementConfig = reactive<IElementConfig>({
		locale: (localStorage.getItem('N-language-key') || getCurrentLanguage() || 'zh_CN') as 'zh_CN' | 'en',
		size: 'default',
		zIndex: 3000,
		button: {
			autoInsertSpace: true
		},
		message: {
			max: 10
		}
	})

	return {
		elementConfig,
		sideBar
	}
})

// export const subscribeConfigStore = () => {
const key = useConfigStore.$id + 'key'
const instance = useConfigStore()

instance.$subscribe((_, state) => {
	localStorage.setItem(key, JSON.stringify(state))
})

const cache_state = localStorage.getItem(key)

if (cache_state) instance.$state = JSON.parse(cache_state)
// }

// subscribeConfigStore()
