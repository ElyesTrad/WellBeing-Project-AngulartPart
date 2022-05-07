import { TestBed } from '@angular/core/testing';

import { CommentfilService } from './commentfil.service';

describe('CommentfilService', () => {
  let service: CommentfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
