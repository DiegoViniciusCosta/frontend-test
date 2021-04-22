import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cadastro',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: './features/cadastro/cadastro.module#CadastroModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
