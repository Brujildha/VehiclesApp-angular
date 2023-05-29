import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vehicle } from '../../interfaces/vehicle';
import { VehiclesType, VehicleType } from '../../interfaces/vehicleType';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {
  vehiclesType: VehiclesType[] = [];

  constructor(
    private router: Router,
    private vehiclesService: VehicleService
  ) { }

  public vehicleForm = new FormGroup({
    vehicleTypeId: new FormControl('', Validators.required),
    price: new FormControl(0, [Validators.required, Validators.maxLength(6)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(150)]),
    available: new FormControl(true),
  });

  get currentVehicle(): Vehicle {
    const vehicle = this.vehicleForm.value as Vehicle;
    return vehicle;
  }
  ngOnInit(): void {
    this.vehiclesService.getVehiclesType()
      .subscribe(vehiclesType => this.vehiclesType = vehiclesType);
  }

  onSubmit(): void {
    if (this.vehicleForm.invalid) return;
    console.log(this.currentVehicle);
    this.vehiclesService.addVehicle(this.currentVehicle)
      .subscribe(vehicle => {
        this.goBack();
      });

  }
  goBack(): void {
    this.router.navigateByUrl('home');
  }

}
