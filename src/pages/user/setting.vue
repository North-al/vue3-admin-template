<template>
	<header flex select-none items-center class="setting">
		<icons8:left-arrow text-22px n-hover-gray-500></icons8:left-arrow>
		<ci:line-xl text-gray-500 text-20px></ci:line-xl>
		<div text-22px font-bold mx-10px>设置中心</div>
		<el-tag type="success">当前配置</el-tag>
	</header>
	<el-card mt-50px class="!bg-transparent" shadow="hover">
		<template #header>
			<div text-22px font-bold mx-10px>侧边栏设置</div>
		</template>
		<div my-10px p-10px flex items-center>
			<div w="8%">最大宽度</div>
			<el-input-number v-model="sideBar.width" :step="2" step-strictly :min="200"></el-input-number>
		</div>
		<div my-10px p-10px flex items-center>
			<div w="8%">背景颜色</div>
			<el-color-picker v-model="sideBar.backgroundColor" />
		</div>
		<div my-10px p-10px flex items-center>
			<div w="8%">展示方向</div>
			<el-select v-model="sideBar.around" @change="changeSideBarAround">
				<el-option value="left" label="靠左显示"></el-option>
				<el-option value="right" label="靠右显示"></el-option>
			</el-select>
		</div>
	</el-card>
</template>
<script lang="ts" setup>
import { useConfigStore } from '~/store'

const { sideBar } = storeToRefs(useConfigStore())

const changeSideBarAround = (val: string) => {
	console.log(`output->val`, val)
}
</script>
