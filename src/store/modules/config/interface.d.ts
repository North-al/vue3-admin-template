interface ISideBar {
	width: number
	backgroundColor: string
	collapse: boolean
	around: 'left' | 'right'
}

interface IElementConfig {
	locale: 'zh_CN' | 'en'
	size: 'default' | 'small' | 'large'
	zIndex: number
	button: { autoInsertSpace: boolean }
	message: { max: number }
}

interface IConfig extends ISideBar, IElementConfig {}
