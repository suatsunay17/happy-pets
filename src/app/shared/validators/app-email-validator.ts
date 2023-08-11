import { ValidatorFn } from '@angular/forms';

export const appEmailValidator: ValidatorFn = (control) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(control.value) ? null : { emailValidator: true };
};
