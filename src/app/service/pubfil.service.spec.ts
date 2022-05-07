import { TestBed } from '@angular/core/testing';

import { PubfilService } from './pubfil.service';

describe('PubfilService', () => {
  let service: PubfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PubfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
