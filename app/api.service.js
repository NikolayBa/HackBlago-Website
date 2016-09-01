"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var api_request_1 = require('./api-request');
/**
 * We declare the ApiService as Injectable in order to have the
 * dependency injector provide it to all classes that might need it.
 * set and get methods are used in order to access data. The set/get functions begin with a $
*/
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.$apiRequest = new api_request_1.ApiRequest();
    }
    ApiService.prototype.registerUser = function (name, password_hash, email, github) {
        this.refreshParameters();
        this.$api_key = ApiService.api_key;
        this.$functionName = ApiService.register_user_function;
        this.$name = name;
        this.$password_hash = password_hash;
        this.$email = email;
        this.$github = github;
        // this.http.post("127.0.0.1", JSON.stringify(this.apiRequest));
        console.log(JSON.stringify(this.apiRequest));
    };
    ApiService.prototype.authenticateUser = function (name, password_hash) {
        this.refreshParameters();
        this.$functionName = ApiService.authenticate_user_function;
        this.$name = name;
        this.$password_hash = password_hash;
    };
    ApiService.prototype.resetUserPassword = function (name) {
        this.refreshParameters();
        this.$name = name;
    };
    ApiService.prototype.inviteTeamMemberByUsername = function (team_name, user_name) {
        this.refreshParameters();
    };
    ApiService.prototype.refreshParameters = function () {
        this.$apiRequest.$payload.$parameters = new Object();
    };
    /**
     * @Nullable github
     */
    ApiService.prototype.registerTeam = function (name, github) {
        this.$name = name;
        this.$github = github;
    };
    Object.defineProperty(ApiService.prototype, "$functionName", {
        set: function (value) {
            this.$apiRequest.$payload.$functionName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "$name", {
        set: function (value) {
            this.$apiRequest.$payload.$parameters.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "$password_hash", {
        set: function (value) {
            this.$apiRequest.$payload.$parameters.password_hash = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "$email", {
        set: function (value) {
            this.$apiRequest.$payload.$parameters.email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "$github", {
        set: function (value) {
            this.$apiRequest.$payload.$parameters.github = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "$api_key", {
        set: function (value) {
            this.$apiRequest.$api_key = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "$apiRequest", {
        get: function () {
            return this.apiRequest;
        },
        set: function (value) {
            this.apiRequest = value;
        },
        enumerable: true,
        configurable: true
    });
    //define static constants for easier usage
    ApiService.api_key = "test_key";
    ApiService.register_user_function = "register_user";
    ApiService.authenticate_user_function = "authenticate_user";
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map