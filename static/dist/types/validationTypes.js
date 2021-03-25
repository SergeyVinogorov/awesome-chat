var HasEmptyInterface = /** @class */ (function () {
    function HasEmptyInterface() {
    }
    HasEmptyInterface.prototype.isValid = function (filed) {
        return filed !== '';
    };
    return HasEmptyInterface;
}());
export { HasEmptyInterface };
var MaxInterface = /** @class */ (function () {
    function MaxInterface(max) {
        this.max = max;
    }
    MaxInterface.prototype.isValid = function (filed) {
        return filed.length <= this.max;
    };
    return MaxInterface;
}());
export { MaxInterface };
var MinInterface = /** @class */ (function () {
    function MinInterface(min) {
        this.min = min;
    }
    MinInterface.prototype.isValid = function (filed) {
        return filed.length >= this.min;
    };
    return MinInterface;
}());
export { MinInterface };
var PatternInterface = /** @class */ (function () {
    function PatternInterface(regex) {
        this.regex = regex;
    }
    PatternInterface.prototype.isValid = function (filed) {
        return this.regex.test(filed.toLowerCase());
    };
    return PatternInterface;
}());
export { PatternInterface };
//# sourceMappingURL=validationTypes.js.map