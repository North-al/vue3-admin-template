<template>
	<div class="user shadow border-x-slate-50 shadow-md dark:shadow-slate-300/10" v-if="!sideBar.collapse">
		<heroicons-outline:menu-alt-1 n-hover-gray-500 cursor-pointer text-18px />
		<div text-center>
			<img class="user-avatar" src="../../assets/user.jpg" width="60" height="60" alt="用户头像" />
			<p mt-12px n-hover-gray-500 cursor-pointer text-14px>North</p>
		</div>
		<akar-icons:bell n-hover-gray-500 cursor-pointer text-18px />
	</div>

	<div class="user" v-else>
		<img class="user-avatar" src="../../assets/user.jpg" width="40" height="40" alt="用户头像" title="North" />
	</div>
</template>

<script setup lang="ts">
import { useConfigStore } from '~/store'

const { sideBar } = storeToRefs(useConfigStore())
</script>

<style lang="scss" scoped>
.user {
	--at-apply: flex justify-around;
	--at-apply: px-20px pt-20px py-10px mb-20px transition-duration-300;
	border-radius: 0 0 16px 16px;
	user-select: none;

	&-avatar {
		--at-apply: rounded-1/2 cursor-pointer transition-duration-300;
	}
}
</style>
