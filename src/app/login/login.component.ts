import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login!: FormGroup;

  constructor(private readonly router: Router) {
    this.initForm();
  }

  initForm(): void {
    this.login = new FormGroup ({
      name: new FormControl(''),
      password: new FormControl(''),
    });
  }
  get name(): FormControl {
    return this.login.get('name') as FormControl;
  }

  get password(): FormControl {
    return this.login.get('password') as FormControl;
  }

  irAInicio(): void {
    if ( this.name.value === '123' && this.password.value === '123') {
      this.router.navigate(['inicio'])
    } else {
      this.name.setValue('');
      this.password.setValue('');
      alert('Usuario o Contraseña Inválido');
    }
  }
}
