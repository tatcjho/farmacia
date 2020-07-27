import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearMedicamentoPageRoutingModule } from './crear-medicamento-routing.module';

import { CrearMedicamentoPage } from './crear-medicamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearMedicamentoPageRoutingModule
  ],
  declarations: [CrearMedicamentoPage]
})
export class CrearMedicamentoPageModule {}
