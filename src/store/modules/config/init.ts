import { Storage_Key } from '~/enums'
import { getCurrentLanguage } from '~/utils'

export const initElementConfigStore = () => {
	try {
		const data = window.localStorage.getItem(Storage_Key.element) ?? ''
		console.log(JSON.parse(data), 'data')

		return reactive<IElementConfig>({ ...JSON.parse(data) })
	} catch (error) {
		console.error('😅 init element config store data fail set default value')
		return reactive<IElementConfig>({
			locale: (localStorage.getItem(Storage_Key.locale) || getCurrentLanguage() || 'zh_CN') as 'zh_CN' | 'en',
			size: 'default',
			zIndex: 3000,
			button: {
				autoInsertSpace: true
			},
			message: {
				max: 10
			},
			theme: {
				primary: '#409eff'
			}
		})
	}
}

export const initSideBarConfigStore = () => {
	try {
		const data = window.localStorage.getItem(Storage_Key.sideBar) ?? ''
		return reactive<ISideBar>({ ...JSON.parse(data) })
	} catch (error) {
		console.error('😅 init sidebar config store data fail, set default value')
		return reactive<ISideBar>({
			width: 270,
			backgroundColor: '#fff',
			darkBackgroundColor: '#121212',
			collapse: false,
			around: 'left'
		})
	}
}

export const initGlobalConfigStore = () => {
	try {
		const data = window.localStorage.getItem(Storage_Key.global) ?? ''
		return reactive<IGlobalConfig>({ ...JSON.parse(data) })
	} catch (error) {
		console.error('😅 init global config store fail, set default value')
		return reactive<IGlobalConfig>({
			isDark: window.matchMedia('(prefers-color-scheme: dark)').matches || false
		})
	}
}
