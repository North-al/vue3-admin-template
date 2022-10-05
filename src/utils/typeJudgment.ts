export const isNumber = (val: unknown) => typeof val === 'number'

export const isString = (val: unknown) => typeof val === 'string'

export const isObject = (val: unknown) =>
	typeof val === 'object' && Object.prototype.toString.call(val) === '[object Object]'

export const isArray = (val: unknown) => typeof val === 'object' && Array.isArray(val)
