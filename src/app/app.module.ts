import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegosModule } from './juegos/juegos.module';
import { SharedModule } from './shared/shared.module';

//Cambiar el locale de la app
import localeEs from '@angular/common/locales/es-MX';
import localeFr from '@angular/common/locales/ja';
import { registerLocaleData } from '@angular/common';
import { PiccoloComponent } from './piccolo/piccolo.component';
import { GohanComponent } from './piccolo/gohan/gohan.component';

registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    PiccoloComponent,
    GohanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JuegosModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-MX'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }