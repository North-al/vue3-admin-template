import type { RouteRecordRaw } from 'vue-router'
import Layout from '~/layout/index.vue'
import { setMeta } from '../helper'

export const userRoute: RouteRecordRaw[] = [
	{
		path: '/user',
		name: 'User',
		redirect: '/user/index',
		component: Layout,
		meta: setMeta('用户管理', 'icon-park-outline:workbench'),

		children: [
			{
				path: '/user/index',
				name: 'UserIndex',
				component: () => import('~/pages/user/index.vue'),
				meta: setMeta('用户中心', 'icon-park-outline:workbench', { order: 1 })
			},
			{
				path: 'detail',
				name: 'UserDetail',
				component: () => import('~/pages/user/detail.vue'),
				meta: {
					icon: 'icon-park-outline:workbench',
					title: '用户详情',
					hidden: false,
					keepAlive: false,
					order: 3
				}
			},
			{
				path: 'login',
				name: 'UserLogin',
				component: () => import('~/pages/user/login.vue'),
				meta: {
					icon: 'icon-park-outline:workbench',
					title: '用户登录',
					hidden: true,
					keepAlive: false,
					order: 2
				}
			},
			{
				path: 'setting',
				name: 'UserSetting',
				component: () => import('~/pages/user/setting.vue'),
				meta: setMeta('网站设置', 'ant-design:setting-outlined', { hidden: true })
			}
		]
	}
]
