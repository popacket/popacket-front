import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../env/env';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { UserRequest } from '../interface/user-request.interface';
import { UserResponse } from '../interface/user-response.interface';
import { LoginRequest } from '../interface/login-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.baseUrl;
  currentUserData: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private httpClient: HttpClient) {
    this.currentUserData = new BehaviorSubject<string>(sessionStorage.getItem("token") || "");
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producido un error ' + error.error);
    } else {
      console.error('Backend retornó el código de estado ' + error.status);
    }
    return throwError(() => error);
  }

  registerUser(newUser: UserRequest): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(`${this.url}/users`, newUser).pipe(
      catchError(this.handleError)
    );
  }

  iniciarSesion(usuario: LoginRequest): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/users/login`, usuario).pipe(
      tap((userData) => {
        console.log("User Data : " + userData);
        // sessionStorage.setItem("token", userData.token);
        // this.currentUserData.next(userData.token);
        // this.currentUserLoginOn.next(true);
      }),
      map((userData) => userData.token),
      catchError(this.handleError)
    );
  }

  recoverPassword(email: string): Observable<void> {
    return this.httpClient.post<void>(`${this.url}/email/forgot-password/${email}`, {}).pipe(
      catchError(this.handleError)
    );
  }

  verifyTokenAndResetPassword(token: string, newPassword: string): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/email/reset-password/${token}/${newPassword}`, {}).pipe(
      catchError(this.handleError)
    );
  }

  get userData(): Observable<string> {
    return this.currentUserData.asObservable();
  }
}
