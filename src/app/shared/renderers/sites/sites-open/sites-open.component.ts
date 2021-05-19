import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Router } from '@angular/router';
import { ProjectStateService } from 'src/app/shared/services/project-state/project-state.service';
import { Site } from 'src/app/shared/models/tracktick.models';
@Component({
  selector: 'app-sites-open',
  template: ` <img src="assets/icons/arrow-right.svg" alt="More details" /> `,
  styleUrls: ['./sites-open.component.scss'],
})
export class SitesOpenComponent implements ICellRendererAngularComp {
  refresh(params): boolean {
    return false;
  }

  agInit(params) {}
}
