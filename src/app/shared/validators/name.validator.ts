import { Validators } from '@angular/forms';

export const nameValidator = [
  Validators.required,
  Validators.minLength(6),
];
