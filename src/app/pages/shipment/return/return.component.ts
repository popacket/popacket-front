import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShipmentService } from '../services/shipment.service';
import { ShipmentResponse } from '../interface/shipment-response.interface';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-return',
  standalone: true,
	imports: [ CommonModule,ReactiveFormsModule],
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent {
  returnForm: FormGroup;
  returnRequested: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private shipmentService: ShipmentService
  ) {
    this.returnForm = this.formBuilder.group({
      shipmentId: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.returnForm.invalid) {
      return;
    }

    const shipmentId = this.returnForm.value.shipmentId;

    this.shipmentService.requestReturn(shipmentId).subscribe(
      (response: ShipmentResponse) => {
        this.returnRequested = true;
        this.returnForm.reset();
        alert('Solicitud de devolución enviada correctamente.');
      },
      error => {
        console.error('Error al solicitar la devolución:', error);
        alert('Error al solicitar la devolución. Por favor, inténtelo nuevamente.');
      }
    );
  }

  // Método get para verificar si el campo shipmentId es inválido
  get isShipmentIdInvalid(): boolean {
    const control = this.returnForm.get('shipmentId');
    return control ? control.invalid && control.touched : false;
  }
}
