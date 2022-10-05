<template>
	<div>{{ t('menu.workbench') }}</div>
	<el-pagination :page-size="100" layout="total, prev, pager, next" :total="1000" />
	<vue3-json-editor
		v-model="json"
		:show-btns="true"
		mode="code"
		:expandedOnStart="true"
		@json-change="onJsonChange"
	/>
	{{ json }}
</template>

<script setup lang="ts">
import { Vue3JsonEditor } from 'vue3-json-editor'
const { t } = useI18n()

const json = ref({ a: '123', b: '123' })
const onJsonChange = (val: string) => {
	console.log({ val })
}
</script>

<style lang="scss" scoped></style>
