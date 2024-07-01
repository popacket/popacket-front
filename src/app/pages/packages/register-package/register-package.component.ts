import { Package } from './../interface/Package.interface';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup,FormBuilder,Validators,ReactiveFormsModule } from '@angular/forms';
import { PackageService } from '../services/package.service';
@Component({
  selector: 'app-register-package',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-package.component.html',
  styleUrl: './register-package.component.css'
})
export class RegisterPackageComponent implements OnInit {
  @Output() formValid = new EventEmitter<boolean>();
  packageForm: FormGroup;

  constructor(private fb: FormBuilder, private packageService: PackageService) {
    this.packageForm = this.fb.group({
      senderId: ['', Validators.required],
      recipientId: ['', Validators.required],
      description: ['', Validators.required],
      weight: ['', Validators.required],
      status: ['', Validators.required],
      paymentType: ['', Validators.required],
      originAddress: ['', Validators.required],
      destinationAddress: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.packageForm.statusChanges.subscribe(status => {

      this.formValid.emit(this.packageForm.valid);
    });
  }

  onSubmit(): void {
    if (this.packageForm.valid) {
      this.packageService.createPackage(this.packageForm.value).subscribe({
        next: (response) => {
          console.log('Paquete registrado', response);
          alert('Paquete registrado exitosamente!!!');
        },
        error: (err) => {
          console.error('Error al registrar', err);
          alert('Error al registrar el paquete');
        }
      });
  }
  alert('El Formulario esta incompleto');
 }
}
