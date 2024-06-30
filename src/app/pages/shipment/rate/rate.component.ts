import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ShipmentService } from '../services/shipment.service';
import { Router, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-rate-shipment',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css'], // Asegúrate de que esto es correcto
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLinkWithHref]
})
export class RateComponent implements OnInit {
    ratingForm!: FormGroup;

    constructor(
        private fb: FormBuilder, 
        private shipmentService: ShipmentService,
        private router: Router  // Solo si necesitas realizar navegación
    ) {}

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.ratingForm = this.fb.group({
            shipmentId: ['', Validators.required],
            rating: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
            comments: ['', Validators.maxLength(255)]
        });
    }

    submitRating() {
        if (this.ratingForm.valid) {
            this.shipmentService.rateShipment(this.ratingForm.value).subscribe({
                next: (response) => {
                    console.log('Rating submitted successfully', response);
                    // Aquí puedes agregar alguna notificación o redireccionamiento
                    this.router.navigate(['/success']);  // Ejemplo de redirección
                },
                error: (error) => {
                    console.error('Failed to submit rating', error);
                    // Aquí podrías manejar errores, mostrar un mensaje al usuario, etc.
                }
            });
        } else {
            // Asegura que todos los campos son tocados para mostrar errores
            this.ratingForm.markAllAsTouched();
        }
    }
}
