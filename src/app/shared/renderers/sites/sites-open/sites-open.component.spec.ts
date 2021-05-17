import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesOpenComponent } from './sites-open.component';

describe('SitesOpenComponent', () => {
  let component: SitesOpenComponent;
  let fixture: ComponentFixture<SitesOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitesOpenComponent ]
    })
    .compileComponents();
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
