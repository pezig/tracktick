import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesInfoComponent } from './sites-info.component';

describe('SitesInfoComponent', () => {
  let component: SitesInfoComponent;
  let fixture: ComponentFixture<SitesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
