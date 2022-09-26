<template>
	<div mx-8px>
		<cil:language @click="changeLanguage" text-18px n-hover-gray-500 cursor-pointer outline-none></cil:language>
	</div>
</template>

<script setup lang="ts">
import { useConfigStore } from '~/store'
const i18n = useI18n()
const store = useConfigStore()
const currentLanguage = computed(() => i18n.locale.value)

const changeLanguage = () => {
	let language: 'zh_CN' | 'en' = 'en'
	if (currentLanguage.value.indexOf('zh') > -1) {
		language = 'en'
	} else {
		language = 'zh_CN'
	}

	localStorage.setItem('N-language-key', language)
	store.elementConfig.locale = language
	i18n.locale.value = language
}
</script>

<style lang="scss" scoped></style>
