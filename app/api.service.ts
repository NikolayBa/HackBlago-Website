import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { ApiRequest } from './api-request';

@Injectable()
export class ApiService {
    private static api_key: string = "test_key";
    private static register_user_function: string = "register_user";
    private static authenticate_user_function: string = "authenticate_user";

    private apiRequest: ApiRequest;

    constructor(private http: Http) {
        this.$apiRequest = new ApiRequest();
    }

    public registerUser(name: string, password_hash: string, email: string, github: string) {
        this.$api_key = ApiService.api_key;
        this.$functionName = ApiService.register_user_function;
        this.$name = name;
        this.$password_hash = password_hash;
        this.$email = email;
        this.$github = github;


        // this.http.post("127.0.0.1", JSON.stringify(this.apiRequest));
        console.log(JSON.stringify(this.apiRequest));
    }

    public authenticateUser(name: string, password_hash: string) {
        this.$functionName = ApiService.authenticate_user_function;
        this.$name = name;
        this.$password_hash = password_hash;
    }

    private set $functionName(value: string) {
        this.$apiRequest.$payload.$functionName = value;
    }

    private set $name(value: string) {
        this.$apiRequest.$payload.$parameters.name = value;
    }

    private set $password_hash(value: string) {
        this.$apiRequest.$payload.$parameters.password_hash = value;
    }

    private set $email(value: string) {
        this.$apiRequest.$payload.$parameters.email = value;
    }

    private set $github(value: string) {
        this.$apiRequest.$payload.$parameters.github = value;
    }

    private set $api_key(value: string) {
        this.$apiRequest.$api_key = value;
    }


    public get $apiRequest(): ApiRequest {
        return this.apiRequest;
    }

    public set $apiRequest(value: ApiRequest) {
        this.apiRequest = value;
    }

}

