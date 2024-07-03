import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { RegisterLocationComponent } from '../../location/register-location/register-location.component';
import { RegisterShipmentComponent } from '../register-shipment/register-shipment.component';
import { RegisterPaymentComponent } from '../../payment/register-payment/register-payment.component';
import { RegisterPackageComponent } from '../../packages/register-package/register-package.component';

@Component({
  selector: 'app-make-shipment',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent,
    RegisterShipmentComponent,
    RegisterPaymentComponent,
    RegisterLocationComponent,
    RegisterPackageComponent
  ],
  templateUrl: './make-shipment.component.html',
  styleUrls: ['./make-shipment.component.css']
})
export class MakeShipmentComponent {
  currentStep : number = 2;
  isStepValid : boolean[] = [ false, false, false, false, false ];

  nextStep(): void {
    if (this.currentStep < 4 && (this.isStepValid[this.currentStep] == true)) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  handleFormValid(isValid: boolean, step: number): void {
    this.isStepValid[step] = isValid;
  }
}
