import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagEsperaPage } from './pag-espera.page';

const routes: Routes = [
  {
    path: '',
    component: PagEsperaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagEsperaPageRoutingModule {}
