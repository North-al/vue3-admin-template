import type { RouteRecordRaw } from 'vue-router'
import Layout from '~/layout/index.vue'
import { setMeta } from '../helper'

export const websiteRoute: RouteRecordRaw[] = [
	{
		path: '/website',
		name: 'Website',
		redirect: '/website/setting',
		component: Layout,
		meta: setMeta('网站管理', 'ant-design:setting-outlined', { hidden: true }),
		children: [
			{
				path: 'setting',
				name: 'WebsiteSetting',
				component: () => import('~/pages/website/setting.vue'),
				meta: setMeta('网站设置', 'ant-design:setting-outlined', { hidden: true })
			}
		]
	}
]
