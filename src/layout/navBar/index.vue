<template>
	<div flex-between h-full>
		<div v-if="sideBar.around === 'right'">
			<collapse></collapse>
		</div>
		<div>中</div>
		<div class="flex-center">
			<component v-for="(com, index) in comp" :is="com" :key="index"></component>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useConfigStore } from '~/store'
import collapse from '../components/collapse.vue'
import github from '../components/github.vue'
import language from '../components/language.vue'

const comp = [language, github, collapse]

const { sideBar } = storeToRefs(useConfigStore())
</script>

<style lang="scss" scoped></style>
