import type { RouteRecordRaw } from 'vue-router'
import Layout from '~/layout/index.vue'
import { setMeta } from '../helper'

export const workbenchRoute: RouteRecordRaw[] = [
	{
		path: '/workbench',
		name: 'Workbench',
		redirect: '/workbench/index',
		component: Layout,
		meta: setMeta('控制台', 'icon-park-outline:workbench', { order: 1 }),
		children: [
			{
				path: 'index',
				name: 'WorkbenchIndex',
				component: () => import('~/pages/workbench/index.vue'),
				meta: setMeta('menu.workbench', 'icon-park-outline:workbench', { order: 1 })
			}
		]
	}
]
