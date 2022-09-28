import { get, post } from '~/api/request'

export const fetchSelectEmployee = (params: ISelectEmployee) => get('/employee/listPage', params)

export const fetchLoginQrCode = () => get<string>('/wechat/getLoginQCode')

export const fetchIsLogin = (scene: string) => get('/wechat/wxScanLogin', { scene })

export const fetchLoginVerify = () => get('/wechat/verify')
