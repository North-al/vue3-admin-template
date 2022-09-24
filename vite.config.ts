import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { plugins } from './src/config'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
	const env = loadEnv(mode, process.cwd(), '') as any

	return defineConfig({
		base: './',
		plugins: [vue(), ...plugins(env)],
		resolve: {
			alias: [{ find: '~/', replacement: `${resolve(__dirname, 'src')}/` }]
		},
		build: {
			target: 'es2015',
			minify: 'esbuild'
		},
		server: {
			open: true,
			port: env.VITE_APP_PORT,
			host: '0.0.0.0',
			proxy: {
				'^/api': {
					target: 'http://example.com',
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, '')
				}
			}
		},
		optimizeDeps: {
			include: ['vue', 'vue-router', 'pinia']
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "~/styles/scss/variable.scss";'
				}
			}
		}
	})
}
