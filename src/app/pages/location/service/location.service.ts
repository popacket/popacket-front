import { Injectable } from '@angular/core';
import { environment } from '../../../../env/env';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocationRequest } from '../interface/location-request.terface';
import { LocationResponse } from '../interface/location-response.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private baseURL = environment.baseUrl;

  constructor(private hhtpClient: HttpClient) { }

  registerLocation(location : LocationRequest): Observable<LocationResponse> {
    return this.hhtpClient.post<LocationResponse>(`${this.baseURL}/locations/register`, location);
  }
}
