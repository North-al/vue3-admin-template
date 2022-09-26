<template>
	<div mx-8px>
		<el-dropdown @command="handleMenuItem">
			<bx:font-size text-20px n-hover-gray-500 cursor-pointer outline-none></bx:font-size>
			<template #dropdown>
				<el-dropdown-menu>
					<p py-10px px-20px>
						<span>当前组件尺寸：</span>
						<el-tag>{{ { default: '默认', small: '小', large: '大' }[store.elementConfig.size] }}</el-tag>
					</p>
					<el-dropdown-item v-for="drop in dropdown" :key="drop.value" :command="drop" :divided="true">
						<fontisto:font mx-6px text-10px></fontisto:font>
						<span px-2px>{{ drop.title }}</span>
					</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<script setup lang="ts">
import { useConfigStore } from '~/store'

type IDropdown = { title: string; value: 'default' | 'small' | 'large' }
const dropdown: Array<IDropdown> = [
	{ title: '小', value: 'small' },
	{ title: '默认', value: 'default' },
	{ title: '大', value: 'large' }
]

const store = useConfigStore()
const handleMenuItem = (dropdown: IDropdown) => {
	store.elementConfig.size = dropdown.value
}
</script>

<style lang="scss" scoped></style>
