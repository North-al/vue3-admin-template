import type { RouteRecordRaw } from 'vue-router'

const routerModules = import.meta.glob<Record<string, RouteRecordRaw[]>>('./*.ts', { eager: true })

const routes: Array<RouteRecordRaw> = []

for (const [, modules] of Object.entries(routerModules)) {
	const values = Object.values(modules).flat(1)
	routes.push(...values)
}

export { routes }
console.log(`output->routes`, routes)
