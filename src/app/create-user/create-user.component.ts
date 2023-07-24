import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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
}
