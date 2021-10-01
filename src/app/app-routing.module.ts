import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'chaquetas',
    children: [
      {
        path: "",
        loadChildren: () => import('./chaquetas/chaquetas.module').then( m => m.ChaquetasPageModule)
      },
      {
        path: ":chaqID",
        loadChildren: () => import('./chaquetas/detalle-chaquetas/detalle-chaquetas.module').then( m => m.DetalleChaquetasPageModule)
      }
      
    ]
    
  },
  {
    path: 'agregar-item',
    loadChildren: () => import('./agregar-item/agregar-item.module').then( m => m.AgregarItemPageModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
