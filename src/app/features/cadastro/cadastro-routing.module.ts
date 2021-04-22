import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro.component';
import { DadosPessoaisComponent } from './pages/dados-pessoais/dados-pessoais.component';
import { EnderecoComponent } from './pages/endereco/endereco.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroComponent,
    children: [
      {
        path: '',
        redirectTo: 'dados-pessoais',
        pathMatch: 'full'
      },
      {
        path: 'dados-pessoais',
        component: DadosPessoaisComponent
      },
      {
        path: 'endereco',
        component: EnderecoComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule {}
