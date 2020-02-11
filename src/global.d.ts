declare const ReactDOM, MaterialUI, ReactRouterDOM
declare interface Localforage {
	getItem(key: any): Promise<any>
	setItem(key: any, value: any): Promise<void>
}
declare const localforage: Localforage