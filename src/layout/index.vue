<template>
	<el-config-provider :size="store.elementConfig.size" :z-index="store.elementConfig.zIndex" :locale="locale">
		<div class="layout">
			<el-container class="layout-container">
				<!-- 左菜单 -->
				<side-bar v-if="store.sideBar.around === 'left'"></side-bar>
				<el-container>
					<!-- 头部 -->
					<el-header class="layout-header">
						<nav-bar></nav-bar>
					</el-header>

					<!-- 内容 -->
					<el-main class="layout-main">
						<router-view></router-view>
					</el-main>

					<!-- 页尾 -->
					<page-footer></page-footer>
				</el-container>

				<!-- 右菜单 -->
				<side-bar v-if="store.sideBar.around === 'right'"></side-bar>
			</el-container>
		</div>
	</el-config-provider>
</template>

<script setup lang="ts">
import { useConfigStore } from '~/store'
import sideBar from './sideBar/index.vue'
import navBar from './navBar/index.vue'
import pageFooter from './pageFooter/index.vue'
import En from 'element-plus/es/locale/lang/en'
import ZhCn from 'element-plus/lib/locale/lang/zh-cn'
import { getCurrentLanguage } from '~/utils'
import { Storage_Key } from '~/enums'

const route = useRoute()
const store = useConfigStore()
const { t } = useI18n()

const language = ref(localStorage.getItem(Storage_Key.locale) || getCurrentLanguage() || 'zh_CN')
const locale = computed(() => (language.value === 'zh_CN' ? ZhCn : En))

const stopElementConfig = watch(
	() => store.elementConfig.locale,
	(val: string) => (language.value = val),
	{
		immediate: true
	}
)

const stopChangeTitle = watch(
	() => route.fullPath,
	(val) => {
		document.title = `North - ${t(route.meta.title!)}`
	},
	{
		immediate: true
	}
)

onUnmounted(() => {
	stopElementConfig()
	stopChangeTitle()
})
</script>

<style lang="scss" scoped>
.layout {
	&-container {
		--at-apply: h-[100vh] bg-[var(--light-bg)] dark:bg-[var(--dark-bg)];
	}

	&-aside {
		--at-apply: h-[100vh] bg-[var(--light-side)] dark:bg-[var(--dark-side)];
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
