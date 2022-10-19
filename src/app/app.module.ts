import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { ModuleNotEnabledComponent } from './components/utils/module-not-enabled/module-not-enabled.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ModuleNotEnabledComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientTestingModule
  ],
  providers : [
    HttpClient,
    HttpClientTestingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
