import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-register-payment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-payment.component.html',
  styleUrl: './register-payment.component.css'
})
export class RegisterPaymentComponent implements OnInit {
  @Output() formValid = new EventEmitter<boolean>();
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      // Define your payment fields here
    });
  }

  ngOnInit(): void {
    this.paymentForm.statusChanges.subscribe(status => {
      this.formValid.emit(this.paymentForm.valid);
    });
  }}
