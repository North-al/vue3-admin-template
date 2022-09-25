<template>
	<div flex-between h-full>
		<div v-if="sideBar.around === 'left'">
			<collapse></collapse>
		</div>
		<div></div>
		<div class="flex-center">
			<component v-for="(com, index) in filterComponents" :is="com" :key="index"></component>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useConfigStore } from '~/store'
import collapse from '../components/collapse.vue'
import github from '../components/github.vue'
import language from '../components/language.vue'
import Font from '../components/font.vue'
import setting from '../components/setting.vue'

const { sideBar } = storeToRefs(useConfigStore())

const renderComponents = [Font, language, github, setting, collapse]
const filterComponents =
	sideBar.value.around === 'left' ? renderComponents.splice(0, renderComponents.length - 1) : renderComponents
</script>

<style lang="scss" scoped></style>
