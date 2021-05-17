import { Component, OnInit } from '@angular/core';
import { Site } from '../shared/models/tracktick.models';
import { DataService } from '../shared/services/data/data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  rowData: Site[] = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSites().then((data: Site[]) => {
      this.rowData = data;
    });



  }

  columnDefs = [{ field: 'title' }, { field: 'clientId' }];

}
