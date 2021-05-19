import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SiteComponent } from './site.component';
import { HttpClient } from '@angular/common/http';
import { MockSite } from '../shared/mocks/mocktracktick.models';

describe('SiteComponent', () => {
  let component: SiteComponent;
  let fixture: ComponentFixture<SiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiteComponent],
      imports: [HttpClientTestingModule, MatButtonModule, MatCardModule],
      providers: [HttpClient],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteComponent);
    component = fixture.componentInstance;
    spyOn(component.projectStateService, 'getSiteDetail').and.returnValue(
      MockSite
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
