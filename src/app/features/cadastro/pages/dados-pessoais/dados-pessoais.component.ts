import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroComponent } from '../../cadastro.component';


@Component({
    selector: 'app-dados-pessoais',
    templateUrl: './dados-pessoais.component.html',
    styleUrls: ['./dados-pessoais.component.scss']
})
export class DadosPessoaisComponent implements OnInit {

    public form;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private cadastroComponent: CadastroComponent
    ) {
        this.form = this.formBuilder.group({
            nome: [
                '',
                [
                    Validators.required
                ]
            ],
            email: [
                '',
                [
                    Validators.required
                ]
            ],
            celular: [
                '',
                [
                    Validators.required
                ]
            ],
            cpf: [
                '',
                [
                    Validators.required
                ]
            ]
        });
    }

    ngOnInit() { }

    submit() {
        this.cadastroComponent.dadosPessoais = this.form.getRawValue();
        this.router.navigate(['/cadastro/endereco']);
    }

    validarNome() {
        const nome = this.form.controls['nome'];
        const regex = /^([A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19})$/;
        if (nome.value !== undefined && nome.value !== '' && !regex.test(nome.value)) {
            nome.setErrors({ 'nomeInvalido': true });
        }
    }

    validarCelular() {
        const celular = this.form.controls['celular'];
        const regex = /^(([1-9]){2})(([2-5](?!(\d)\5{4})\d{7})|([9](?!(\d)\7{7})\d{8}))$/;
        if (!regex.test(celular.value)) {
            celular.setErrors({ 'celularInvalido': true });
        }
    }

    validarEmail() {
        const email = this.form.controls['email'];
        const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
        if (!regex.test(email.value)) {
            email.setErrors({ 'emailInvalido': true });
        }
    }

    validarCPF() {
        const cpf = this.form.controls['cpf'];
        const regex = /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/;
        if (!regex.test(cpf.value)) {
            cpf.setErrors({ 'cpfInvalido': true });
        }
    }
    // /^[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]$/
}
