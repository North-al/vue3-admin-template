import { get } from '~/api/request'

export const fetchTestApi = (params: string) => get<ISearch>('/search', { keywords: params })

export const fetchCartAll = () => get<ICart>('/admin/cart/get-all')

export const fetchTestDelete = () => {
	return Promise.resolve({
		code: 200,
		message: '删除成功',
		data: []
	})
}
