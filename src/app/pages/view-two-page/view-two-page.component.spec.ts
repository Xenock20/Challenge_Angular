import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTwoPageComponent } from './view-two-page.component';

describe('ViewTwoPageComponent', () => {
  let component: ViewTwoPageComponent;
  let fixture: ComponentFixture<ViewTwoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTwoPageComponent]
    });
    fixture = TestBed.createComponent(ViewTwoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
