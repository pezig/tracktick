import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { GridComponent } from 'src/app/grid/grid.component';
import { ProjectStateService } from 'src/app/shared/services/project-state/project-state.service';
import { SitesOpenComponent } from './sites-open.component';

describe('SitesOpenComponent', () => {
  let component: SitesOpenComponent;
  let fixture: ComponentFixture<SitesOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SitesOpenComponent],
      imports: [
        RouterModule.forRoot([
          {
            path: '',
            component: GridComponent,
            pathMatch: 'full',
          },
        ]),
      ],
      providers: [Router, ProjectStateService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
