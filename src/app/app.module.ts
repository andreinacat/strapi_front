import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// Declaramos el modulo para poder ocupar el NgFor
import { AgregarItemPageModule } from './chaquetas/agregar-item/agregar-item.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Importamos un Modulo, para crear un Toquen
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  // Declaramos nuestro toquen como "HttpClientModule"
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
