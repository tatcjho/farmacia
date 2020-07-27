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
  },
  {
    path: 'jose',
    loadChildren: () => import('./jose/jose.module').then( m => m.JosePageModule)
  },
  {
    path: 'crear-medicamento',
    loadChildren: () => import('./TatianaCardenas/page/crear-medicamento/crear-medicamento.module').then( m => m.CrearMedicamentoPageModule)
  },  {
    path: 'roles',
    loadChildren: () => import('./Paulo/roles/roles.module').then( m => m.RolesPageModule)
  },


  
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
