import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayLinkComponent } from './array-link.component';

describe('ArrayLinkComponent', () => {
  let component: ArrayLinkComponent;
  let fixture: ComponentFixture<ArrayLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
