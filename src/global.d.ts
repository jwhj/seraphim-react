declare const ReactDOM: any, ReactRouterDOM: any
declare interface Localforage {
	createInstance(prop: { name: string }): Localforage
	getItem(key: any): Promise<any>
	setItem(key: any, value: any): Promise<void>
	removeItem(key: any): Promise<void>
	keys(): Promise<any[]>
}
declare const localforage: Localforage
type StyleType = import('react').CSSProperties
declare namespace abcd {
	interface ComponentType {
		style?: StyleType
	}
}
declare const MaterialUI: { [name: string]: React.ComponentType<abcd.ComponentType & { [name: string]: any }> }