<template>
	<!-- 单菜单 -->
	<template v-if="!route.meta?.hidden">
		<el-menu-item
			:index="route.path"
			v-if="!hasChildrenRoute"
			hover="dark:bg-[var(--el-color-primary)] dark:text-white bg-[#dfefff]"
		>
			<Icon :icon="routeMeta.icon" v-if="routeMeta.icon" text-20px></Icon>
			<template #title>
				<span m-l-10px>{{ t(routeMeta.title!) }}</span>
			</template>
		</el-menu-item>

		<!-- 多菜单 -->
		<el-sub-menu v-else :index="route.path">
			<template #title>
				<Icon :icon="routeMeta.icon" v-if="routeMeta.icon"></Icon>
				<span m-l-10px>{{ t(routeMeta.title!) }}</span>
			</template>

			<menu-item v-for="item in route?.children" :key="item.path" :route="item" />
		</el-sub-menu>
	</template>
</template>

<script setup lang="ts">
import type { RouteMeta, RouteRecordRaw } from 'vue-router'
import { Icon } from '@iconify/vue'
const props = defineProps<{ route: RouteRecordRaw }>()

const { t } = useI18n()
// 获取是否存在子路由
const hasChildrenRoute = computed(() => {
	const children: RouteRecordRaw[] = props.route.children ?? []
	return !!children.filter((item) => !item.meta?.hidden).length
})

const routeMeta = computed(() => props.route.meta as RouteMeta)
</script>

<style lang="scss" scoped></style>
