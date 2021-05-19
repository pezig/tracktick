import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { SiteComponent } from './site/site.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AppComponent, GridComponent, SiteComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    RouterModule.forRoot([
      { path: '', component: GridComponent, pathMatch: 'full' },
      { path: 'site', component: SiteComponent },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
