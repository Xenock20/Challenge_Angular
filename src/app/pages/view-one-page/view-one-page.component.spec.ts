import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOnePageComponent } from './view-one-page.component';

describe('ViewOnePageComponent', () => {
  let component: ViewOnePageComponent;
  let fixture: ComponentFixture<ViewOnePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewOnePageComponent]
    });
    fixture = TestBed.createComponent(ViewOnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
