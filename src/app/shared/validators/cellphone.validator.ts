import { Validators } from '@angular/forms';

export const cellphoneValidator = [
  Validators.required,
  Validators.pattern(/^\(?\d{2}\)?[\s-]?9[7-9]{1}[0-9]{3}\-?[0-9]{4}$/),
];
