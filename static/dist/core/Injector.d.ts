import 'reflect-metadata';
import { Type } from "./Util";
/**
 * The Injector stores services and resolves requested instances.
 */
export declare const Injector: {
    /**
     * Resolves instances by injecting required services
     * @param {Type<any>} target
     * @returns {T}
     */
    resolve<T>(target: Type<any>): T;
};
