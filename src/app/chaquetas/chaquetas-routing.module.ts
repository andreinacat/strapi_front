import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChaquetasPage } from './chaquetas.page';

const routes: Routes = [
  {
    path: '',
    component: ChaquetasPage
  },
  {
    path: 'detalle-chaquetas',
    loadChildren: () => import('./detalle-chaquetas/detalle-chaquetas.module').then( m => m.DetalleChaquetasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChaquetasPageRoutingModule {}
