import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleChaquetasPage } from './detalle-chaquetas.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleChaquetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleChaquetasPageRoutingModule {}
