import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjoutezLigneComponent } from './form-ajoutez-ligne.component';

describe('FormAjoutezLigneComponent', () => {
  let component: FormAjoutezLigneComponent;
  let fixture: ComponentFixture<FormAjoutezLigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAjoutezLigneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAjoutezLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
