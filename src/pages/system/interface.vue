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
import { isArray } from '~/utils'

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
		body: 'For bidirectional binding events, `update:modelValue` should be used instead of `input`',
		created_at: '2022-10-04T04:09:18Z',
		updated_at: '2022-10-04T04:09:18Z',
		closed_at: null,
		merged_at: null,
		merge_commit_sha: 'c240d989afafb47ed75f84f4df6025511a381492',
		assignee: null,
		assignees: [],
		requested_reviewers: [],
		requested_teams: [],
		labels: [],
		milestone: null,
		draft: false,
		commits_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/pulls/26/commits',
		review_comments_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/pulls/26/comments',
		review_comment_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/pulls/comments{/number}',
		comments_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/issues/26/comments',
		statuses_url:
			'https://api.github.com/repos/joaomede/vue3-json-editor/statuses/046f91d04efe20b5925e0763dd5711fd084eb316',
		head: {
			label: 'North-al:master',
			ref: 'master',
			sha: '046f91d04efe20b5925e0763dd5711fd084eb316',
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
			repo: {
				id: 545250704,
				node_id: 'R_kgDOIH_dkA',
				name: 'vue3-json-editor',
				full_name: 'North-al/vue3-json-editor',
				private: false,
				owner: {
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
				html_url: 'https://github.com/North-al/vue3-json-editor',
				description: 'A jsoneditor of vue 3 (next) - (fork vue-json-editor)',
				fork: true,
				url: 'https://api.github.com/repos/North-al/vue3-json-editor',
				forks_url: 'https://api.github.com/repos/North-al/vue3-json-editor/forks',
				keys_url: 'https://api.github.com/repos/North-al/vue3-json-editor/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/North-al/vue3-json-editor/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/North-al/vue3-json-editor/teams',
				hooks_url: 'https://api.github.com/repos/North-al/vue3-json-editor/hooks',
				issue_events_url: 'https://api.github.com/repos/North-al/vue3-json-editor/issues/events{/number}',
				events_url: 'https://api.github.com/repos/North-al/vue3-json-editor/events',
				assignees_url: 'https://api.github.com/repos/North-al/vue3-json-editor/assignees{/user}',
				branches_url: 'https://api.github.com/repos/North-al/vue3-json-editor/branches{/branch}',
				tags_url: 'https://api.github.com/repos/North-al/vue3-json-editor/tags',
				blobs_url: 'https://api.github.com/repos/North-al/vue3-json-editor/git/blobs{/sha}',
				git_tags_url: 'https://api.github.com/repos/North-al/vue3-json-editor/git/tags{/sha}',
				git_refs_url: 'https://api.github.com/repos/North-al/vue3-json-editor/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/North-al/vue3-json-editor/git/trees{/sha}',
				statuses_url: 'https://api.github.com/repos/North-al/vue3-json-editor/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/North-al/vue3-json-editor/languages',
				stargazers_url: 'https://api.github.com/repos/North-al/vue3-json-editor/stargazers',
				contributors_url: 'https://api.github.com/repos/North-al/vue3-json-editor/contributors',
				subscribers_url: 'https://api.github.com/repos/North-al/vue3-json-editor/subscribers',
				subscription_url: 'https://api.github.com/repos/North-al/vue3-json-editor/subscription',
				commits_url: 'https://api.github.com/repos/North-al/vue3-json-editor/commits{/sha}',
				git_commits_url: 'https://api.github.com/repos/North-al/vue3-json-editor/git/commits{/sha}',
				comments_url: 'https://api.github.com/repos/North-al/vue3-json-editor/comments{/number}',
				issue_comment_url: 'https://api.github.com/repos/North-al/vue3-json-editor/issues/comments{/number}',
				contents_url: 'https://api.github.com/repos/North-al/vue3-json-editor/contents/{+path}',
				compare_url: 'https://api.github.com/repos/North-al/vue3-json-editor/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/North-al/vue3-json-editor/merges',
				archive_url: 'https://api.github.com/repos/North-al/vue3-json-editor/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/North-al/vue3-json-editor/downloads',
				issues_url: 'https://api.github.com/repos/North-al/vue3-json-editor/issues{/number}',
				pulls_url: 'https://api.github.com/repos/North-al/vue3-json-editor/pulls{/number}',
				milestones_url: 'https://api.github.com/repos/North-al/vue3-json-editor/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/North-al/vue3-json-editor/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/North-al/vue3-json-editor/labels{/name}',
				releases_url: 'https://api.github.com/repos/North-al/vue3-json-editor/releases{/id}',
				deployments_url: 'https://api.github.com/repos/North-al/vue3-json-editor/deployments',
				created_at: '2022-10-04T03:18:09Z',
				updated_at: '2022-10-04T04:01:22Z',
				pushed_at: '2022-10-04T04:01:19Z',
				git_url: 'git://github.com/North-al/vue3-json-editor.git',
				ssh_url: 'git@github.com:North-al/vue3-json-editor.git',
				clone_url: 'https://github.com/North-al/vue3-json-editor.git',
				svn_url: 'https://github.com/North-al/vue3-json-editor',
				homepage: null,
				size: 1325,
				stargazers_count: 0,
				watchers_count: 0,
				language: 'JavaScript',
				has_issues: false,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 0,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 0,
				license: {
					key: 'isc',
					name: 'ISC License',
					spdx_id: 'ISC',
					url: 'https://api.github.com/licenses/isc',
					node_id: 'MDc6TGljZW5zZTEw'
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 0,
				open_issues: 0,
				watchers: 0,
				default_branch: 'master'
			}
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
			},
			repo: {
				id: 371177724,
				node_id: 'MDEwOlJlcG9zaXRvcnkzNzExNzc3MjQ=',
				name: 'vue3-json-editor',
				full_name: 'joaomede/vue3-json-editor',
				private: false,
				owner: {
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
				},
				html_url: 'https://github.com/joaomede/vue3-json-editor',
				description: 'A jsoneditor of vue 3 (next) - (fork vue-json-editor)',
				fork: false,
				url: 'https://api.github.com/repos/joaomede/vue3-json-editor',
				forks_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/forks',
				keys_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/keys{/key_id}',
				collaborators_url:
					'https://api.github.com/repos/joaomede/vue3-json-editor/collaborators{/collaborator}',
				teams_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/teams',
				hooks_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/hooks',
				issue_events_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/issues/events{/number}',
				events_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/events',
				assignees_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/assignees{/user}',
				branches_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/branches{/branch}',
				tags_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/tags',
				blobs_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/git/blobs{/sha}',
				git_tags_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/git/tags{/sha}',
				git_refs_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/git/refs{/sha}',
				trees_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/git/trees{/sha}',
				statuses_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/statuses/{sha}',
				languages_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/languages',
				stargazers_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/stargazers',
				contributors_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/contributors',
				subscribers_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/subscribers',
				subscription_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/subscription',
				commits_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/commits{/sha}',
				git_commits_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/git/commits{/sha}',
				comments_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/comments{/number}',
				issue_comment_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/issues/comments{/number}',
				contents_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/contents/{+path}',
				compare_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/compare/{base}...{head}',
				merges_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/merges',
				archive_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/{archive_format}{/ref}',
				downloads_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/downloads',
				issues_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/issues{/number}',
				pulls_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/pulls{/number}',
				milestones_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/milestones{/number}',
				notifications_url:
					'https://api.github.com/repos/joaomede/vue3-json-editor/notifications{?since,all,participating}',
				labels_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/labels{/name}',
				releases_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/releases{/id}',
				deployments_url: 'https://api.github.com/repos/joaomede/vue3-json-editor/deployments',
				created_at: '2021-05-26T21:55:13Z',
				updated_at: '2022-08-29T12:56:25Z',
				pushed_at: '2022-10-04T04:09:18Z',
				git_url: 'git://github.com/joaomede/vue3-json-editor.git',
				ssh_url: 'git@github.com:joaomede/vue3-json-editor.git',
				clone_url: 'https://github.com/joaomede/vue3-json-editor.git',
				svn_url: 'https://github.com/joaomede/vue3-json-editor',
				homepage: null,
				size: 2937,
				stargazers_count: 22,
				watchers_count: 22,
				language: 'JavaScript',
				has_issues: true,
				has_projects: true,
				has_downloads: true,
				has_wiki: true,
				has_pages: false,
				forks_count: 20,
				mirror_url: null,
				archived: false,
				disabled: false,
				open_issues_count: 8,
				license: {
					key: 'isc',
					name: 'ISC License',
					spdx_id: 'ISC',
					url: 'https://api.github.com/licenses/isc',
					node_id: 'MDc6TGljZW5zZTEw'
				},
				allow_forking: true,
				is_template: false,
				web_commit_signoff_required: false,
				topics: [],
				visibility: 'public',
				forks: 20,
				open_issues: 8,
				watchers: 22,
				default_branch: 'master'
			}
		},
		_links: {
			self: {
				href: 'https://api.github.com/repos/joaomede/vue3-json-editor/pulls/26'
			},
			html: {
				href: 'https://github.com/joaomede/vue3-json-editor/pull/26'
			},
			issue: {
				href: 'https://api.github.com/repos/joaomede/vue3-json-editor/issues/26'
			},
			comments: {
				href: 'https://api.github.com/repos/joaomede/vue3-json-editor/issues/26/comments'
			},
			review_comments: {
				href: 'https://api.github.com/repos/joaomede/vue3-json-editor/pulls/26/comments'
			},
			review_comment: {
				href: 'https://api.github.com/repos/joaomede/vue3-json-editor/pulls/comments{/number}'
			},
			commits: {
				href: 'https://api.github.com/repos/joaomede/vue3-json-editor/pulls/26/commits'
			},
			statuses: {
				href: 'https://api.github.com/repos/joaomede/vue3-json-editor/statuses/046f91d04efe20b5925e0763dd5711fd084eb316'
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
	if (typeof data !== 'object') return ElMessage.error('错误的json格式')
	const newObj: any = isArray(data) ? [] : {}

	for (const item in data) {
		const val = data[item]
		if (val === null) {
			newObj[item] = null
		} else {
			newObj[item] = typeof val !== 'object' ? typeof val : transform(val)
		}
	}

	console.log(`output->newObj`, newObj)
	return newObj
}

const transformArr = (arr: Array<any>) => {}

const transformObj = (obj: Object) => {}

nextTick(() => {
	document.querySelector('.jsoneditor-poweredBy')?.setAttribute('style', 'display: none')
})
</script>

<style lang="scss" scoped>
:deep(#jsoneditor-vue-166) {
	height: 100%;
}
</style>
