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

	onUnmounted(() => {
		stopElementConfig(), stopSideBarConfig()
	})
}
