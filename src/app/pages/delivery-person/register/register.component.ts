import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
    deliveryPersonForm: FormGroup;



constructor(
  private fb: FormBuilder,
){
  this.deliveryPersonForm = this.fb.group({
    nombre: ['', Validators.required],
    phone: ['',Validators.required],
    type: ['',Validators.required]
  });
}

onSubmit = () => {
  console.log(this.deliveryPersonForm.value)
}

}