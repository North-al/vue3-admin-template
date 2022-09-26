<template>
	<div>{{ t('test') }}</div>
	<el-pagination :page-size="100" layout="total, prev, pager, next" :total="1000" />
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style lang="scss" scoped></style>
