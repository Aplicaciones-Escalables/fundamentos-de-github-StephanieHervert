import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumerosModule } from './numeros/numeros.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NumerosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
