import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './components/pages/home/home.component';
import { RegistryComponent } from './components/pages/registry/registry.component'
import { LoaderComponent } from './components/elements/loader/loader.component';
import { FormComponent } from './components/elements/form/form-registry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistryComponent,
    LoaderComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
