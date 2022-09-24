const isEmpty = (value: any) => value === ''

const isDate = (date: NStorageType.Expires) => {
	try {
		return typeof date === 'number'
			? true
			: typeof date === 'string' && !isEmpty(date) && new Date(date)
			? true
			: typeof date === 'object' && date instanceof Date
	} catch {
		return false
	}
}

export class NStorage {
	private readonly storage

	constructor(name: NStorageType.Name, options?: NStorageType.Options) {
		const key: NStorageType.ApiKey = `${name}Storage`
		this.storage = window[key]
		if (!isDate(options?.expires)) throw new Error('The Expires object is not the correct time format')
	}

	set(key: string, value: any) {
		// const
		this.storage.setItem(key, value)
	}

	get() {}

	has() {}

	clear() {}
}
