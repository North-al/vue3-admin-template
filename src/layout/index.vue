<template>
	<el-config-provider :size="size" :z-index="zIndex">
		<div class="layout">
			<el-container class="layout-container">
				<el-container>
					<!-- 左菜单 -->
					<side-bar v-if="around === 'left'"></side-bar>

					<!-- 头部 -->
					<el-header class="layout-header">
						<nav-bar></nav-bar>
					</el-header>

					<!-- 内容 -->
					<el-main class="layout-main">
						<router-view></router-view>
					</el-main>

					<!-- 页尾 -->
					<el-footer class="layout-footer">Copyright © North 2022</el-footer>
				</el-container>
				<!-- 右菜单 -->
				<side-bar v-if="around === 'right'"></side-bar>
			</el-container>
		</div>
	</el-config-provider>
</template>

<script setup lang="ts">
import { useConfigStore } from '~/store'
import sideBar from './sideBar/index.vue'
import navBar from './navBar/index.vue'

const {
	elementConfig: {
		value: { size, zIndex }
	},
	sideBar: {
		value: { backgroundColor, width, around }
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
