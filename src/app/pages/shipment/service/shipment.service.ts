import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../env/env';
import { Observable } from 'rxjs';
import { shipmentResponse } from '../interface/shipmentResponse.inteface';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  private apiUrl = environment.baseUrl;  // Ajusta esto a la URL de tu API

  constructor(private http: HttpClient) {}

  getQuote(weight: number, serviceType: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/shipments/cost/${weight}/${serviceType}`);
  }
  getTrackingInfo(shipmentId: number): Observable<shipmentResponse> {
    return this.http.get<shipmentResponse>(`${this.apiUrl}/shipments/tracking/${shipmentId}`);
  }
}
