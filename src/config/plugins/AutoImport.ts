import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://github.com/antfu/unplugin-auto-import
export const AutoImportPlugins = () =>
	AutoImport({
		include: [
			/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
			/\.vue$/,
			/\.vue\?vue/, // .vue
			/\.md$/ // .md
		],
		imports: [
			'vue',
			'vue-router',
			'pinia',
			{
				'vue-i18n': ['useI18n']
			}
		],
		dts: './src/interface/auto-imports.d.ts',
		eslintrc: {
			enabled: false, // 改成true生成json文件
			filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
			globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
		},
		resolvers: [ElementPlusResolver()]
	})
