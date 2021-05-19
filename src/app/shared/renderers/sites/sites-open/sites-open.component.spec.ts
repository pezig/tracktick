import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { GridComponent } from 'src/app/grid/grid.component';
import { MockSite } from 'src/app/shared/mocks/mocktracktick.models';
import { ProjectStateService } from 'src/app/shared/services/project-state/project-state.service';
import { SitesOpenComponent } from './sites-open.component';

describe('SitesOpenComponent', () => {
  let component: SitesOpenComponent;
  let fixture: ComponentFixture<SitesOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SitesOpenComponent],
      imports: [RouterModule.forRoot([])],
      providers: [ProjectStateService],
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

  it('should set sites data', () => {
    const params = { data: MockSite };
    component.agInit(params);
    expect(component.site).toBeTruthy();
  });
});
