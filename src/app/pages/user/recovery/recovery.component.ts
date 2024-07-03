import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent {
  recoveryForm: FormGroup;
  resetPasswordForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  resetPasswordSuccessMessage: string = '';
  resetPasswordErrorMessage: string = '';
  resetRequested: boolean = false;
  tokenVerified: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.recoveryForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.resetPasswordForm = this.fb.group({
      token: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.recoveryForm.valid) {
      const email = this.recoveryForm.get('email')?.value; // Accessing value safely
      if (email) {
        this.userService.recoverPassword(email).subscribe({
          next: () => {
            this.successMessage = 'Solicitud enviada con éxito. Por favor, revisa tu correo.';
            this.errorMessage = '';
          },
          error: (error) => {
            this.errorMessage = 'Hubo un error al enviar la solicitud. Por favor, intenta nuevamente.';
            this.successMessage = '';
            console.error('Error:', error);
          }
        });
      }
    }
  }

  onChangePassword() {
    if (this.resetPasswordForm.valid) {
      const token = this.resetPasswordForm.get('token')?.value; // Accessing value safely
      const newPassword = this.resetPasswordForm.get('newPassword')?.value; // Accessing value safely
      if (token && newPassword) {
        this.userService.verifyTokenAndResetPassword(token, newPassword).subscribe({
          next: () => {
            this.resetPasswordSuccessMessage = 'Contraseña cambiada exitosamente.';
            this.resetPasswordErrorMessage = '';
            this.tokenVerified = true;
          },
          error: (error) => {
            this.resetPasswordErrorMessage = 'Hubo un error al cambiar la contraseña. Por favor, intenta nuevamente.';
            this.resetPasswordSuccessMessage = '';
            console.error('Error:', error);
          }
        });
      }
    }
  }
}
