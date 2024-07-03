import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ShipmentService } from '../services/shipment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reschedule-shipment',
  templateUrl: './rescheduleshipment.component.html',
  styleUrls: ['./rescheduleshipment.component.css'],
  standalone: true, // Esto hace que el componente sea standalone
  imports: [ReactiveFormsModule] // Importa ReactiveFormsModule aquí
})
export class RescheduleShipmentComponent implements OnInit {
  rescheduleForm!: FormGroup;
  message: string = ''; // Variable para almacenar mensajes de confirmación o error

  constructor(
    private fb: FormBuilder, 
    private shipmentService: ShipmentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.rescheduleForm = this.fb.group({
      packageId: ['', Validators.required],
      pickupDateTime: ['', Validators.required],
      deliveryDateTime: ['', Validators.required]
    });
  }

  submitReschedule() {
    if (this.rescheduleForm.valid) {
      this.shipmentService.rescheduleShipment(this.rescheduleForm.value).subscribe({
        next: (response) => {
          this.message = "Envío reprogramado con éxito.";
          this.rescheduleForm.reset(); // Resetea el formulario tras una operación exitosa
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

