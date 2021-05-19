/**
 * @returns {GenericClassDecorator<Type<any>>}
 * @constructor
 */
export var Service = function () {
    return function (_target) {
        // do something with `target`, e.g. some kind of validation or passing it to the Injector and store them
        console.log(_target);
    };
};
//# sourceMappingURL=ServiceDecorator.js.map