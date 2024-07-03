import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ShipmentService } from '../services/shipment.service';
import { Router, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-rate-shipment',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css'], 
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLinkWithHref]
})
export class RateComponent implements OnInit {
    ratingForm!: FormGroup;
    message: string = ''; 

    constructor(
        private fb: FormBuilder, 
        private shipmentService: ShipmentService,
        private router: Router
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
                    // Navegar a la página de éxito o mostrar mensaje de éxito
                    this.message = "Calificación enviada con éxito.";
                    this.router.navigate(['/success']);
                },
                error: (error) => {
                    // Mostrar mensaje de error
                    this.message = "Error al enviar la calificación. Por favor, inténtelo de nuevo.";
                }
            });
        } else {
            this.ratingForm.markAllAsTouched();
            this.message = "Por favor, complete todos los campos correctamente.";
        }
    }
}
