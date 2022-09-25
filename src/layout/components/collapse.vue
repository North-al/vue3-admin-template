<template>
	<bx:menu @click="toggleMenuCollapse"></bx:menu>
</template>

<script setup lang="ts">
import { useConfigStore } from '~/store'

const { sideBar } = storeToRefs(useConfigStore())
const toggleMenuCollapse = () => {
	sideBar.value.collapse = !sideBar.value.collapse
}
</script>

<style lang="scss" scoped></style>
