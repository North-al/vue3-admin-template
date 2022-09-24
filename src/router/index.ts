import { createRouter, createWebHistory } from 'vue-router'

import Layout from '~/layout/index.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			redirect: '/workbench'
		},
		{
			path: '/workbench',
			name: 'Workbench',
			redirect: '/workbench/index',
			component: Layout,
			meta: {
				icon: 'icon-park-outline:workbench',
				title: '工作台',
				hidden: false,
				keepAlive: false
			},
			children: [
				{
					path: 'index',
					name: 'WorkbenchIndex',
					component: () => import('~/pages/workbench/index.vue'),
					meta: {
						icon: 'icon-park-outline:workbench',
						title: '控制台',
						hidden: false,
						keepAlive: false
					}
				}
			]
		}
	]
})

export default router
