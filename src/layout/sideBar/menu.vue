<template>
	<el-scrollbar class="menu-height">
		<el-menu :router="true" :collapse="sideBar.collapse">
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
</script>

<style lang="scss" scoped>
.menu-height {
	height: calc(100vh - 150px);
}
</style>
