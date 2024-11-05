import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidoPage } from './bienvenido.page';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BienvenidoPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'bienvenido',
        loadChildren: () => import('./../../pages/bienvenido/bienvenido.module').then( m => m.BienvenidoPageModule)
        
      },
      {
        path: 'subir-contenido',
        loadChildren: () => import('./../../pages/subir-contenido/subir-contenido.module').then( m => m.SubirContenidoPageModule)
      },
      {
        path: '',
        redirectTo: 'bienvenido', // Redireccionar a 'bienvenido' cuando se acceda a la raíz
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'bienvenido',
    component: BienvenidoPage, // Define bienvenido como una ruta principal sin estar en children
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienvenidoPageRoutingModule {}
