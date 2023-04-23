import { Component } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  isChecked: boolean;
  totalPeople: number = 0;
  defaultPageIdx = 0;
  defaultPageSize = 10;
  selectedViewOption: string;



  viewOptions = [
    {
      name: "List",
      icon: "view_list"
    }, {
      name: "Grid",
      icon: "view_module"
    }, {
      name: "Table",
      icon: "table_view"
    }
  ]

  constructor(private peopleService: PeopleService) {
    this.isChecked = false;
    this.selectedViewOption = this.viewOptions[0].name;
    // this.populatePeople();
    // this.populateTotalPeople();
  }
}
