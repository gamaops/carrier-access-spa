import { Validators } from '@angular/forms';

export const codeValidator = [
  Validators.required,
  Validators.min(0),
  Validators.max(9),
  Validators.maxLength(1),
];
