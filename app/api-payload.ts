export class ApiPayload {
    private functionName: string;
    private parameters: any;

    constructor(functionName?: string, parameters?: any) {
        if (functionName) {
            this.$functionName = functionName;
        }
        else {
            this.$functionName = ""
        };
        if (parameters) {
            this.$parameters = parameters;
        }
        else {
            this.$parameters = new Object();
        }
    }


    public get $functionName(): string {
        return this.functionName;
    }

    public set $functionName(value: string) {
        this.functionName = value;
    }


    public get $parameters(): any {
        return this.parameters;
    }

    public set $parameters(value: any) {
        this.parameters = value;
    }
}