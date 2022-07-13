import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTourComponent } from './page-tour.component';

describe('PageTourComponent', () => {
  let component: PageTourComponent;
  let fixture: ComponentFixture<PageTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
