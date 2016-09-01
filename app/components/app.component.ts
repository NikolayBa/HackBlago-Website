import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
    selector: 'my-app',
    template: '<h1 (click)="apiServiceTest()">My First Angular 2 App</h1>'
})
export class AppComponent { 
    
    public apiServiceTest(){
        this.apiService.registerUser("test", "test", "test", "test");
    }

    constructor(private apiService: ApiService){

    }

}
