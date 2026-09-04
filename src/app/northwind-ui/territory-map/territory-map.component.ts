import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeTerritoryMap } from '../../utilities/models/employee-territory-map';
import { EmployeeTerritoryMapService } from '../../utilities/services/employee-territory-details/employee-territory-map.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-territory-map',
  imports: [AsyncPipe],
  templateUrl: './territory-map.component.html',
  styleUrl: './territory-map.component.scss',
})
export class TerritoryMapComponent {
  private _service = inject(EmployeeTerritoryMapService);

  employeeGroups$: Observable<EmployeeTerritoryMap[]> = this._service.getEmployeeTerritoryMap();
}
