<template>
	<div mx-8px>
		<el-color-picker v-model="config.elementConfig.theme.primary" size="default" @change="changeTheme" />
	</div>
</template>

<script setup lang="ts">
import { useConfigStore } from '~/store'

const config = useConfigStore()

const changeTheme = (color: string) => {
	config.elementConfig.theme.primary = color
	// document.documentElement 是全局变量时
	// const el = document.documentElement
	// // const el = document.getElementById('xxx')

	// // 获取 css 变量
	// getComputedStyle(el).getPropertyValue(`--el-color-primary`)

	// // 设置 css 变量
	// el.style.setProperty('--el-color-primary', color)
}
</script>

<style lang="scss" scoped></style>
