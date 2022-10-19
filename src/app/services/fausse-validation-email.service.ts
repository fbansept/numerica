import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { BehaviorSubject, delay, map, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FausseValidationEmailService {

  constructor() { }

  public _nombreRequete: BehaviorSubject<number> = new BehaviorSubject(0)

  public emailExists(email: string): Observable<boolean> {
    return of(email).pipe(
      delay(200),
      map((email) => {

        this._nombreRequete.next(this._nombreRequete.getValue() + 1);

        const emails = ['bansept.franck@gmail.com', 'steeve.smith@caramail.fr'];
        return emails.includes(email);
      })
    );
  }

  public uniqueEmailValidator(): AsyncValidatorFn {

    return (control: AbstractControl): any => {
      return this.emailExists(control.value).pipe(
        map((exists) => (exists ? { emailExists: true } : null))
      );
    };
  }



}

