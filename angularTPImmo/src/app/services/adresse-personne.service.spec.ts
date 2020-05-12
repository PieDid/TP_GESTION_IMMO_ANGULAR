import { TestBed } from '@angular/core/testing';

import { AdressePersonneService } from './adresse-personne.service';

describe('AdressePersonneService', () => {
  let service: AdressePersonneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdressePersonneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
