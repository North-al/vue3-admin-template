<template>
	<div>
		<vue3-json-editor
			h-400px
			v-model="json"
			mode="code"
			:expandedOnStart="true"
			@json-change="changeJSON"
			@has-error="hasErrorJSON"
		></vue3-json-editor>
		<el-button type="primary" @click="transform(json)">转换interface</el-button>
	</div>
</template>

<script setup lang="ts">
import { Vue3JsonEditor } from 'vue3-json-editor'
import { jsonToInterface } from '~/libs/jsonToInterface'

const json = ref([
	{
		url: 'https://api.github.com/repos/joaomede/vue3-json-editor/pulls/26',
		id: 1075463569,
		node_id: 'PR_kwDOFh-4_M5AGkWR',
		html_url: 'https://github.com/joaomede/vue3-json-editor/pull/26',
		diff_url: 'https://github.com/joaomede/vue3-json-editor/pull/26.diff',
		patch_url: 'https://github.com/joaomede/vue3-json-editor/pull/26.patch',
		issue_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/issues/26',
		number: 26,
		state: 'open',
		locked: false,
		title: 'fix: Example Change data binding to bidirectional',
		user: {
			login: 'North-al',
			id: 63443442,
			node_id: 'MDQ6VXNlcjYzNDQzNDQy',
			avatar_url: 'https://avatars.githubusercontent.com/u/63443442?v=4',
			gravatar_id: '',
			url: 'https://api.github.com/users/North-al',
			html_url: 'https://github.com/North-al',
			followers_url: 'https://api.github.com/users/North-al/followers',
			following_url: 'https://api.github.com/users/North-al/following{/other_user}',
			gists_url: 'https://api.github.com/users/North-al/gists{/gist_id}',
			starred_url: 'https://api.github.com/users/North-al/starred{/owner}{/repo}',
			subscriptions_url: 'https://api.github.com/users/North-al/subscriptions',
			organizations_url: 'https://api.github.com/users/North-al/orgs',
			repos_url: 'https://api.github.com/users/North-al/repos',
			events_url: 'https://api.github.com/users/North-al/events{/privacy}',
			received_events_url: 'https://api.github.com/users/North-al/received_events',
			type: 'User',
			site_admin: false
		},
		base: {
			label: 'joaomede:master',
			ref: 'master',
			sha: 'b741b6a9b34db2c70b78a54919432cbb75092987',
			user: {
				login: 'joaomede',
				id: 49351989,
				node_id: 'MDQ6VXNlcjQ5MzUxOTg5',
				avatar_url: 'https://avatars.githubusercontent.com/u/49351989?v=4',
				gravatar_id: '',
				url: 'https://api.github.com/users/joaomede',
				html_url: 'https://github.com/joaomede',
				followers_url: 'https://api.github.com/users/joaomede/followers',
				following_url: 'https://api.github.com/users/joaomede/following{/other_user}',
				gists_url: 'https://api.github.com/users/joaomede/gists{/gist_id}',
				starred_url: 'https://api.github.com/users/joaomede/starred{/owner}{/repo}',
				subscriptions_url: 'https://api.github.com/users/joaomede/subscriptions',
				organizations_url: 'https://api.github.com/users/joaomede/orgs',
				repos_url: 'https://api.github.com/users/joaomede/repos',
				events_url: 'https://api.github.com/users/joaomede/events{/privacy}',
				received_events_url: 'https://api.github.com/users/joaomede/received_events',
				type: 'User',
				site_admin: false
			}
		},
		author_association: 'NONE',
		auto_merge: null,
		active_lock_reason: null
	}
])

const flag = ref(true)
const changeJSON = (val: any) => {
	console.log(`output->val`, val)
	json.value = val
	flag.value = true
}

const hasErrorJSON = () => (flag.value = false)

const transform = (data: any) => {
	console.log(jsonToInterface(data))
}

nextTick(() => {
	document.querySelector('.jsoneditor-poweredBy')?.setAttribute('style', 'display: none')
})
</script>

<style lang="scss" scoped>
:deep(#jsoneditor-vue-166) {
	height: 100%;
}
</style>
