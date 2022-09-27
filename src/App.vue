<template>
	<router-view></router-view>
</template>

<script setup lang="ts">
import { useConfigSubscribe } from './store'

useConfigSubscribe()
</script>
