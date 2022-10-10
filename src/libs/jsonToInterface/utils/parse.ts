import { isArray, isObject } from './index'

export const getModelType = (array: Array<any>) => {
	const result = []
	for (let i = 0; i < array.length; i++) {
		const item = array[i]
		if (isArray(item)) {
			getModelType(item)
			break
		} else {
			if (item === null) {
				result[i] = null
				break
			}
			result[i] = typeof item
		}
	}
	return result
}
