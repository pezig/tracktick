import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { SiteComponent } from './site/site.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, GridComponent, SiteComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: GridComponent, pathMatch: 'full' },
      { path: 'site', component: SiteComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
