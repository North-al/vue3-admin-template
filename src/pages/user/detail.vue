<template>
	<div>pages1</div>
	<input type="text" v-model="test.name" />
	{{ test.name }}
</template>

<script setup lang="ts">
class Test {
	name: string
	constructor(name: string) {
		this.name = name
	}
}

const test = new Test('test')
</script>

<style lang="scss" scoped></style>
