import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-sites-open',
  templateUrl: './sites-open.component.html',
  styleUrls: ['./sites-open.component.scss'],
})
export class SitesOpenComponent implements ICellRendererAngularComp {
  refresh(params): boolean {
    return false;
  }

  agInit() {}
}
