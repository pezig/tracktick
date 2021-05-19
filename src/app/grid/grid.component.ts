import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {
  CellClickedEvent,
  Column,
  ColumnApi,
  GridApi,
  GridOptions,
} from 'ag-grid-community';
import { Site } from '../shared/models/tracktick.models';
import { SitesInfoComponent } from '../shared/renderers/sites/sites-info/sites-info.component';
import { SitesOpenComponent } from '../shared/renderers/sites/sites-open/sites-open.component';
import { DataService } from '../shared/services/data/data.service';
import { ProjectStateService } from '../shared/services/project-state/project-state.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @ViewChild('grid') grid: HTMLElement = null;
  rowData: Site[] = null;
  gridOptions: GridOptions | null = null;
  frameworkComponents: any = null;
  gridApi: GridApi | null = null;
  gridColumnApi: ColumnApi | null = null;
  paginationPageSize = 50;
  filterText: FormControl = null;

  constructor(
    private dataService: DataService,
    public router: Router,
    private projectStateService: ProjectStateService
  ) {}

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
    { field: 'title', width: this.columnWidth(25) },
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
      width: this.columnWidth(75),
    },
    {
      field: '',
      hide: true,
      cellRenderer: 'siteOpen',
      width: 10,
      cellStyle: {
        padding: '18px 0px',
      },
    },
  ];

  onFilterTextBoxChanged() {
    this.gridOptions.api.setQuickFilter(this.filterText.value);
  }

  columnWidth(percentage: number): number {
    let width: number = percentage;
    if (this.grid) {
      width = (this.grid.clientWidth * percentage) / 100; // Pixel calculation
    }
    return width;
  }

  cellClicked(params) {
    if (params.colDef.field == 'clientId') {
      this.projectStateService.setSiteDetail(params.data);
      this.router.navigateByUrl('/site');
    }
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridOptions.api.sizeColumnsToFit();
    this.gridApi.sizeColumnsToFit();
  }
}
