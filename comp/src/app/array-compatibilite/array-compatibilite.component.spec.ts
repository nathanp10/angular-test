import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayCompatibiliteComponent } from './array-compatibilite.component';

describe('ArrayCompatibiliteComponent', () => {
  let component: ArrayCompatibiliteComponent;
  let fixture: ComponentFixture<ArrayCompatibiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayCompatibiliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayCompatibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
