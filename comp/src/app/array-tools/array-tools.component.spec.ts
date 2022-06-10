import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayToolsComponent } from './array-tools.component';

describe('ArrayToolsComponent', () => {
  let component: ArrayToolsComponent;
  let fixture: ComponentFixture<ArrayToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
