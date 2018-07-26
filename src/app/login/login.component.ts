import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ModalService } from '../shared/services/modal.service';
import { DatabaseService } from '../shared/services/database.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})

export class LoginComponent {
    @Output('onCloseModal') closeModalEvent = new EventEmitter();
    x: string;

    loginForm = this.formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(5)]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    })

    get _username(): AbstractControl {
        return this.loginForm.controls.username;
    }

    get _password(): AbstractControl {
        return this.loginForm.controls.password;
    }

    constructor(
        private formBuilder: FormBuilder,
        private mdService: ModalService,
        private dbService: DatabaseService
    ) { }

    onSubmit() {
        if (this.dbService.Login(this._username.value, this._password.value)) {
            console.log('Login successfully!');
        } else {
            console.log('Login failed!');
        }

    }

    CloseModal() {
        this.mdService.HideModal()
    }

}
