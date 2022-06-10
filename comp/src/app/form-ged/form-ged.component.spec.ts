import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGedComponent } from './form-ged.component';

describe('FormGedComponent', () => {
  let component: FormGedComponent;
  let fixture: ComponentFixture<FormGedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
