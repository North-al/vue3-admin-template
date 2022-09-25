<template>
	<div mx-8px>
		<akar-icons:github-fill
			@click="jumpGithub"
			text-18px
			n-hover-gray-500
			cursor-pointer
			outline-none
		></akar-icons:github-fill>
	</div>
</template>

<script setup lang="ts">
const jumpGithub = () => {
	window.open('https://github.com/North-al/vue3-admin-template', '_blank')
}
</script>

<style lang="scss" scoped></style>
