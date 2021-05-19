import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Router } from '@angular/router';
import { ProjectStateService } from 'src/app/shared/services/project-state/project-state.service';
import { Site } from 'src/app/shared/models/tracktick.models';
@Component({
  selector: 'app-sites-open',
  templateUrl: './sites-open.component.html',
  styleUrls: ['./sites-open.component.scss'],
})
export class SitesOpenComponent implements ICellRendererAngularComp {
  site: Site | null = null;
  constructor(
    private router: Router,
    private projectStateService: ProjectStateService
  ) {}

  refresh(params): boolean {
    return false;
  }

  agInit(params) {
    this.site = params.data;
  }

  navigate() {
    this.projectStateService.setSiteDetail(this.site);
    this.router.navigateByUrl('/site');
  }
}
