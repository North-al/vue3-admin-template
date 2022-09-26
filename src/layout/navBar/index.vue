<template>
	<div flex-between h-full>
		<div v-if="store.sideBar.around === 'left'">
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

const store = useConfigStore()

const renderComponents = [Font, language, github, setting, collapse]

const filterComponents = shallowRef({})
watch(
	() => store.sideBar.around,
	(val: 'left' | 'right') => {
		val === 'left'
			? (filterComponents.value = [...renderComponents].splice(0, renderComponents.length - 1))
			: (filterComponents.value = [...renderComponents])
	},
	{
		immediate: true
	}
)

// const filterComponents =
// 	store.sideBar.around === 'left'
// 		? [...renderComponents].splice(0, renderComponents.length - 1)
// 		: [...renderComponents]

console.log({ filterComponents })
</script>

<style lang="scss" scoped></style>
