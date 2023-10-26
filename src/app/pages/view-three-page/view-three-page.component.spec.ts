import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewThreePageComponent } from './view-three-page.component';

describe('ViewThreePageComponent', () => {
  let component: ViewThreePageComponent;
  let fixture: ComponentFixture<ViewThreePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewThreePageComponent]
    });
    fixture = TestBed.createComponent(ViewThreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
