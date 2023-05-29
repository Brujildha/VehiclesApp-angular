import { Component, Input } from '@angular/core';


@Component({
  selector: 'vehicles-table',
  templateUrl: './vehicles-table.component.html',
  styles: [
  ]
})
export class VehiclesTableComponent {
  @Input()
  public vehicles: any;
}
