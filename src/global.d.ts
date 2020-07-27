declare const ReactDOM, MaterialUI, ReactRouterDOM;
declare interface Localforage {
  createInstance({ name: string }): Localforage;
  getItem(key: any): Promise<any>;
  setItem(key: any, value: any): Promise<void>;
  removeItem(key: any): Promise<void>;
  keys(): Promise<any[]>;
}
declare const localforage: Localforage;
type StyleType = import('react').CSSProperties