import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DecodificarComponent } from './components/decodificar/decodificar.component';
import { CodificarComponent } from './components/codificar/codificar.component';

@NgModule({
  declarations: [
    AppComponent,
    DecodificarComponent,
    CodificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
