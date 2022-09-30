<template>
	<div>{{ t('menu.workbench') }}</div>
	<el-pagination :page-size="100" layout="total, prev, pager, next" :total="1000" />
</template>

<script setup lang="ts">
const { t } = useI18n()
const [loading, setLoading] = useLoading()
console.log('useLoading ->', loading.value)
</script>

<style lang="scss" scoped></style>
