import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
// import { UserService } from '../services/user.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.userForm = this.fb.group({
      document: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }
  // private userService = inject(UserService);

  onSubmit = () => {
    console.log(this.userForm.value)
  }

}
