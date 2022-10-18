<template>
	<el-row>
		<el-col
			:span="5"
			mx-20px
			alternate-bg
			rounded-6px
			border-x-slate-50
			shadow-md
			dark:shadow-slate="[300/10]"
			v-for="item in board"
			:key="item.title"
		>
			<div flex-between px-24px py-10px>
				<div>
					<div text-12px text-gray-400>{{ item.title }}</div>
					<div text-24px my-12px font="bold" alternate-text>{{ item.num }}</div>
					<div text="[#44C089] 12px">{{ item.percentage }}</div>
				</div>
				<div w-100px h-100px ref="lineChat"></div>
			</div>
		</el-col>
	</el-row>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'

const lineChat = ref<Array<HTMLDivElement> | null>(null)
const board = [
	{ title: '实时控制', num: Math.ceil(Math.random() * 1000), percentage: `+${Math.ceil(Math.random() * 100)}%` },
	{ title: '总访问量', num: Math.ceil(Math.random() * 1000), percentage: `+${Math.ceil(Math.random() * 100)}%` },
	{ title: '观看时间', num: Math.ceil(Math.random() * 1000), percentage: `+${Math.ceil(Math.random() * 100)}%` },
	{ title: '总点击率', num: Math.ceil(Math.random() * 1000), percentage: `+${Math.ceil(Math.random() * 100)}%` }
]
nextTick(() => {
	for (let i = 0; i < lineChat.value!.length; i++) {
		const chart = echarts.init(lineChat.value![i])
		chart.setOption({
			xAxis: {
				type: 'category',
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				show: false
			},
			yAxis: {
				type: 'value',
				show: false
			},
			series: [
				{
					data: [150, 230, 224, 218, 135, 147, 260],
					type: 'line'
				}
			]
		})
	}
})
</script>

<style lang="scss" scoped></style>
