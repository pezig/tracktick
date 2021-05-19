import { Component, OnInit } from '@angular/core';
import { Address, Site } from '../shared/models/tracktick.models';
import { ProjectStateService } from '../shared/services/project-state/project-state.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
})
export class SiteComponent implements OnInit {
  site: Site | null = null;
  address: Address | null = null;

  constructor(public projectStateService: ProjectStateService) {}

  ngOnInit() {
    this.site = this.projectStateService.getSiteDetail();
    if (this.site) {
      this.address = this.site.address;
    }
  }
}
