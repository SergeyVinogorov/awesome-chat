var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import 'reflect-metadata';
/**
 * The Injector stores services and resolves requested instances.
 */
export var Injector = new /** @class */ (function () {
    function class_1() {
    }
    /**
     * Resolves instances by injecting required services
     * @param {Type<any>} target
     * @returns {T}
     */
    class_1.prototype.resolve = function (target) {
        // tokens are required dependencies, while injections are resolved tokens from the Injector
        var tokens = Reflect.getMetadata('design:paramtypes', target) || [], injections = tokens.map(function (token) { return Injector.resolve(token); });
        return new (target.bind.apply(target, __spreadArrays([void 0], injections)))();
    };
    return class_1;
}());
//# sourceMappingURL=Injector.js.map