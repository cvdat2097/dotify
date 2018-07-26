import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormControl, FormGroup } from '@angular/forms';

import { ModalService } from '../shared/services/modal.service';
import { DatabaseService } from '../shared/services/database.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm = this.formBuilder.group({
    account: this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(5),
        // Validators.pattern(/^[a-zA-Z0-9_]*$/g) TODO
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    }),

    personalInfo: this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      phone: ['']
    })
  })


  constructor(
    private formBuilder: FormBuilder,
    private mdService: ModalService,
    private dbService: DatabaseService
  ) { }

  onSubmit() {
    var userInfo = this.signupForm.value;
    this.dbService.SignUp(
      userInfo.account.username,
      userInfo.account.password,
      userInfo.personalInfo.name,
      '#'
    )

    console.log(userInfo, 'Registerd');
  }

  get _username(): AbstractControl {
    return (this.signupForm.controls.account as FormGroup).controls.username;
  }
  get _password(): AbstractControl {
    return (this.signupForm.controls.account as FormGroup).controls.password;
  }
  get _name(): AbstractControl {
    return (this.signupForm.controls.personalInfo as FormGroup).controls.name;
  }
  get _email(): AbstractControl {
    return (this.signupForm.controls.personalInfo as FormGroup).controls.email;
  }
  get _phone(): AbstractControl {
    return (this.signupForm.controls.personalInfo as FormGroup).controls.phone;
  }

  CloseModal() {
    this.mdService.HideModal();
  }

}
