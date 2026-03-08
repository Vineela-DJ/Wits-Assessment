import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class User {

  private existingUsers = [
    'admin',
    'john',
    'peter',
    'angular',
    'test'
  ];

  checkUsername(username: string): Observable<boolean> {

    const simulateError = Math.random() < 0.1;

    if (simulateError) {
      return throwError(() => new Error('Server error')).pipe(delay(1000));
    }

    const isTaken = this.existingUsers.includes(username.toLowerCase());

    return of(isTaken).pipe(delay(1000));
  }

}