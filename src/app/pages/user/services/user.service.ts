import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../env/env';
import { UserRequest } from '../interface/user-request.interface';
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';
import { UserResponse } from '../interface/user-response.interface';
import { LoginRequest } from '../interface/login-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.baseUrl;
  currentUserData : BehaviorSubject<string> = new BehaviorSubject<string>("");
  constructor() {
    this.currentUserData = new BehaviorSubject<string>(sessionStorage.getItem("token")||"");
  }

  httpClient = inject(HttpClient);


  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producido un error '+error.error);
    }else{
      console.error('Backend retorno el código del estado '+error.message);
    }return throwError(() => error);
  }

  registerUser(newUser: UserRequest): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(`${this.url}/users`, newUser).pipe(
      catchError(this.handleError));
  }

  iniciarSesion(usuario: LoginRequest):Observable<any>{
    return this.httpClient.post<any>(`${this.url}/users/login`, usuario).pipe(
      tap((userData) => {
        console.log("User Data : "+userData);
        // sessionStorage.setItem("token", userData.token);
        // this.currentUserData.next(userData.token);
        // this.currentUserLoginOn.next(true);
      }),
      map((userData) => userData.token),
      catchError(this.handleError)
    )
  }

  get userData():Observable<String>{
    return this.currentUserData.asObservable();
  }
}
