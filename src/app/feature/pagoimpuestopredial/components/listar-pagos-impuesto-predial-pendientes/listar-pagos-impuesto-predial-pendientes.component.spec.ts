/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListarPagosImpuestoPredialPendientesComponent } from './listar-pagos-impuesto-predial-pendientes.component';

describe('ListarPagosImpuestoPredialPendientesComponent', () => {
  let component: ListarPagosImpuestoPredialPendientesComponent;
  let fixture: ComponentFixture<ListarPagosImpuestoPredialPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPagosImpuestoPredialPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPagosImpuestoPredialPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
