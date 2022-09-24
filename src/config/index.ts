import { UnocssPlugin } from './plugins/Unocss'
import { AutoImportPlugins } from './plugins/AutoImport'
import { AutoComponents } from './plugins/AutoComponents'
import { AutoIcons } from './plugins/AutoIcon'
import { GzipPlugin } from './plugins/Gzip'

export const plugins = (env: ImportMetaEnv) => [
	UnocssPlugin(),
	AutoImportPlugins(),
	AutoComponents(),
	AutoIcons(),
	GzipPlugin(env.VITE_OPEN_GZIP)
]
