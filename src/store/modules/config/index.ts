export const useConfigStore = defineStore('template-config-store', () => {
	const sideBar = reactive<ISideBar>({
		width: 270,
		backgroundColor: '#121212',
		collapse: false,
		around: 'left'
	})

	const elementConfig = reactive<IElementConfig>({
		locale: 'zh-cn',
		size: 'default',
		zIndex: 3000,
		button: {
			autoInsertSpace: true
		},
		message: {
			max: 10
		}
	})

	const config = reactive<IConfig>({
		...elementConfig,
		...sideBar
	})

	return {
		config,
		elementConfig,
		sideBar
	}
})
