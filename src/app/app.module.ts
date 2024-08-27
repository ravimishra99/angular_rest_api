// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataService } from './data.service';

@NgModule({
    declarations: [
        AppComponent  // Declare the component
    ],
    imports: [
        BrowserModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }