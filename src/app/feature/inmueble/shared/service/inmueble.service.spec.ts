/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InmuebleService } from './inmueble.service';

describe('Service: Inmueble', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InmuebleService]
    });
  });

  it('should ...', inject([InmuebleService], (service: InmuebleService) => {
    expect(service).toBeTruthy();
  }));
});
