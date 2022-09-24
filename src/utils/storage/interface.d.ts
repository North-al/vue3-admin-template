namespace NStorageType {
	export type Name = 'local' | 'session'

	export type ApiKey = 'localStorage' | 'sessionStorage'

	export type Expires = number | Date | string

	export interface Options {
		expires: expires
	}
}
