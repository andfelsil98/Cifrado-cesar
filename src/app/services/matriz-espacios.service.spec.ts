import { TestBed } from '@angular/core/testing';

import { MatrizEspaciosService } from './matriz-espacios.service';

describe('MatrizEspaciosService', () => {
  let service: MatrizEspaciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatrizEspaciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
