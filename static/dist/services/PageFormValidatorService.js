import { HasEmptyInterface, MaxInterface, MinInterface, PatternInterface, } from '../types/validationTypes.js';
var PageFormValidatorService = /** @class */ (function () {
    function PageFormValidatorService() {
    }
    PageFormValidatorService.prototype.validateValue = function (value, type) {
        var isValid = false;
        switch (type) {
            case 'tel':
                var max = new MaxInterface(11);
                var min = new MinInterface(4);
                var pattern = new PatternInterface(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
                isValid = max.isValid(value);
                isValid = min.isValid(value);
                isValid = pattern.isValid(value);
                break;
            case 'email':
                var email = new PatternInterface(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                isValid = email.isValid(value);
                break;
            case 'password':
                var hasEmpty = new HasEmptyInterface();
                isValid = hasEmpty.isValid(value);
                break;
            default:
                var defaultValue = new HasEmptyInterface();
                isValid = defaultValue.isValid(value);
                break;
        }
        return { value: value, isValid: isValid };
    };
    return PageFormValidatorService;
}());
export { PageFormValidatorService };
//# sourceMappingURL=PageFormValidatorService.js.map