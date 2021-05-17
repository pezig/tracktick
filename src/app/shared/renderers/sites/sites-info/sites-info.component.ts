import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-sites-info',
  templateUrl: './sites-info.component.html',
  styleUrls: ['./sites-info.component.scss']
})
export class SitesInfoComponent implements ICellRendererAngularComp{

  agInit(params: any) {

  }

  refresh(params: ICellRendererParams): boolean{
    return false;
  }

}
