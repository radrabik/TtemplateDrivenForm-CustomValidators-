
import {Directive} from '@angular/core';
import { AbstractControl, ValidationErrors, Validator} from '@angular/forms';
import { createPasswordStrengthValidator } from '../validators/password-strength.validator'

@Directive({
  selector: "[passwordStrength]"
})
export class PasswordStrengthDirective implements Validator {

  // implements Validator, which allows our directive to validate form
  // takes Form control as input
  // return ValidationErrors or nul if no errors found
  validate(control: AbstractControl): ValidationErrors | null {
   
    // Firstly we create validator funtion (), then we call it (control)
    return createPasswordStrengthValidator()(control);


 }

}