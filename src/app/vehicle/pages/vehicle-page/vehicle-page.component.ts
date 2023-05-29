import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../interfaces/vehicle';

@Component({
  selector: 'vehicle-page',
  templateUrl: './vehicle-page.component.html',
  styleUrls: ['./vehicle-page.component.css']
})
export class VehiclePageComponent implements OnInit {
  errorFound: boolean = false;
  public vehicles: Vehicle[] = [];
  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.errorFound = false;
    this.vehicleService.getVehicles()
      .subscribe((v: Vehicle[]) => {
        this.vehicles = v;
        console.log(this.vehicles);
      }, (err) => {
        this.errorFound = true;
      });
  }


}
