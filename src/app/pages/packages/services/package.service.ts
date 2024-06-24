import { Injectable } from '@angular/core';
import { environment } from '../../../../env/env';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Package } from '../interface/Package.interface';
@Injectable({
  providedIn: 'root'
})
export class PackageService {

  private baseURL = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  getListActiveShipment(id:number): Observable<Package[]>{
    return this.httpClient.get<Package[]>('${this.baseURL}/packages/by-sender/${id}');
  }
}
