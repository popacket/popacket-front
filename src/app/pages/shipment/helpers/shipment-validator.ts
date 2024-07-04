import { AbstractControl, ValidationErrors } from '@angular/forms';

export function validateShipmentId(control: AbstractControl): ValidationErrors | null {
    if (control.value <= 0) {
        return { invalidId: 'El ID debe ser mayor que cero.' };
    }
    return null;
}
