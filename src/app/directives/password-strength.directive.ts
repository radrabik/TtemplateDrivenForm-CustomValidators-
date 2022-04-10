
import {Directive} from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import { createPasswordStrengthValidator } from '../validators/password-strength.validator'

@Directive({
  selector: "[passwordStrength]",
  providers: [{
    provide: NG_VALIDATORS, 
    useExisting: PasswordStrengthDirective,
    multi:true
  }]
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