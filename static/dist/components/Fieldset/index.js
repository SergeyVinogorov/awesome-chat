var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Didact from '../../core/didactClass.js';
var Fieldset = /** @class */ (function (_super) {
    __extends(Fieldset, _super);
    function Fieldset(props) {
        var _this = _super.call(this, props) || this;
        _this.errorClassName = 'mf-form__error visually-hidden';
        _this.isError = false;
        _this.initChild = function () {
            var _a;
            _this.errorClassName = ((_a = _this.props.state) === null || _a === void 0 ? void 0 : _a.isValid) ? 'mf-form__error visually-hidden'
                : 'mf-form__error';
            var _b = _this.props, id = _b.id, name = _b.name, type = _b.type, _c = _b.placeholder, placeholder = _c === void 0 ? ' ' : _c, _d = _b.classNameLabel, classNameLabel = _d === void 0 ? 'mf-form__label' : _d, _e = _b.classNameInput, classNameInput = _e === void 0 ? 'mf-form__input' : _e, nameLabel = _b.nameLabel, isSetting = _b.isSetting, control = _b.control;
            var result = [];
            var input = Didact.createElement('input', {
                type: type,
                id: id,
                name: name,
                placeholder: placeholder,
                className: classNameInput,
                oninput: function (e) {
                    var target = e.target;
                    control.handleOnInput(target, type, name);
                },
                onblur: function (e) {
                    var target = e.target;
                    control.handleOnBlur(target, type, name);
                },
            }, '');
            var label = Didact.createElement('label', {
                className: classNameLabel,
                htmlFor: id,
            }, nameLabel);
            var errorMessage = Didact.createElement('div', { className: _this.errorClassName }, _this.props.message);
            if (isSetting) {
                result.push(label, input, errorMessage);
            }
            else {
                result.push(input, label, errorMessage);
            }
            return result;
        };
        return _this;
    }
    Fieldset.prototype.render = function () {
        return Didact.createElement('fieldset', { className: this.props.className }, this.initChild());
    };
    return Fieldset;
}(Didact.Component));
export { Fieldset };
//# sourceMappingURL=index.js.map