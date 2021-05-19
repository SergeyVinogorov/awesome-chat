var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { BASE_API_PATH } from "./constants.js";
import { METHOD } from "./types.js";
var HTTP = /** @class */ (function () {
    function HTTP(path) {
        this.path = BASE_API_PATH + path;
    }
    HTTP.prototype.get = function (options) {
        return this.request(__assign(__assign({}, options), { method: METHOD.GET }));
    };
    ;
    HTTP.prototype.post = function (options) {
        return this.request(__assign(__assign({}, options), { method: METHOD.POST }));
    };
    ;
    HTTP.prototype.put = function (options) {
        return this.request(__assign(__assign({}, options), { method: METHOD.PUT }));
    };
    ;
    HTTP.prototype.delete = function (options) {
        return this.request(__assign(__assign({}, options), { method: METHOD.DELETE }));
    };
    ;
    HTTP.prototype.request = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(options.method, _this.path + options.url);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.withCredentials = true;
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr.response);
                }
                else {
                    reject({
                        status: this.status,
                        statusText: JSON.parse(xhr.response)
                    });
                }
            };
            xhr.onerror = function () {
                reject({
                    status: this.status,
                    statusText: JSON.parse(xhr.response)
                });
            };
            if (options.headers) {
                Object.keys(options.headers).forEach(function (key) {
                    xhr.setRequestHeader(key, options.headers[key]);
                });
            }
            var params = options.params;
            if (params && typeof params === 'object' && options.method === METHOD.GET) {
                params = Object.keys(params).map(function (key) {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
                }).join('&');
            }
            xhr.send(JSON.stringify(params));
        });
    };
    ;
    return HTTP;
}());
export default HTTP;
//# sourceMappingURL=http.js.map