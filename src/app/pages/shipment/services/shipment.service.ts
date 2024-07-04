import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShipmentResponse } from '../interface/shipment-response.interface';
import { environment } from '../../../../env/env';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  private url = `${environment.baseUrl}/shipments`;

  constructor(private http: HttpClient) {}

  getAllShipmentAddresses(): Observable<ShipmentResponse[]> {
    return this.http.get<ShipmentResponse[]>(`${this.url}/ListDestinationLocation`);
  }

  requestReturn(shipmentId: number): Observable<ShipmentResponse> {
    return this.http.post<ShipmentResponse>(`${this.url}/return/${shipmentId}`, null);
  }
}
