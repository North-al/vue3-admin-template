import type { RouteRecordRaw } from 'vue-router'
import Layout from '~/layout/index.vue'
import { setMeta } from '../helper'

export const userRoute: RouteRecordRaw[] = [
	{
		path: '/user',
		name: 'User',
		redirect: '/user/index',
		component: Layout,
		meta: setMeta('menu.user.management', 'fa-regular:user'),

		children: [
			{
				path: '/user/index',
				name: 'UserIndex',
				component: () => import('~/pages/user/index.vue'),
				meta: setMeta('menu.user.center', 'bxs:user-account', { order: 1 })
			},
			{
				path: 'detail',
				name: 'UserDetail',
				component: () => import('~/pages/user/detail.vue'),
				meta: setMeta('menu.user.detail', 'mdi:card-account-details-outline', { order: 3 })
			},
			{
				path: 'setting',
				name: 'UserSetting',
				component: () => import('~/pages/user/setting.vue'),
				meta: setMeta('menu.user.setting', 'bxs:user-account', { hidden: true })
			}
		]
	}
]
