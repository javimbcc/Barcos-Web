import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesBarcoComponent } from './detalles-barco.component';

describe('DetallesBarcoComponent', () => {
  let component: DetallesBarcoComponent;
  let fixture: ComponentFixture<DetallesBarcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesBarcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesBarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
