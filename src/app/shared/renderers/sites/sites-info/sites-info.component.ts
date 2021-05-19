import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Site } from 'src/app/shared/models/tracktick.models';

@Component({
  selector: 'app-sites-info',
  template: `
    <div class="container">
      <div class="text">
        <div>{{ siteName }}</div>
        <div>{{ siteAddress }}</div>
        <div>{{ mainContact }}</div>
      </div>
      <div class="link">
        <img src="assets/icons/arrow-right.svg" alt="More details" />
      </div>
    </div>
  `,
  styleUrls: ['./sites-info.component.scss'],
})
export class SitesInfoComponent implements ICellRendererAngularComp {
  siteName = '';
  siteAddress = '';
  mainContact = '';
  private site: Site = null;

  agInit(params: any) {
    this.site = params.data;
    this.siteName = this.site.title;
    this.siteAddress = this.site.address.city + ', ' + this.site.address.state;
    this.mainContact =
      this.site.contacts.main.firstName +
      ' ' +
      this.site.contacts.main.lastName;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
