<template>
	<div mx-8px>
		<bi:arrow-left-right
			text-18px
			n-hover-gray-500
			cursor-pointer
			outline-none
			@click="changeSideDirection"
		></bi:arrow-left-right>
	</div>
</template>

<script setup lang="ts">
import { useConfigStore } from '~/store'

const config = useConfigStore()
const changeSideDirection = () => {
	config.sideBar.around === 'left' ? (config.sideBar.around = 'right') : (config.sideBar.around = 'left')
}
</script>

<style lang="scss" scoped></style>
