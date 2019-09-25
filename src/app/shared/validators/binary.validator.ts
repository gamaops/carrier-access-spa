import { Validators } from '@angular/forms';

export const binaryValidator = [
  Validators.required,
  Validators.maxLength(1),
  Validators.pattern(/[0-1]{1}/),
];
