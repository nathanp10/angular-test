import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormToolsComponent } from './form-tools.component';

describe('FormToolsComponent', () => {
  let component: FormToolsComponent;
  let fixture: ComponentFixture<FormToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
