import type { Ref } from 'vue'
import { useLoading } from '../useLoading'

/**
 *
 * @param {Partial<IPage>} params 自定义初始化参数，默认{ page:1, size: 10 }
 * @returns [分页参数, loading状态, 更改loading状态]
 */
export const usePage = (
	params: Partial<IPage> = { page: 1, size: 10 }
): [IPage, Ref<boolean>, (payload?: boolean) => void] => {
	const pageParams: IPage = reactive({
		page: 1,
		size: 10,
		...params
	})

	const [loading, setLoading] = useLoading()

	return [pageParams, loading, setLoading]
}
