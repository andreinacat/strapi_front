import { TestBed } from '@angular/core/testing';

import { ChaquetasService } from './chaquetas.service';

describe('ChaquetasService', () => {
  let service: ChaquetasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaquetasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
