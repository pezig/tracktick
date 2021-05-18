import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GridApi, GridOptions } from 'ag-grid-community';
import { Site } from '../shared/models/tracktick.models';
import { SitesInfoComponent } from '../shared/renderers/sites/sites-info/sites-info.component';
import { SitesOpenComponent } from '../shared/renderers/sites/sites-open/sites-open.component';
import { DataService } from '../shared/services/data/data.service';

@Component({
  selector: 'app-grid',
  template: ` <label>
      <input
        type="text"
        id="filter-text-box"
        placeholder="Filter..."
        [formControl]="filterText"
        (input)="onFilterTextBoxChanged()"
      />
    </label>
    <ag-grid-angular
      style="width: 100%; height: 500px;"
      class="ag-theme-alpine"
      [rowData]="rowData"
      [columnDefs]="columnDefs"
      [gridOptions]="gridOptions"
      [frameworkComponents]="frameworkComponents"
      [pagination]="true"
      [paginationPageSize]="paginationPageSize"
      (gridReady)="onGridReady($event)"
      [getRowHeight]="getRowHeight"
    >
    </ag-grid-angular>`,
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  rowData: Site[] = null;
  gridOptions: GridOptions | null = null;
  frameworkComponents: any = null;
  gridApi: GridApi | null = null;
  gridColumnApi = null;
  paginationPageSize = 50;
  filterText: FormControl = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSites().then((data: Site[]) => {
      this.rowData = data;
    });

    this.frameworkComponents = {
      siteInfo: SitesInfoComponent,
      siteOpen: SitesOpenComponent,
    };

    this.gridOptions = {
      cacheQuickFilter: true,
    };
    this.filterText = new FormControl('');
  }

  getRowHeight(params) {
    return 70;
  }

  columnDefs = [
    { field: 'title', width: '5%' },
    {
      field: 'clientId',
      cellRenderer: 'siteInfo',
      cellStyle: {
        padding: '5px 0px',
      },
      getQuickFilterText: function (params): string {
        let site = params.data;
        return (
          site.title +
          ' ' +
          site.address.city +
          ', ' +
          site.address.state +
          ' ' +
          site.contacts.main.firstName +
          ' ' +
          site.contacts.main.lastName
        );
      },
      width: '80%',
    },
    {
      field: '',
      cellRenderer: 'siteOpen',
      width: '10px',
      cellStyle: {
        padding: '18px 0px',
      },
    },
  ];

  onFilterTextBoxChanged() {
    this.gridOptions.api.setQuickFilter(this.filterText.value);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridOptions.api.sizeColumnsToFit();
    this.gridApi.sizeColumnsToFit();
  }
}
