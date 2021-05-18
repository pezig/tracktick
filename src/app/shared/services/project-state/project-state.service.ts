import { Injectable } from '@angular/core';
import { Site } from '../../models/tracktick.models';

@Injectable({
  providedIn: 'root',
})
export class ProjectStateService {
  private site: Site;

  constructor() {}

  getSiteDetail(): Site {
    return this.site;
  }

  setSiteDetail(site: Site) {
    this.site = site;
  }
}
