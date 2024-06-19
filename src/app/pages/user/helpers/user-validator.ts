import { AbstractControl, ValidationErrors } from "@angular/forms";

export const emailValidator = (control: AbstractControl): ValidationErrors | null => {
  const email: string = control.value;
  // Esta es una expresión regular básica para validar correos electrónicos.
  const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailRegex.test(email)) {
    return { invalidEmail: true };
  }
  return null;
};

export const onlyNumbersValidator = (control: AbstractControl): ValidationErrors | null => {
  const value: string = control.value;
  const numbersRegex: RegExp = /^\[0-9]+$/;  // Esta expresión regular verifica que solo hay dígitos.

  if (!numbersRegex.test(value)) {
    return { invalidNumber: true };
  }
  return null;
};
