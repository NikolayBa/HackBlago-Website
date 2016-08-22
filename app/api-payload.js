"use strict";
var ApiPayload = (function () {
    function ApiPayload(functionName, parameters) {
        if (functionName) {
            this.$functionName = functionName;
        }
        else {
            this.$functionName = "";
        }
        ;
        if (parameters) {
            this.$parameters = parameters;
        }
        else {
            this.$parameters = new Object();
        }
    }
    Object.defineProperty(ApiPayload.prototype, "$functionName", {
        get: function () {
            return this.functionName;
        },
        set: function (value) {
            this.functionName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiPayload.prototype, "$parameters", {
        get: function () {
            return this.parameters;
        },
        set: function (value) {
            this.parameters = value;
        },
        enumerable: true,
        configurable: true
    });
    return ApiPayload;
}());
exports.ApiPayload = ApiPayload;
//# sourceMappingURL=api-payload.js.map