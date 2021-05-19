import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Router } from '@angular/router';
import { ProjectStateService } from 'src/app/shared/services/project-state/project-state.service';
import { Site } from 'src/app/shared/models/tracktick.models';
@Component({
  selector: 'app-sites-open',
  template: `<a (click)="navigate()">
    <img src="assets/icons/arrow-right.svg" alt="More details" />
  </a>`,
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
