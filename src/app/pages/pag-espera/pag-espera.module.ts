import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagEsperaPageRoutingModule } from './pag-espera-routing.module';

import { PagEsperaPage } from './pag-espera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagEsperaPageRoutingModule
  ],
  declarations: [PagEsperaPage]
})
export class PagEsperaPageModule {}
