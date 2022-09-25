<template>
	<div mx-8px>
		<!-- <el-tooltip content="菜单折叠" placement="bottom"> -->
		<gg:menu @click="toggleMenuCollapse" text-22px n-hover-gray-500 cursor-pointer outline-none></gg:menu>
		<!-- </el-tooltip> -->
	</div>
</template>

<script setup lang="ts">
import { useConfigStore } from '~/store'

const { sideBar } = storeToRefs(useConfigStore())
const toggleMenuCollapse = () => {
	sideBar.value.collapse = !sideBar.value.collapse
}
</script>

<style lang="scss" scoped></style>
