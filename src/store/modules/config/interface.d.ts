interface ISideBar {
	width: number
	backgroundColor: string
	collapse: boolean
	around: 'left' | 'right'
}

interface IElementConfig {
	locale: 'zh-cn' | 'en'
	size: 'default' | 'small' | 'large'
	zIndex: number
	button: { autoInsertSpace: boolean }
	message: { max: number }
}

interface IConfig extends ISideBar, IElementConfig {}
