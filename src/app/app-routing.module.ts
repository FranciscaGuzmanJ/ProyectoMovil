import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'pag-espera',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'pag-espera',
    loadChildren: () => import('./pages/pag-espera/pag-espera.module').then( m => m.PagEsperaPageModule)
  },  {
    path: 'bienvenido',
    loadChildren: () => import('./pages/bienvenido/bienvenido.module').then( m => m.BienvenidoPageModule)
  },
  {
    path: 'subir-contenido',
    loadChildren: () => import('./pages/subir-contenido/subir-contenido.module').then( m => m.SubirContenidoPageModule)
  },
  {
    path: 'albumes',
    loadChildren: () => import('./pages/albumes/albumes.module').then( m => m.AlbumesPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./pages/password/password.module').then( m => m.PasswordPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
