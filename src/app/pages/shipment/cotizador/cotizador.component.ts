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

  "quote" : number = 0;
  costForm: FormGroup;
  private shipmentService = inject(ShipmentService);

  constructor(private fb: FormBuilder) {
    this.costForm = this.fb.group({
			weight: ['', Validators.required],
			serviceType: ['', Validators.required]
		});
  }
  onSubmit(){
    const formValue = this.costForm.value;
    const weight = formValue.weight;
    const serviceType = formValue.serviceType;
    this.shipmentService.getQuote(weight,serviceType).subscribe({
      next: (response) => {
        console.log(response);
        this.quote = response;
      },
      error: (error) => {
        console.error('Error al obtener la cotización', error);
      }
    }
    )
  }
}
