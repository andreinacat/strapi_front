import { TestBed } from '@angular/core/testing';

import { TallaServService } from './talla-serv.service';

describe('TallaServService', () => {
  let service: TallaServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TallaServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
