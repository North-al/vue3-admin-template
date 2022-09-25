/**
 * 设置 route meta属性
 * @param {string} title 标题
 * @param {string} icon 图标
 * @param { MetaOptions } options 是否显示，是否缓存，排序
 * @returns
 */
type MetaOptions = { hidden?: boolean; keepAlive?: boolean; order?: number }
export const setMeta = (title: string, icon: string, options: MetaOptions = {}) => {
	const { hidden = false, keepAlive = false, order = 99 } = options
	return {
		title,
		icon,
		hidden,
		keepAlive,
		order
	}
}
