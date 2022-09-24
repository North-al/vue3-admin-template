interface IConfig {
	locale: 'zh-cn' | 'en'
	size: 'default' | 'small' | 'large'
	zIndex: number
	button: { autoInsertSpace: boolean }
	message: { max: number }
	sideBar: {
		width: string
		backgroundColor: string
	}
}
