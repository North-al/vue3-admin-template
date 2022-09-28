<template>
	<div mx-8px>
		<bx:moon
			text-20px
			n-hover-gray-500
			cursor-pointer
			outline-none
			v-if="!config.globalConfig.isDark"
			@click="toggleDark"
		></bx:moon>
		<bx:sun text-20px n-hover-gray-500 cursor-pointer outline-none v-else @click="toggleDark"></bx:sun>
	</div>
</template>

<script setup lang="ts">
import { useConfigStore } from '~/store'

const config = useConfigStore()

const toggleDark = () => {
	config.globalConfig.isDark = !config.globalConfig.isDark
}
</script>

<style lang="scss" scoped></style>
