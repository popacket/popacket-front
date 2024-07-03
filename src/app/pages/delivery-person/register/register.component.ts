import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { DeliveryPersonRequest } from '../interface/delivery-person-request.interface';
import { DeliveryPersonService } from '../services/delivery-person.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  deliveryPersonForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.deliveryPersonForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  controlHasError(control: string, error: string) {
    return this.deliveryPersonForm.controls[control].hasError(error);
  }

  private deliveryPersonService = inject(DeliveryPersonService);

  onSubmit = () => {
    console.log(this.deliveryPersonForm.value);
    if (this.deliveryPersonForm.invalid) {
      return;
    }
    const formValue = this.deliveryPersonForm.value;

    const newDeliveryPerson: DeliveryPersonRequest = {
      name: formValue.name,
      phone: formValue.phone,
      type: formValue.type,
    };

    this.deliveryPersonService.registerDeliveryPerson(newDeliveryPerson).subscribe({
      next: (response) => {
        Swal.fire({
          title: '¡Registro exitoso!',
          text: 'El usuario ha sido registrado correctamente.',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        this.deliveryPersonForm.reset();
      },
      error: (error) => {
        if (error.status == 409) {
          Swal.fire({
            title: 'Error en el registro',
            text: 'Los datos ya se encuentran registrados previamente',
            icon: 'info',
            confirmButtonText: 'Ok',
          });
        } else {
          Swal.fire({
            title: 'Error en el registro',
            text: 'No se pudo registrar el usuario. Por favor, intente nuevamente.',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      },
    });
  };
}
