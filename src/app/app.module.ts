import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { SiteComponent } from './site/site.component';

@NgModule({
  declarations: [AppComponent, GridComponent, SiteComponent],
  imports: [BrowserModule, HttpClientModule, AgGridModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
