import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShipmentRatingRequest } from '../interface/shipmentrating-request.interface';
import { ShipmentResponse } from '../interface/shipment-response.interface';
import { RescheduleShipmentRequest } from '../interface/rescheduleshipment-request.interface'; // Asegúrate de importar la interfaz correcta

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
    private apiUrl = 'http://localhost:8080/api/v1/shipments';

    constructor(private http: HttpClient) {}

    rateShipment(ratingRequest: ShipmentRatingRequest): Observable<ShipmentResponse> {
        return this.http.post<ShipmentResponse>(`${this.apiUrl}/rate`, ratingRequest);
    }

    // Método para reprogramar un envío utilizando POST
    rescheduleShipment(rescheduleRequest: RescheduleShipmentRequest): Observable<ShipmentResponse> {
      return this.http.post<ShipmentResponse>(`${this.apiUrl}/reschedule`, rescheduleRequest);
  }
}

