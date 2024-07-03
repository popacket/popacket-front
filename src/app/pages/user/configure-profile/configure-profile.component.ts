import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { UserRequest } from '../interface/user-request.interface';
import { UserResponse } from '../interface/user-response.interface';
import { NavbarComponent } from '../../../components/navbar/navbar.component';

@Component({
  selector: 'app-configure-profile',
  standalone: true,
  imports: [NavbarComponent,ReactiveFormsModule],
  templateUrl: './configure-profile.component.html',
  styleUrl: './configure-profile.component.css'
})
export class ConfigureProfileComponent implements OnInit {
  profileForm: FormGroup;
  user: UserResponse = {
    id: 0,
    document: '',
    name: '',
    lastName: '',
    email: '',
    pass: '',
    phone: ''
  };

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.profileForm = this.fb.group({
      document: [{ value: '', disabled: true }],
      name: ['', Validators.required],
      lastName: [{ value: '', disabled: true }],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(9)]]
    });
  }

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    this.userService.getUserProfile(1).subscribe({
      next: (user: UserResponse) => {
        this.user = user;
        this.profileForm.patchValue(user);
      },
      error: (err) => {
        console.error('Error al cargar los datos del usuario', err);
      }
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const updatedUser: UserRequest = {
        ...this.user,
        ...this.profileForm.getRawValue()
      };
      this.userService.updateUserProfile(updatedUser).subscribe({
        next: (response) => {
          console.log('Perfil actualizado exitosamente', response);
          alert('Perfil actualizado exitosamente');
        },
        error: (err) => {
          console.error('Error al actualizar el perfil', err);
          alert('Error al actualizar el perfil');
        }
      });
    }
  }
}
