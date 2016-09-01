import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app.component';
import { ApiService } from './api.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [AppComponent],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
