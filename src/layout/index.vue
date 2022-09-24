<template>
	<el-config-provider :size="size" :z-index="zIndex">
		<div class="layout">
			<el-container class="layout-container">
				<el-aside class="layout-aside">Aside</el-aside>
				<el-container>
					<el-header class="layout-header">Header</el-header>
					<el-main class="layout-main">Main</el-main>
					<el-footer class="layout-footer">Copyright © North 2022</el-footer>
				</el-container>
			</el-container>
		</div>
	</el-config-provider>
</template>

<script setup lang="ts">
import { useConfigStore } from '~/store'

const {
	config: {
		value: {
			sideBar: { backgroundColor, width },
			size,
			zIndex
		}
	}
} = storeToRefs(useConfigStore())
</script>

<style lang="scss" scoped>
.layout {
	&-container {
		--at-apply: h-[100vh];
	}

	&-aside {
		background-color: v-bind(backgroundColor);
		--at-apply: h-[100vh];
	}

	&-header {
		--at-apply: border-x-slate-50 shadow-md dark:shadow-slate-300/10;
	}

	&-footer {
		--at-apply: text-center text-12px text-gray-500;
		--at-apply:  dark:hover:text-white hover:text-black;
		--at-apply: transition-duration-300 flex-center h-40px cursor-pointer;
	}
}
</style>
