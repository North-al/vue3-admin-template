import { useConfigStore } from '../modules/config'
import { Storage_Key } from '~/enums'

export const useConfigSubscribe = () => {
	const config = useConfigStore()

	const stopElementConfig = watch(
		() => config.elementConfig,
		(val: IElementConfig) => {
			window.localStorage.setItem(Storage_Key.element, JSON.stringify(val))
		},
		{
			deep: true,
			immediate: true
		}
	)

	const stopSideBarConfig = watch(
		() => config.sideBar,
		(val: ISideBar) => {
			window.localStorage.setItem(Storage_Key.sideBar, JSON.stringify(val))
		},
		{ deep: true, immediate: true }
	)

	const stopGlobalConfig = watch(
		() => config.globalConfig,
		(val: IGlobalConfig) => {
			if (val.isDark) {
				document.documentElement.className = 'dark'
				// config.sideBar.backgroundColor = '#121212'
			} else {
				document.documentElement.className = 'light'
				// config.sideBar.backgroundColor = '#fff'
			}
			window.localStorage.setItem(Storage_Key.global, JSON.stringify(val))
		},
		{ immediate: true, deep: true }
	)

	const media = window.matchMedia('(prefers-color-scheme: dark)')

	media.addEventListener('change', () => {
		if (media.matches) document.documentElement.classList.add('dark')
		else document.documentElement.classList.add('light')
		config.globalConfig.isDark = media.matches
	})

	onUnmounted(() => {
		stopElementConfig(), stopSideBarConfig(), stopGlobalConfig()
	})
}
