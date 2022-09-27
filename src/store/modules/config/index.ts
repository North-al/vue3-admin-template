import { initElementConfigStore, initSideBarConfigStore } from './init'

export const useConfigStore = defineStore('N-config-store', () => {
	const sideBar = initSideBarConfigStore()

	const elementConfig = initElementConfigStore()

	return {
		elementConfig,
		sideBar
	}
})
