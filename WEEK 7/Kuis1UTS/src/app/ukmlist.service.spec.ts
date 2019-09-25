import { TestBed } from '@angular/core/testing';

import { UkmlistService } from './ukmlist.service';

describe('UkmlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UkmlistService = TestBed.get(UkmlistService);
    expect(service).toBeTruthy();
  });
});
