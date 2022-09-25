import type { RouteRecordRaw } from 'vue-router'
import Layout from '~/layout/index.vue'

export const workbenchRoute: RouteRecordRaw[] = [
	{
		path: '/workbench',
		name: 'Workbench',
		redirect: '/workbench/index',
		component: Layout,
		meta: {
			icon: 'icon-park-outline:workbench',
			title: '工作台',
			hidden: false,
			keepAlive: false,
			order: 1
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
					keepAlive: false,
					order: 1
				}
			}
		]
	}
]
