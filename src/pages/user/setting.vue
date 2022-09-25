<template>
	<el-page-header @back="goBack">
		<template #content>
			<span class="text-large font-600 mr-3"> Title </span>
		</template>
	</el-page-header>
</template>
<script lang="ts" setup>
const router = useRouter()
const goBack = () => {
	router.go(-1)
}
</script>
