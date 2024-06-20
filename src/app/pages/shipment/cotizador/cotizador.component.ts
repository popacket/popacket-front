import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentService } from '../service/shipment.service';
import {
	ReactiveFormsModule,
	FormBuilder,
	FormGroup,
	Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cotizador',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cotizador.component.html',
  styleUrl: './cotizador.component.css'
})
export class CotizadorComponent {
  // "weight": number;
  // "serviceType" : string;
  "quote" : number = 0;
  costForm: FormGroup;
  private shipmentService = inject(ShipmentService);

  constructor(private fb: FormBuilder) {
    this.costForm = this.fb.group({
			weight: ['', Validators.required],
			serviceType: ['', Validators.required]
		});
  }
  // getQuote() {
  //   this.shipmentService.getQuote(this.weight, this.serviceType).subscribe({
  //     next: (response) => {
  //       data = response.data;
  //       console.log(data);
  //       this.quote = data;
  //     },
  //     error: (error) => {
  //       console.error('Error al obtener la cotización', error);
  //     }
  //   }
      
  //   );
  // }

  onSubmit(){
    const formValue = this.costForm.value;
    const weight = formValue.weight;
    const serviceType = formValue.serviceType;
    this.shipmentService.getQuote(weight,serviceType).subscribe({
      next: (response) => {
        // data = response.data;
        console.log(response);
        // this.quote = data;
      },
      error: (error) => {
        console.error('Error al obtener la cotización', error);
      }
    }
    )
  }
}