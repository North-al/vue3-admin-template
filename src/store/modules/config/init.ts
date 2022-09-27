import { Storage_Key } from '~/enums'
import { getCurrentLanguage } from '~/utils'

export const initElementConfigStore = () => {
	try {
		const data = window.localStorage.getItem(Storage_Key.element) ?? ''
		console.log(JSON.parse(data), 'data')

		return reactive<IElementConfig>({ ...JSON.parse(data) })
	} catch (error) {
		console.error('😅 init config store data fail set default value')
		return reactive<IElementConfig>({
			locale: (localStorage.getItem(Storage_Key.locale) || getCurrentLanguage() || 'zh_CN') as 'zh_CN' | 'en',
			size: 'default',
			zIndex: 3000,
			button: {
				autoInsertSpace: true
			},
			message: {
				max: 10
			}
		})
	}
}

export const initSideBarConfigStore = () => {
	try {
		const data = window.localStorage.getItem(Storage_Key.sideBar) ?? ''
		return reactive<ISideBar>({ ...JSON.parse(data) })
	} catch (error) {
		console.error('😅 init config store data fail, set default value')
		return reactive<ISideBar>({
			width: 270,
			backgroundColor: '#121212',
			collapse: false,
			around: 'left'
		})
	}
}
