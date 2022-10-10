import { firstUpperCase, isArray, isObject, randomString } from '../utils'
import { Enum_Array_Result_Type } from '../enum/type'
import { handleObject } from './handleObject'

let generateInterface = ``

const handleArrayResponse = (
	result: Array<string>
): { type: string; result: any; generateInterface?: string } | void => {
	const resultLen = result.length

	if (resultLen === 1) {
		return {
			type: Enum_Array_Result_Type.array_generics,
			result: `Array<${result[0]}>`,
			generateInterface
		}
	}

	if (resultLen === 2) {
		const [_1, _2] = result

		return _1 === _2
			? { type: Enum_Array_Result_Type.array_generics, result: `Array<${_1}>`, generateInterface }
			: { type: Enum_Array_Result_Type.array, result: JSON.stringify(result), generateInterface }
	}

	if (resultLen > 2) {
		const _0 = result.at(0)
		for (let i = 1; i < result.length; i++) {
			// 如果有一个不同、说明无法优化成泛型写法，直接返回数组个数
			if (_0 !== result[i]) {
				return {
					type: Enum_Array_Result_Type.array,
					result: JSON.stringify(result),
					generateInterface
				}
			}
		}

		// 可优化返回值
		return { type: Enum_Array_Result_Type.array_generics, result: `Array<${_0}>`, generateInterface }
	}
}

export const handleArray = (
	json: Array<any>
): { type: string; result: string; generateInterface?: string } | void => {
	// 如果长为0直接 返回 Array<void>
	if (json.length === 0) {
		return { type: Enum_Array_Result_Type.void, result: 'Array<void>' }
	}

	const result = []
	for (let i = 0; i < json.length; i++) {
		const current = json[i]
		if (current === null) {
			result[i] = 'null'
		} else if (isArray(current)) {
			// 递归处理
			result[i] = handleArray(current)!.result
		}

		// 处理Object
		else if (isObject(current)) {
			const interfaceName = randomString(5)
			result[i] = `I${interfaceName}`

			// console.log({ generateInterface})

			generateInterface += `interface I${interfaceName} ${JSON.stringify(
				handleObject(current)!.result,
				null,
				4
			)}\n`
		} else {
			// 基本类型处理
			result[i] = typeof current
		}
	}

	return handleArrayResponse(result)
}
