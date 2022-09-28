interface ISideBar {
	width: number
	backgroundColor: string
	darkBackgroundColor: string
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

interface IGlobalConfig {
	isDark: boolean
}

interface IConfig extends ISideBar, IElementConfig {}
