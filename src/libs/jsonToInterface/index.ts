/* eslint-disable indent */
import { excludeSymbol, isArray, isObject } from './utils'
import { Enum_Array_Result_Type, Enum_Object_Result_Type } from './enum/type'
import { handleArray } from './modules/handleArray'
import { handleObject } from './modules/handleObject'

export const jsonToInterface = (json: any, interfaceName = 'IRoot'): string => {
	let dataType: any = null

	if (isArray(json)) {
		const { type, result, generateInterface } = handleArray(json)!

		console.log(generateInterface, 'generateInterface')

		switch (type) {
			case Enum_Array_Result_Type.void:
			case Enum_Array_Result_Type.array_generics:
			case Enum_Array_Result_Type.array:
				dataType = `${generateInterface && generateInterface} \n ${excludeSymbol(
					'type ' + interfaceName + ' = ' + result
				)}`
				break
		}
	}

	if (isObject(json)) {
		const { type, result, generateInterface } = handleObject(json)!

		switch (type) {
			case Enum_Object_Result_Type.void:
			case Enum_Object_Result_Type.object:
				dataType = `${generateInterface && generateInterface}
			     \n interface ${interfaceName} ${JSON.stringify(result, null, 4)}`.replaceAll('\\', '')
				break
		}
	}

	return dataType
}

// console.log(jsonToInterface({ a: 1, b: { a: { v: 1 } } }, '对象'))
// console.log(jsonToInterface([{ a: 1, b: 2 }], '数组'))

// console.log(jsonToInterface([], '空数组'))
// console.log(jsonToInterface([1, 2], '类型相同数组'))
// console.log(jsonToInterface([1, 2, '3'], '类型不同数组'))
// console.log(jsonToInterface([1, 2, [1, 2]], '基本类型 + 二维类型相同数组'))
// console.log(
// 	jsonToInterface(
// 		[
// 			[1, 2],
// 			[1, 2]
// 		],
// 		'二维类型相同数组'
// 	)
// )
// console.log(
// 	jsonToInterface(
// 		[
// 			[1, 2],
// 			[1, 2, '3', null]
// 		],
// 		'二维数组 + 不同类型'
// 	)
// )

// console.log(jsonToInterface([null, undefined], '处理null和undefined'))

// const v: [Array<Array<number>>, Array<[Array<number>, Array<string>]>] = [[[1], [2]], [[[4], ['22']]]]

// console.log(jsonToInterface(v, '多维数组嵌套'))
// console.log(jsonToInterface([1, 2, '3', [1, 2, '2']], '基本不同类型 + 二维数组不同类型'))

// console.log('-------------------------------------')

// const vv = [1, [123, [1, [2, '3']]]]
// console.log(jsonToInterface(vv, 'TTTTT'))

console.log(
	jsonToInterface({
		code: 200,
		data: [
			{
				key: 'key',
				value: 'value',
				a: {
					ww: 2
				}
			}
		]
	})
)
