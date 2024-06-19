import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { UserService } from '../services/user.service';
import {
	ReactiveFormsModule,
	FormBuilder,
	FormGroup,
	Validators,
} from '@angular/forms';
import { UserRequest } from '../interface/user-request.interface';
import Swal from 'sweetalert2'

@Component({
	selector: 'app-register',
	standalone: true,
	imports: [CommonModule, RouterLinkWithHref, ReactiveFormsModule],
	templateUrl: './register.component.html',
	styleUrl: './register.component.css',
})
export class RegisterComponent {
	userForm: FormGroup;

	constructor(
		private fb: FormBuilder // private snackBar: MatSnackBar,
	) {
		this.userForm = this.fb.group({
			document: ['', Validators.required],
			name: ['', Validators.required],
			lastName: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			pass: ['', [Validators.required, Validators.minLength(8)]],
			phone: ['', Validators.required],
		});
	}

	controlHasError(control: string, error: string) {
		return this.userForm.controls[control].hasError(error);
	}
	private userService = inject(UserService);

	onSubmit = () => {
		console.log(this.userForm.value);
		if (this.userForm.invalid) {
			return;
		}
		const formValue = this.userForm.value;

		const newUser: UserRequest = {
			document: formValue.document,
			name: formValue.name,
			lastName: formValue.lastName,
			email: formValue.email,
			pass: formValue.pass,
			phone: formValue.phone,
		};

		this.userService.registerUser(newUser).subscribe({
        next: (response) => {
            Swal.fire({
                title: '¡Registro exitoso!',
                text: 'El usuario ha sido registrado correctamente.',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
            this.userForm.reset();
        },
        error: (error) => {
            if(error.status == 409){
                Swal.fire({
                    title: 'Error en el registro',
                    text: 'Los datos ya se encuentran registrados previamente',
                    icon: 'info',
                    confirmButtonText: 'Ok'
                });
            }else{
                Swal.fire({
                    title: 'Error en el registro',
                    text: 'No se pudo registrar el usuario. Por favor, intente nuevamente.',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }
        }
    })
	};
}
