<template>
	<el-scrollbar class="menu-height">
		<el-menu :router="true" :collapse="sideBar.collapse" :default-active="activeMenu">
			<menu-item v-for="route in routes" :key="route.path" :route="route" />
		</el-menu>
	</el-scrollbar>
</template>

<script setup lang="ts">
import MenuItem from './menu-item.vue'
import type { RouteRecordRaw } from 'vue-router'
import { useConfigStore } from '~/store'

defineProps<{ routes: RouteRecordRaw[] }>()

const { sideBar } = storeToRefs(useConfigStore())

const route = useRoute()
const activeMenu = computed<string>(() => (route.meta?.activeMenu as string) ?? route.path)
</script>

<style lang="scss" scoped>
.menu-height {
	height: calc(100vh - 150px);
}
</style>
