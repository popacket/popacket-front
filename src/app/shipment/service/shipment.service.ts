import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../env/env'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  
  private apiUrl = environment.baseUrl;  // Ajusta esto a la URL de tu API

  constructor(private http: HttpClient) {}

  getQuote(weight: number, serviceType: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/cost/${weight}/${serviceType}`);
  }
}