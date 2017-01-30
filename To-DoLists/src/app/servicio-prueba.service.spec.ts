/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicioPruebaService } from './servicio-prueba.service';

describe('ServicioPruebaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioPruebaService]
    });
  });

  it('should ...', inject([ServicioPruebaService], (service: ServicioPruebaService) => {
    expect(service).toBeTruthy();
  }));
});
