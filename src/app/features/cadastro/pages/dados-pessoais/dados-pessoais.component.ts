import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroComponent } from '../../cadastro.component';
import { MASKS } from 'src/app/constants/masks.constants'


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
        const regex = /^[MASKS.NOME]$/;
        if (nome.value !== undefined && nome.value !== '' && !regex.test(nome.value)) {
            nome.setErrors({ 'nomeInvalido': true });
        }
    }

    validarCelular() {
        const celular = this.form.controls['celular'];
        const regex = /^[MASKS.CELULAR]$/;
        if (!regex.test(celular.value)) {
            celular.setErrors({ 'celularInvalido': true });
        }
    }

    validarEmail() {
        const email = this.form.controls['email'];
        const regex = /^[MASKS.EMAIL]$/;
        if (!regex.test(email.value)) {
            email.setErrors({ 'emailInvalido': true });
        }
    }

    validarCPF() {
        const cpf = this.form.controls['cpf'];
        const regex = /^[MASKS.CPF]$/;
        if (!regex.test(cpf.value)) {
            cpf.setErrors({ 'cpfInvalido': true });
        }
    }

    resetar(form: any) {
        form.reset();
    }
}
