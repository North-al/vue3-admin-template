<template>
	<div>
		<el-button type="danger" @click="handleNextError"> 下一个错误 </el-button>
		<el-table ref="tableRef" :data="tableData" max-height="500px">
			<el-table-column prop="content" label="content">
				<template #default="{ row, $index }">
					<div v-if="row.type === 'success'">{{ row.content }} - {{ $index }}</div>
					<div v-else :ref="(el) => setErrorRefs(el, $index)" style="color: red">
						{{ row.content }} - {{ $index }}
					</div>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script setup lang="ts">
import type { ElTable } from 'element-plus'

const tableData = ref([
	{
		id: 1,
		type: 'success',
		content: 'Success: 流畅度测试成功'
	}
])

const initData = () => {
	for (let i = 2; i <= 99; i++) {
		if (i % 10 !== 0) {
			tableData.value.push({
				id: i,
				type: 'success',
				content: `Success: 流畅度测试成功`
			})
		} else {
			tableData.value.push({
				id: i,
				type: 'error',
				content: `Error: 流畅度测试失败`
			})
		}
	}
}
initData()

const tableRef = ref<InstanceType<typeof ElTable>>()
const errorRefs = ref<Record<number, HTMLDivElement>>({})
const currentErrorIndex = ref(0)
const setErrorRefs = (el: any, index: number) => {
	if (el) {
		errorRefs.value[index] = el
	}
}

const handleNextError = () => {
	const scrollElement = Object.values(errorRefs.value)[currentErrorIndex.value]
	const targetTop = scrollElement.getBoundingClientRect().top

	const containerTop = tableRef.value?.$el.querySelector('.el-table__body')?.getBoundingClientRect().top

	tableRef.value?.setScrollTop(targetTop - containerTop)
	++currentErrorIndex.value

	if (currentErrorIndex.value >= Object.values(errorRefs.value).length) {
		currentErrorIndex.value = 0
	}
}
</script>

<style lang="scss" scoped></style>
