import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CadastroComponent } from './../../cadastro.component';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {

    public form;
    public ufs;
    public cidades;

    constructor(
        private http: HttpClient,
        private cadastroComponent: CadastroComponent,
        private formBuilder: FormBuilder
    ) {
        this.form = this.formBuilder.group({
            cep: [
                '',
                [
                    Validators.required
                ]
            ],
            rua: [
                '',
                [
                    Validators.required
                ]
            ],
            bairro: [
                '',
                [
                    Validators.required
                ]
            ],
            cidade: [
                '',
                [
                    Validators.required
                ]
            ],
            estado: [
                '',
                [
                    Validators.required
                ]
            ]
        });
    }

    ngOnInit() {
        this.http.get('/api/listar-uf').subscribe((res: any) => {
            this.ufs = res.listaUf;
        });
    }

    onCepChange(e) {
        const cep = e.target.value;
        this.http.get('/api/cep/' + cep).subscribe((res: any) => {
            const enderecoCompleto = res.enderecoCep;
            this.form.controls['rua'].setValue(enderecoCompleto.logradouro);
            this.form.controls['bairro'].setValue(enderecoCompleto.bairro);
            this.form.controls['estado'].setValue(enderecoCompleto.uf.sigla);
            this.http.get('/api/cidades/' + enderecoCompleto.uf.sigla).subscribe((res: any) => {
                this.cidades = res.listaCidade;
                this.form.controls['cidade'].setValue(enderecoCompleto.cidade);
            });
        });
    }

    onEstadoChange(e) {
        const uf = e.value;
        this.http.get('/api/cidades/' + uf).subscribe((res: any) => {
            this.cidades = res.listaCidade;
        });
    }

    submit() {
        const endereco = this.form.getRawValue();
        const payload = {
            dadosPessoais: this.cadastroComponent.dadosPessoais,
            endereco: endereco
        };

        this.http.post('/api/salvar', payload).subscribe((res: any) => {
            alert("Cadastro efetuado com sucesso!")
        });
    }
}
