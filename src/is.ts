import { DataType } from "./enume";
export function isPureObject<T = any>(value: unknown): value is Record<string, T>{ 
	return Object.prototype.toString.call(value) === DataType.Object;
}