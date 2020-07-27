import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearMedicamentoPage } from './crear-medicamento.page';

const routes: Routes = [
  {
    path: '',
    component: CrearMedicamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearMedicamentoPageRoutingModule {}
