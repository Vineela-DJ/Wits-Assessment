import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { debounceTime, switchMap, map, catchError, of } from 'rxjs';
import { User } from './user';

export function UsernameValidator(
  userService: User
): AsyncValidatorFn {

  return (control: AbstractControl) => {

    if (!control.value) {
      return of(null);
    }

    return of(control.value).pipe(

      debounceTime(500),

      switchMap(username =>
        userService.checkUsername(username)
      ),

      map(isTaken =>
        isTaken ? { usernameTaken: true } : null
      ),

      catchError(() => of({ serverError: true }))
    );
  };
}