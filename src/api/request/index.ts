import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import ErrorHandle from './errorHandler'
import { ResponseCode, ResponseKey } from './enum'

class NRequest {
	protected instance: AxiosInstance | null = null

	constructor(config: AxiosRequestConfig, prefix: string = '') {
		const { baseURL, ...rest } = config

		// 创建实例
		this.instance = axios.create({
			baseURL: prefix ? baseURL + prefix : baseURL,
			timeout: 1000 * 20,
			withCredentials: true,
			...rest
		})

		this.requestInterceptor()
		this.responseInterceptor()
	}

	private requestInterceptor() {
		this.instance!.interceptors.request.use(
			(config: AxiosRequestConfig = {}) => {
				// 设置请求头
				if (config.headers) {
					// config.headers.Authorization = ''
				}

				return config
			},
			(error: AxiosError) => {
				ElMessage({ type: 'error', message: error.message })
				return Promise.reject(error)
			}
		)
	}

	private responseInterceptor() {
		this.instance!.interceptors.response.use(
			(response: AxiosResponse): Promise<Result> => {
				return new Promise((resolve, reject) => {
					const { status, data } = response

					// 说明axios 都失败了
					if (status !== 200) reject(data)

					// 不是成功状态码
					if (data[ResponseKey.CODE] !== ResponseCode.SUCCESS) {
						ElMessage({ type: 'error', message: data[ResponseKey.MESSAGE] })

						ErrorHandle[data[ResponseKey.CODE] as keyof typeof ErrorHandle]()
						reject(data)
					}

					// 成功返回
					resolve(data)
				})
			},
			(error) => {
				ElMessage({ type: 'error', message: error.message })
				return Promise.reject(error)
			}
		)
	}

	public request<T>(config: AxiosRequestConfig<T>): Promise<Result<T>> {
		// public request<T>(config: AxiosRequestConfig<T>): Promise<T> {
		return this.instance!.request(config)
	}

	// public get = <T>(url: string, params: any = {}, config: AxiosRequestConfig = {}): Promise<T> => {
	public get = <T>(url: string, params: any = {}, config: AxiosRequestConfig = {}): Promise<Result<T>> => {
		const option: AxiosRequestConfig = {
			url,
			method: 'GET',
			params,
			...config
		}
		return this.request(option)
	}

	public post = <T>(url: string, data: any = {}, config: AxiosRequestConfig = {}): Promise<Result<T>> => {
		// public post = <T>(url: string, data: any = {}, config: AxiosRequestConfig = {}): Promise<T> => {
		const option: AxiosRequestConfig = {
			url,
			method: 'POST',
			data,
			...config
		}
		return this.request(option)
	}
}

const { get, post } = new NRequest({
	// baseURL: import.meta.env.VITE_APP_API
	baseURL: '/api'
})

export { get, post }

export default NRequest
