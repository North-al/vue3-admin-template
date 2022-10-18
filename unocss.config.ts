import { defineConfig } from 'unocss'

export default defineConfig({
	shortcuts: {
		'flex-center': 'flex items-center justify-center',
		'flex-end': 'flex items-center justify-end',
		'flex-around': 'flex items-center justify-around',
		'flex-between': 'flex items-center justify-between',
		'n-hover-gray-500': 'text-gray-500 dark:hover:text-white hover:text-black transition-duration-300',
		'dark-theme': 'dark:bg-$dark-bg dark:text-$dark-text',
		'light-theme': 'bg-$light-bg text-$light-text',
		theme: 'dark-theme light-theme',
		'alternate-bg': 'dark:bg-$dark-side bg-$light-side', // 区别于主题色的背景色
		'alternate-text': 'dark:text-$dark-text text-$light-text' // 区别于正常主题的更深的文字颜色
	},
	theme: {}
})
