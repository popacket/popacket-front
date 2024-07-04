import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShipmentRatingRequest } from '../interface/shipmentrating-request.interface';
import { ShipmentResponse } from '../interface/shipment-response.interface';
import { RescheduleShipmentRequest } from '../interface/rescheduleshipment-request.interface';
import { DeleteShipmentRequest } from '../interface/deleteshipment-request.interface';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
    private apiUrl = 'http://localhost:8080/api/v1/shipments';

    constructor(private http: HttpClient) {}

    rateShipment(ratingRequest: ShipmentRatingRequest): Observable<ShipmentResponse> {
        return this.http.post<ShipmentResponse>(`${this.apiUrl}/rate`, ratingRequest);
    }


    rescheduleShipment(rescheduleRequest: RescheduleShipmentRequest): Observable<ShipmentResponse> {
        return this.http.post<ShipmentResponse>(`${this.apiUrl}/reschedule`, rescheduleRequest);
    }

    deleteShipment(deleteRequest: DeleteShipmentRequest): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/delete`, {
            body: deleteRequest 
        });
    }
}

