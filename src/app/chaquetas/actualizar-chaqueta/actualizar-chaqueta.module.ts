import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarChaquetaPageRoutingModule } from './actualizar-chaqueta-routing.module';

import { ActualizarChaquetaPage } from './actualizar-chaqueta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarChaquetaPageRoutingModule
  ],
  declarations: [ActualizarChaquetaPage]
})
export class ActualizarChaquetaPageModule {}
