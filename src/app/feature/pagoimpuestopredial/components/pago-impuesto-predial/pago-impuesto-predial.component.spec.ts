/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagoImpuestoPredialComponent } from './pago-impuesto-predial.component';

describe('PagoImpuestoPredialComponent', () => {
  let component: PagoImpuestoPredialComponent;
  let fixture: ComponentFixture<PagoImpuestoPredialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoImpuestoPredialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoImpuestoPredialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
