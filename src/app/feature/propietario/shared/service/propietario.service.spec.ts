/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PropietarioService } from './propietario.service';

describe('Service: Propietario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropietarioService]
    });
  });

  it('should ...', inject([PropietarioService], (service: PropietarioService) => {
    expect(service).toBeTruthy();
  }));
});
