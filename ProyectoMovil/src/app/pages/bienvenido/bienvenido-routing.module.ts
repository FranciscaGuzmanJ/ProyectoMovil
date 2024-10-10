import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidoPage } from './bienvenido.page';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BienvenidoPage,
    canActivate: [AuthGuard],
    children:[
      {
        path: 'bienvenido',
        loadChildren: () => import('./../../pages/bienvenido/bienvenido.module').then( m => m.BienvenidoPageModule)
        
      },
      {
        path: 'subir-contenido',
        loadChildren: () => import('./../../pages/subir-contenido/subir-contenido.module').then( m => m.SubirContenidoPageModule)
      },
      {
        path: 'albumes',
        loadChildren: () => import('./../../pages/albumes/albumes.module').then( m => m.AlbumesPageModule)
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienvenidoPageRoutingModule {}
