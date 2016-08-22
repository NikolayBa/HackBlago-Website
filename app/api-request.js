"use strict";
var api_payload_1 = require('./api-payload');
var ApiRequest = (function () {
    function ApiRequest(api_key, payload, checksum) {
        if (api_key) {
            this.$api_key = api_key;
        }
        else {
            this.$api_key = "";
        }
        if (payload) {
            this.$payload = payload;
        }
        else {
            this.$payload = new api_payload_1.ApiPayload();
        }
        if (checksum) {
            this.$checksum = checksum;
        }
        else {
            this.$checksum = "";
        }
    }
    Object.defineProperty(ApiRequest.prototype, "$api_key", {
        get: function () {
            return this.api_key;
        },
        set: function (value) {
            this.api_key = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiRequest.prototype, "$payload", {
        get: function () {
            return this.payload;
        },
        set: function (value) {
            this.payload = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiRequest.prototype, "$checksum", {
        get: function () {
            return this.checksum;
        },
        set: function (value) {
            this.checksum = value;
        },
        enumerable: true,
        configurable: true
    });
    return ApiRequest;
}());
exports.ApiRequest = ApiRequest;
//# sourceMappingURL=api-request.js.map