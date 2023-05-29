import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './shared/pages/home-pages/home-pages.component';
import { VehicleAddComponent } from './vehicle/pages/vehicle-add/vehicle-add.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePagesComponent
  },
  {
    path: 'create',
    component: VehicleAddComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
