// 获取浏览器当前语言
export const getCurrentLanguage = () => {
	const language = navigator.language
	const currentLanguage = language.indexOf('zh') !== -1 ? 'zh_CN' : 'en'
	localStorage.setItem('N-language-key', currentLanguage)
	return currentLanguage
}
