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
  },
  {
    path: 'agregar-item',
    loadChildren: () => import('./agregar-item/agregar-item.module').then( m => m.AgregarItemPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChaquetasPageRoutingModule {}
