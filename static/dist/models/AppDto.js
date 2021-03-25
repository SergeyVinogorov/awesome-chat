import { ErrorTypeOfType } from "../types/appTypes.js";
var AppDto = /** @class */ (function () {
    function AppDto() {
        this.errorApp = {
            type: ErrorTypeOfType.info,
            message: 'ok',
            isExist: false
        };
        this.isAuth = false;
    }
    Object.defineProperty(AppDto.prototype, "stateAppp", {
        get: function () {
            var result = {
                isAuth: this.isAuth,
                errorApp: this.errorApp
            };
            return result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppDto.prototype, "stateError", {
        set: function (state) {
            this.errorApp = state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppDto.prototype, "stateIsAuth", {
        set: function (state) {
            this.isAuth = state;
        },
        enumerable: false,
        configurable: true
    });
    return AppDto;
}());
export { AppDto };
//# sourceMappingURL=AppDto.js.map