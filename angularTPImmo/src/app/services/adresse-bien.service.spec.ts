import { TestBed } from '@angular/core/testing';

import { AdresseBienService } from './adresse-bien.service';

describe('AdresseBienService', () => {
  let service: AdresseBienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdresseBienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
