import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
formLogin = new FormGroup({
    name: new FormControl ('', Validators.required),
    text: new FormControl ('', Validators.required),
    email: new FormControl('', {validators:[Validators.required, Validators.email]}),
    password: new FormControl ('', Validators.required),
    message: new FormControl ('', Validators.required),
  });

send(): any {
console.log(this.formLogin.value);
  }
  get name(): AbstractControl {return this.formLogin.get('name') as FormControl}
  get text(): FormControl {return this.formLogin.get('text') as FormControl}
  get email(): FormControl {return this.formLogin.get('email') as FormControl}
  get password(): FormControl {return this.formLogin.get('password') as FormControl}
  get message(): FormControl {return this.formLogin.get('message') as FormControl}
}
