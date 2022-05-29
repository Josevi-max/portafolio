import { TestBed } from '@angular/core/testing';

import { SpecialColorService } from './special-color.service';

describe('SpecialColorService', () => {
  let service: SpecialColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
