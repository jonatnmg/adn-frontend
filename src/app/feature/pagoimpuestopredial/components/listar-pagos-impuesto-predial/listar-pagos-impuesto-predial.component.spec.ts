/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListarPagosImpuestoPredialComponent } from './listar-pagos-impuesto-predial.component';

describe('ListarPagosImpuestoPredialComponent', () => {
  let component: ListarPagosImpuestoPredialComponent;
  let fixture: ComponentFixture<ListarPagosImpuestoPredialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPagosImpuestoPredialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPagosImpuestoPredialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
