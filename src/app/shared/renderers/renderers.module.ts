import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitesInfoComponent } from './sites/sites-info/sites-info.component';
import { SitesOpenComponent } from './sites/sites-open/sites-open.component';


@NgModule({
  declarations: [
    SitesInfoComponent,
    SitesOpenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RenderersModule { }
