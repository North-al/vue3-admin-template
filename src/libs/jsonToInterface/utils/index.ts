export * from './parse'

export const isArray = (v: unknown) => {
	return Array.isArray(v) && Object.prototype.toString.call(v) === '[object Array]'
}

export const isObject = (v: unknown) => {
	return Object.prototype.toString.call(v) === '[object Object]'
}

export const excludeSymbol = (str: string) => {
	return str.replaceAll('\\', '').replaceAll('"', '').replaceAll(',', ', ')
}

// 首字母大写
export const firstUpperCase = (str: string) => {
	return str.replace(/^\S/, s => s.toUpperCase())
}

// 随机生成首字母大写、其它字母小写的随机字符串
export const randomString = (len: number) => {
	let str = ''
	for (let i = 0; i < len; i++) {
		str += String.fromCharCode(Math.floor(Math.random() * 26) + 97)
	}
	return firstUpperCase(str)
}
