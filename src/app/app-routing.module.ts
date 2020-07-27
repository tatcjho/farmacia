import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'jose',
    loadChildren: () => import('./jose/jose.module').then( m => m.JosePageModule)
  },
<<<<<<< HEAD
  {
    path: 'crear-medicamento',
    loadChildren: () => import('./TatianaCardenas/page/crear-medicamento/crear-medicamento.module').then( m => m.CrearMedicamentoPageModule)
  },

  
];
=======
>>>>>>> dde4b81e664df4e5b6a0842134c3aac3a1c98908

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
