
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShipmentService } from '../service/shipment.service';
import { shipmentRequest } from '../interface/shipmentRequest.interface';
import { RegisterLocationComponent } from '../../location/register-location/register-location.component';
import { RegisterShipmentComponent } from '../register-shipment/register-shipment.component';
import { RegisterPaymentComponent } from '../../payment/register-payment/register-payment.component';
import { RegisterPackageComponent } from '../../packages/register-package/register-package.component';

@Component({
  selector: 'app-make-shipment',
  standalone: true,
  imports: [NavbarComponent, RegisterShipmentComponent, RegisterPaymentComponent,
     RegisterLocationComponent, RegisterPackageComponent,
    CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './make-shipment.component.html',
  styleUrls: ['./make-shipment.component.css']
})
export class MakeShipmentComponent implements OnInit {
  shipmentForm: FormGroup;
  currentStep: number = 1;

  constructor(
    private fb: FormBuilder,
    private shipmentService: ShipmentService
  ) {
    this.shipmentForm = this.fb.group({
      packageId: ['', Validators.required],
      originLocationId: ['', Validators.required],
      destinationLocationId: ['', Validators.required],
      status: ['', [Validators.required, Validators.maxLength(20)]],
      deliveryPersonId: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  nextStep(): void {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit(): void {
    if (this.shipmentForm.valid) {
      const shipmentRequest: shipmentRequest = this.shipmentForm.value;
      this.shipmentService.makeShipment(shipmentRequest).subscribe({
        next: (response) => {
          console.log('Envío registrado exitosamente', response);
          alert('Envío registrado exitosamente');
        },
        error: (err) => {
          console.error('Error al registrar el envío', err);
          alert('Error al registrar el envío');
        }
      });
    }
  }
}
