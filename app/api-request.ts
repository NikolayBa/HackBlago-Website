import { ApiPayload } from './api-payload';
export class ApiRequest {
    private api_key: string;
    private payload: ApiPayload;
    private checksum: string;


    constructor(api_key?: string, payload?: ApiPayload, checksum?: string) {
        if (api_key) {
            this.$api_key = api_key;
        } else { this.$api_key = "" }

        if (payload) {
            this.$payload = payload;
        }
        else {
            this.$payload = new ApiPayload()
        }
        if (checksum) {
            this.$checksum = checksum;
        }
        else {
            this.$checksum = ""
        }
    }


    public get $api_key(): string {
        return this.api_key;
    }

    public set $api_key(value: string) {
        this.api_key = value;
    }

    public get $payload(): ApiPayload {
        return this.payload;
    }

    public set $payload(value: ApiPayload) {
        this.payload = value;
    }


    public get $checksum(): string {
        return this.checksum;
    }

    public set $checksum(value: string) {
        this.checksum = value;
    }
}