import { defineConfig } from 'unocss'

export default defineConfig({
	shortcuts: {
		'flex-center': 'flex items-center justify-center',
		'flex-end': 'flex items-center justify-end',
		'flex-around': 'flex items-center justify-around',
		'flex-between': 'flex items-center justify-between',
		'n-hover-gray-500': 'text-gray-500 dark:hover:text-white hover:text-black transition-duration-300'
	},
	theme: {}
})
