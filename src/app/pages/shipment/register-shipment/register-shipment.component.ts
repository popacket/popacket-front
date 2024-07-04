import { DeliveryPersonResponse } from './../../delivery-person/interface/delivery-person-response.interface';
import { DeliveryPersonService } from './../../delivery-person/services/delivery-person.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShipmentService } from '../service/shipment.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register-shipment',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-shipment.component.html',
  styleUrl: './register-shipment.component.css'
})
export class RegisterShipmentComponent implements OnInit {
  @Output() formValid = new EventEmitter<boolean>();
  shipmentForm: FormGroup;
  deliveryPersons: DeliveryPersonResponse[] = [];

  constructor(private fb: FormBuilder, private shipmentService: ShipmentService, private deliveryPService:DeliveryPersonService) {
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
    this.fetchDeliveryPersons().subscribe((persons: DeliveryPersonResponse[]) => {
      this.deliveryPersons = persons;
    });
  }

  fetchDeliveryPersons(): Observable<DeliveryPersonResponse[]> {
    return this.deliveryPService.getDeliveryPersons();
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
  get packageId() {
    return this.shipmentForm.get('packageId');
  }
  get originLocationAddress() {
    return this.shipmentForm.get('originLocationAddress');
  }

  get destinationLocationAddress() {
    return this.shipmentForm.get('destinationLocationAddress');
  }

  get status() {
    return this.shipmentForm.get('status');
  }

  get deliveryPersonId() {
    return this.shipmentForm.get('deliveryPersonId');
  }
}
