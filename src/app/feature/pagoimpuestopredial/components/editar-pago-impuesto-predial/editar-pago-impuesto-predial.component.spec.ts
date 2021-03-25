/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditarPagoImpuestoPredialComponent } from './editar-pago-impuesto-predial.component';

describe('EditarPagoImpuestoPredialComponent', () => {
  let component: EditarPagoImpuestoPredialComponent;
  let fixture: ComponentFixture<EditarPagoImpuestoPredialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPagoImpuestoPredialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPagoImpuestoPredialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
