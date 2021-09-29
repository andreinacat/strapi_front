import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleChaquetasPageRoutingModule } from './detalle-chaquetas-routing.module';

import { DetalleChaquetasPage } from './detalle-chaquetas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleChaquetasPageRoutingModule
  ],
  declarations: [DetalleChaquetasPage]
})
export class DetalleChaquetasPageModule {}
