import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSageComponent } from './form-sage.component';

describe('FormSageComponent', () => {
  let component: FormSageComponent;
  let fixture: ComponentFixture<FormSageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
