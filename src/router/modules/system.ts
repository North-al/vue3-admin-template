import type { RouteRecordRaw } from 'vue-router'
import Layout from '~/layout/index.vue'
import { setMeta } from '../helper'

export const userRoute: RouteRecordRaw[] = [
	{
		path: '/system',
		name: 'System',
		redirect: '/system/interface',
		component: Layout,
		meta: setMeta('menu.user.management', 'fa-regular:user'),

		children: [
			{
				path: 'interface',
				name: 'System_Interface',
				component: () => import('~/pages/system/interface.vue'),
				meta: setMeta('menu.system.interface', 'codicon:symbol-interface', { order: 1 })
			}
		]
	}
]
