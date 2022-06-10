import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonNavComponent } from './bouton-nav.component';

describe('BoutonNavComponent', () => {
  let component: BoutonNavComponent;
  let fixture: ComponentFixture<BoutonNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
