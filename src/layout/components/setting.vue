<template>
	<div mx-8px>
		<ep:setting text-20px n-hover-gray-500 cursor-pointer outline-none @click="jumpUserSetting"></ep:setting>
	</div>
</template>

<script setup lang="ts">
const router = useRouter()
const jumpUserSetting = () => {
	router.push({
		path: '/user/setting'
	})
}
</script>

<style lang="scss" scoped></style>
