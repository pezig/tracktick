import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GridOptions, GridApi } from 'ag-grid-community';
import { Address, Site } from '../shared/models/tracktick.models';
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
  site: Site | null = null;
  address: Address | null = null;

  constructor(private projectStateService: ProjectStateService) {}

  ngOnInit() {
    this.site = this.projectStateService.getSiteDetail();
    this.address = this.site.address;
  }
}
