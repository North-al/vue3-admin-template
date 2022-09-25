import { createRouter, createWebHashHistory } from 'vue-router'

import { routes } from './modules'

const router = createRouter({
	// history: createWebHistory(import.meta.env.BASE_URL),
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			redirect: '/workbench'
		},
		...routes
	]
})

export default router
