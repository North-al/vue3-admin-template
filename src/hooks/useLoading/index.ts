import type { Ref } from 'vue'

/**
 *
 * @param {boolean} default_loading loading 默认值
 * @returns [loading, setLoading] loading 的状态和改变loading状态的方法
 * @example
 * const [loading, setLoading] = useLoading() // loading = false
 * 或者
 * const [loading, setLoading] = useLoading(true) // loading = true
 *
 * setLoading(false) // 将loading状态设置为false
 * setLoading() // loading状态取反
 *
 */
export const useLoading = (default_loading: boolean = false): [Ref<boolean>, (payload?: boolean) => void] => {
	const loading: Ref<boolean> = ref(default_loading)

	const setLoading = (payload?: boolean) => {
		if (payload !== undefined) return (loading.value = payload)
		loading.value = !loading.value
	}

	return [loading, setLoading]
}
