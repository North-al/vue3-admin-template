<template>
	<div mx-8px>
		<cil:language @click="toggleMenuCollapse" text-18px n-hover-gray-500 cursor-pointer outline-none></cil:language>
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
