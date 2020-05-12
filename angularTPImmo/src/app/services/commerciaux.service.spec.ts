import { TestBed } from '@angular/core/testing';

import { CommerciauxService } from './commerciaux.service';

describe('CommerciauxService', () => {
  let service: CommerciauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommerciauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
