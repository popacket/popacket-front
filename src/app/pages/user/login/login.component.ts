import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { UserService } from '../services/user.service';
import {
	ReactiveFormsModule,
	FormBuilder,
	FormGroup,
	Validators,
} from '@angular/forms';
import Swal from 'sweetalert2'
import { LoginRequest } from '../interface/login-request.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
		private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
	) {
		this.loginForm = this.fb.group({
			username: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(8)]],
		});
	}

  controlHasError(control: string, error: string) {
		return this.loginForm.controls[control].hasError(error);
	}

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }

	private userService = inject(UserService);

  onSubmit = () => {
		console.log(this.loginForm.value);
		if (this.loginForm.invalid) {
			return;
		}
		const formValue = this.loginForm.value;

		const newlogin:LoginRequest = {
			username: formValue.username,
			password: formValue.password,
		};

		this.userService.iniciarSesion(newlogin).subscribe({
        next: (response) => {
          this.showSnackBar('Inicio de sesión exitoso');
          this.router.navigate(['/home']);
        },
        error: (error) => {
          Swal.fire({
              title: 'Error al iniciar sesion',
              icon: 'error',
              confirmButtonText: 'Ok'
          });
        }
    })

	};
}
