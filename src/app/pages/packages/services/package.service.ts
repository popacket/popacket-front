import { Injectable } from '@angular/core';
import { environment } from '../../../../env/env';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PackageService {

  private baseURL = environment.baseUrl

  constructor(private httpClient: HttpClient) { }

  getListActiveShipment():Observable<Package[]>{
    return this.httpClient.get<Package[]>("${baseURL}/")
  }
}
