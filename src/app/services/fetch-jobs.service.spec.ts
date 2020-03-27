import { TestBed } from '@angular/core/testing';

import { FetchJobsService } from './fetch-jobs.service';

describe('FetchJobsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchJobsService = TestBed.get(FetchJobsService);
    expect(service).toBeTruthy();
  });
});
