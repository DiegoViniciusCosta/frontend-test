import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosPessoaisComponent } from './pages/dados-pessoais/dados-pessoais.component';
import { EnderecoComponent } from './pages/endereco/endereco.component';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    CadastroComponent,
    DadosPessoaisComponent,
    EnderecoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule {}
