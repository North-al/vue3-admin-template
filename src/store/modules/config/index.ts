import { initElementConfigStore, initGlobalConfigStore, initSideBarConfigStore } from './init'

export const useConfigStore = defineStore('N-config-store', () => {
	const sideBar = initSideBarConfigStore()

	const elementConfig = initElementConfigStore()

	const globalConfig = initGlobalConfigStore()

	return {
		elementConfig,
		sideBar,
		globalConfig
	}
})
