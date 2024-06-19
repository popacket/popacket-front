import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../env/env';
import { DeliveryPersonRequest } from './../interface/delivery-person-request.interface';
import { Observable } from 'rxjs';
import { DeliveryPersonResponse } from '../interface/delivery-person-response.interface';

@Injectable({
  providedIn: 'root'
})
export class DeliveryPersonService {

  private url = environment.baseUrl;
  constructor(private http:HttpClient) { }

  registerDeliveryPerson(newDeliveryPerson: DeliveryPersonRequest): Observable<DeliveryPersonResponse> {
    return this.http.post<DeliveryPersonResponse>(`${this.url}/deliveryPerson`, newDeliveryPerson);
  }

}

