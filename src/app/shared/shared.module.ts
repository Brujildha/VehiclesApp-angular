import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { VehicleModule } from '../vehicle/vehicle.module';



@NgModule({
  declarations: [
    HomePagesComponent
  ],
  imports: [
    CommonModule,
    VehicleModule
  ]
})
export class SharedModule { }
