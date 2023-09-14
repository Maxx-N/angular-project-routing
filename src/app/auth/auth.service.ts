import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _isAuth$ = new BehaviorSubject(false);
  readonly isAuth$ = this._isAuth$.asObservable();

  constructor() {}

  toggleAuth(): void {
    this._isAuth$.next(!this._isAuth$.getValue());
  }

  isAuth(): boolean {
    return this._isAuth$.getValue();
  }
}
