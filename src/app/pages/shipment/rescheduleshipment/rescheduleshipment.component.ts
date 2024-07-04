import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShipmentService } from '../services/shipment.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reschedule-shipment',
  templateUrl: './rescheduleshipment.component.html',
  styleUrls: ['./rescheduleshipment.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule] 
})
export class RescheduleShipmentComponent implements OnInit {
  rescheduleForm!: FormGroup;
  message: string = '';  // Mensaje para mostrar el estado de la operación

  constructor(
    private fb: FormBuilder,
    private shipmentService: ShipmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  // Inicializa el formulario con validaciones necesarias
  createForm(): void {
    this.rescheduleForm = this.fb.group({
      packageId: ['', Validators.required],
      pickupDateTime: ['', Validators.required],
      deliveryDateTime: ['', [Validators.required, this.validateDeliveryTime]]
    });
  }

  // Validador personalizado para asegurar que la fecha de entrega es posterior a la de recogida
  validateDeliveryTime(control: FormGroup): Validators | null {
    const pickup = control.get('pickupDateTime')?.value;
    const delivery = control.get('deliveryDateTime')?.value;
    return pickup && delivery && delivery < pickup ? { invalidDeliveryTime: true } : null;
  }

  // Método que se llama al enviar el formulario
  submitReschedule(): void {
    if (this.rescheduleForm.valid) {
      this.shipmentService.rescheduleShipment(this.rescheduleForm.value).subscribe({
        next: (response) => {
          this.message = "Envío reprogramado con éxito.";
          this.rescheduleForm.reset();
        },
        error: (error) => {
          this.message = "Error al reprogramar el envío. Por favor, inténtelo de nuevo.";
        }
      });
    } else {
      this.rescheduleForm.markAllAsTouched();
      this.message = "Por favor, complete todos los campos correctamente.";
    }
  }
}
