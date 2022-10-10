import { firstUpperCase, isArray, isObject } from '../utils'
import { Enum_Object_Result_Type } from '../enum/type'
import { handleArray } from './handleArray'

const handleObjectResponse = () => {}

let generateInterface = ``

export const handleObject = (
	json: Record<string, any>
): { type: string; result: any; generateInterface?: string } | void => {
	const keys = Object.keys(json)

	const result: Record<string, any> = {}

	if (keys.length === 0) {
		return { type: Enum_Object_Result_Type.void, result: 'void' }
	}

	for (const [key, value] of Object.entries(json)) {
		if (value === null) {
			result[key] = 'null'
		} else if (isArray(value)) {
			// 递归处理
			result[key] = handleArray(value)!.result
			generateInterface += handleArray(value)!.generateInterface
		} else if (isObject(value)) {
			// 递归处理
			const { result: r } = handleObject(value)!

			generateInterface += `interface I${firstUpperCase(key)} ${JSON.stringify(r, null, 4)}\n`
			result[key] = `I${firstUpperCase(key)}`
		} else {
			// 基本类型处理
			result[key] = typeof value
		}
	}
	return {
		type: Enum_Object_Result_Type.object,
		result: JSON.parse(JSON.stringify(result)),
		generateInterface
	}
}
