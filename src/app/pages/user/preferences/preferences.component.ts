import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class PreferencesComponent implements OnInit {
    preferencesForm!: FormGroup;
    userId!: number;

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.userId = +params['userId'];
            this.createForm();
        });
    }

    createForm() {
        this.preferencesForm = this.fb.group({
            defaultShippingAddress: ['', Validators.required],
            preferredPaymentMethod: ['', Validators.required],
            preferredShippingType: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.preferencesForm.valid) {
            this.userService.updatePreferences(this.userId, this.preferencesForm.value).subscribe({
                next: (response) => {
                    alert('Preferencias actualizadas correctamente');
                    this.preferencesForm.reset(); // Resetear el formulario después de una actualización exitosa
                },
                error: (error) => {
                    alert('Error al actualizar preferencias');
                    console.error('Error updating preferences:', error);
                }
            });
        } else {
            alert('Por favor, complete todos los campos correctamente.');
        }
    }
}

