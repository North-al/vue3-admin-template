export const useConfigStore = defineStore('template-config-store', () => {
	const config: IConfig = reactive({
		locale: 'zh-cn',
		size: 'small',
		zIndex: 3000,
		button: {
			autoInsertSpace: true
		},
		message: {
			max: 10
		},
		sideBar: {
			width: '200px',
			backgroundColor: '#3d3d3d'
		}
	})

	return {
		config
	}
})
