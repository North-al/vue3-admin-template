import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://github.com/antfu/unplugin-vue-components
export const AutoComponents = () =>
	Components({
		dirs: ['src/components'],
		// 组件有效的扩展名
		extensions: ['vue'],
		dts: './src/interface/components.d.ts',
		deep: true,
		include: [/\.vue$/, /\.vue\?vue/],
		exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
		resolvers: [ElementPlusResolver(), IconsResolver({ prefix: false })]
	})
