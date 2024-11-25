import { ValidatorFn ,AbstractControl, ValidationErrors} from "@angular/forms";

export function nameWithoutSpecialChar() : ValidatorFn{

    return (control:AbstractControl) : ValidationErrors | null=>{
        const value=control.value;
        const isValid = /^[A-Za-z\s]+$/.test(value);
        return isValid ? null : {alphabetic : {value :control.value}}

    }

}