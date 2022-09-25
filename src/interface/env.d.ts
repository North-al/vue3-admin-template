/* eslint-disable spaced-comment */
/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_PORT: number
	readonly VITE_OPEN_GZIP: boolean
	readonly VITE_APP_TITLE: string
	readonly VITE_API_BASEURL: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

import 'vue-router'

declare module 'vue-router' {
	interface RouteMeta {
		title?: string
		icon?: string
		hidden?: boolean
		keepAlive?: boolean
		order: number
	}
}
