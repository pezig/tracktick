import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GridOptions, GridApi } from 'ag-grid-community';
import { Site } from '../shared/models/tracktick.models';
import { SitesInfoComponent } from '../shared/renderers/sites/sites-info/sites-info.component';
import { SitesOpenComponent } from '../shared/renderers/sites/sites-open/sites-open.component';
import { DataService } from '../shared/services/data/data.service';
import { ProjectStateService } from '../shared/services/project-state/project-state.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
})
export class SiteComponent implements OnInit {
  rowData: Site[] = null;
  gridOptions: GridOptions | null = null;
  frameworkComponents: any = null;
  gridApi: GridApi | null = null;
  gridColumnApi = null;
  paginationPageSize = 50;
  filterText: FormControl = null;

  constructor(
    private dataService: DataService,
    private projectStateService: ProjectStateService
  ) {
    console.log(this.projectStateService.getSiteDetail());
  }

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
      width: '20px',
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
