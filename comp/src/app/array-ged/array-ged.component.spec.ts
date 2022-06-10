import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayGedComponent } from './array-ged.component';

describe('ArrayGedComponent', () => {
  let component: ArrayGedComponent;
  let fixture: ComponentFixture<ArrayGedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayGedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayGedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
