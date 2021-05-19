import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { MockSite } from '../shared/mocks/mocktracktick.models';
import { ProjectStateService } from '../shared/services/project-state/project-state.service';
import { SiteComponent } from '../site/site.component';

import { GridComponent } from './grid.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridComponent],
      imports: [
        HttpClientTestingModule,
        AgGridModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
          { path: '', component: GridComponent, pathMatch: 'full' },
          { path: 'site', component: SiteComponent },
        ]),
      ],
      providers: [ProjectStateService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    router = component.router;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return row height', () => {
    expect(component.getRowHeight(null)).toBeTruthy();
  });

  it('should navigate to site detail', () => {
    const params = {
      data: MockSite,
      colDef: {
        field: 'clientId',
      },
    };
    const navigateSpy = spyOn(component.router, 'navigateByUrl');
    component.cellClicked(params);
    fixture.detectChanges();
    expect(navigateSpy).toHaveBeenCalledWith('/site');
  });
});
