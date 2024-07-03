import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShipmentService } from '../service/shipment.service';

@Component({
  selector: 'app-register-shipment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-shipment.component.html',
  styleUrl: './register-shipment.component.css'
})
export class RegisterShipmentComponent implements OnInit {
  @Output() formValid = new EventEmitter<boolean>();
  shipmentForm: FormGroup;

  constructor(private fb: FormBuilder, private shipmentService: ShipmentService) {
    this.shipmentForm = this.fb.group({
      packageId: ['', Validators.required],
      originLocationId: ['', Validators.required],
      destinationLocationId: ['', Validators.required],
      status: ['', Validators.required],
      deliveryPersonId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.shipmentForm.statusChanges.subscribe(status => {
      this.formValid.emit(this.shipmentForm.valid);
    });
  }

  onSubmit(): void {
    if (this.shipmentForm.valid) {
      this.shipmentService.registerShipment(this.shipmentForm.value).subscribe({
        next: (response) => {
          console.log('Envío registrado con éxito', response);
        },
        error: (err) => {
          console.error('Error al registrar el envío', err);
        }
    });
    }
    alert('El Formulario esta incompleto');
  }
}
