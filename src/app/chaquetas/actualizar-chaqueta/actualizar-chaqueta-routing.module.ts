import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarChaquetaPage } from './actualizar-chaqueta.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarChaquetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarChaquetaPageRoutingModule {}
