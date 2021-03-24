/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PagoImpuestoPredialService } from './PagoImpuestoPredial.service';

describe('Service: PagoImpuestoPredial', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagoImpuestoPredialService]
    });
  });

  it('should ...', inject([PagoImpuestoPredialService], (service: PagoImpuestoPredialService) => {
    expect(service).toBeTruthy();
  }));
});
