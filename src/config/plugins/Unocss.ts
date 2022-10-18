import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons, transformerDirectives } from 'unocss'

// https://github.com/unocss/unocss
export const UnocssPlugin = () =>
	Unocss({
		presets: [presetUno(), presetAttributify(), presetIcons()],
		transformers: [transformerDirectives({})]
	})
