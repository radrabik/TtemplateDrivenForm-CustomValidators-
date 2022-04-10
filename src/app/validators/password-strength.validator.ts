import { AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function createPasswordStrengthValidator(): ValidatorFn {

  // takes Form control as input
  // return ValidationErrors or nul if no errors found
  return (control:AbstractControl) : ValidationErrors | null => {
    

    // take value of the field form the control
    const value = control.value;

    // if empty initial value, return null => no errors found
    if (!value) {
      return null;
    }

    // value has uppercase characters (boolean)
    const hasUpperCase = /[A-Z]+/.test(value);

    // value has lowercase characters (boolean)
    const hasLowerCase = /[a-z]+/.test(value);

    // value has numeric value
    const hasNumeric = /[0-9]+/.test(value);

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

    return !passwordValid ? {passwordStrength:true}: null;
  }
}