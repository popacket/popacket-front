import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-register-location',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-location.component.html',
  styleUrl: './register-location.component.css'
})
export class RegisterLocationComponent implements OnInit {
  @Output() formValid = new EventEmitter<boolean>();
  locationForm: FormGroup;

  constructor(private fb: FormBuilder, private locationService:LocationService) {
    this.locationForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      type: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.locationForm.statusChanges.subscribe(status => {
      this.formValid.emit(this.locationForm.valid);
    });
  }
  onSubmit(): void {
   /* if (this.locationForm.valid) {
      //this.locationService.createPackage(this.packageForm.value).subscribe({
      //  next: (response) => {
        //  console.log('Paquete registrado', response);
          alert('Paquete registrado exitosamente!!!');
        //},
        //error: (err) => {
         // console.error('Error al registrar', err);
         // alert('Error al registrar el paquete');
        }
      });
  }
  alert('El Formulario esta incompleto');
 */}
}
