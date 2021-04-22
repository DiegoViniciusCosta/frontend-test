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

    ngOnInit() {}

    submit() {
        this.cadastroComponent.dadosPessoais = this.form.getRawValue();
        this.router.navigate(['/cadastro/endereco']);
    }

    validarCelular() {
        const celular = this.form.controls['celular'];
        const regex = /^(([1-9]){2})(([2-5](?!(\d)\5{4})\d{7})|([9](?!(\d)\7{7})\d{8}))$/;
        if (!regex.test(celular.value)) {
            celular.setErrors({'celularInvalido': true});
        }
    }

    validarEmail() {
        const email = this.form.controls['email'];
        const regex = /^[^\s@]+@[^\s@]+$/;
        if (!regex.test(email.value)) {
            email.setErrors({'emailInvalido': true});
        }
    }

}
