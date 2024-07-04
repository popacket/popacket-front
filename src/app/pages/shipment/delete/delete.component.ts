import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ShipmentService } from '../services/shipment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-shipment',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class DeleteShipmentComponent {
  deleteForm: FormGroup;
  message: string = '';

  constructor(
    private fb: FormBuilder, 
    private shipmentService: ShipmentService
  ) {
    this.deleteForm = this.fb.group({
      shipmentId: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.deleteForm.valid) {
      const shipmentId = this.deleteForm.value.shipmentId;
      this.shipmentService.deleteShipment(shipmentId).subscribe({
        next: () => {
          this.message = 'Envío eliminado correctamente.';
          this.deleteForm.reset();
        },
        error: (error) => {
          this.message = `Error al eliminar el envío: ${error.message}`;
          console.error('Error:', error);
        }
      });
    } else {
      this.deleteForm.markAllAsTouched();
      this.message = 'Por favor, introduzca un ID válido.';
    }
  }
}