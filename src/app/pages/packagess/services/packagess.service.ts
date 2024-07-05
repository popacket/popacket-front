
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PackageResponse } from '../interface/package-response.interface';
import { environment } from '../../../../env/env';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private url = `${environment.baseUrl}/packages`;

  constructor(private http: HttpClient) {}

  getAllDestinationAddressesWithId(): Observable<PackageResponse[]> {
    return this.http.get<PackageResponse[]>(`${this.url}/destination-addresses`);
  }
}
