<template>
	<el-aside
		class="layout-aside"
		transition="duration-300"
		:style="{ width: sideBar.collapse ? '64px' : `${sideBar.width}px` }"
	>
		<user-avatar></user-avatar>
		<Menu :routes="filterRoutes"></Menu>
	</el-aside>
</template>

<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import { useConfigStore } from '~/store'
import Menu from '../components/menu.vue'
import UserAvatar from '../components/user-avatar.vue'

const { options } = useRouter()

const {
	routes: [_, ...routes]
} = options

const filterRoutes: RouteRecordRaw[] = []

const { sideBar } = storeToRefs(useConfigStore())

routes
	.sort((a, b) => a.meta!.order - b.meta!.order)
	.forEach((r) => {
		const children = r.children

		// 调整子路由路径
		children?.forEach((item) => {
			const path = item.path

			if (!path.startsWith('/')) {
				item.path = `${r.path}/${path}`
			}
		})

		// 根据order排序子路由
		children?.sort((a, b) => a.meta!.order - b.meta!.order)

		if (children?.length === 1) {
			return filterRoutes.push(children.at(0)!)
		}
		filterRoutes.push(r)
	})
</script>

<style lang="scss" scoped>
.layout-aside {
	--at-apply: h-[100vh] relative;

	:deep(.el-menu) {
		background-color: transparent;
		border: none;
		user-select: none;
	}

	:deep(.el-sub-menu__icon-arrow) {
		transform: rotate(90deg) !important;
	}
	:deep(.is-opened) .el-sub-menu__icon-arrow {
		transform: rotate(0deg) !important;
	}
}
</style>
