import { TestBed } from '@angular/core/testing';

import { FetchSearchResultsService } from './fetch-search-results.service';

describe('FetchSearchResultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchSearchResultsService = TestBed.get(FetchSearchResultsService);
    expect(service).toBeTruthy();
  });
});
