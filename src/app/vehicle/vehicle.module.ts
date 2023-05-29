import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclePageComponent } from './pages/vehicle-page/vehicle-page.component';
import { VehiclesTableComponent } from './components/vehicles-table/vehicles-table.component';
import { VehicleAddComponent } from './pages/vehicle-add/vehicle-add.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VehiclePageComponent,
    VehiclesTableComponent,
    VehicleAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    VehiclePageComponent,
    VehiclesTableComponent
  ]
})
export class VehicleModule { }
