import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Vehicle } from '../interfaces/vehicle';
import { VehiclesType } from '../interfaces/vehicleType';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiURL: string = 'https://localhost:7185/api';

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.apiURL}/Vehicle`);
  }
  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(`${this.apiURL}/Vehicle`, vehicle);
  }
  getVehiclesType(): Observable<VehiclesType[]> {
    return this.http.get<VehiclesType[]>(`${this.apiURL}/VehiclesType`);
  }
}
