/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagarImpuestoPredialComponent } from './pagar-impuesto-predial.component';

describe('PagarImpuestoPredialComponent', () => {
  let component: PagarImpuestoPredialComponent;
  let fixture: ComponentFixture<PagarImpuestoPredialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagarImpuestoPredialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarImpuestoPredialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
