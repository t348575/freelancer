import { TestBed } from '@angular/core/testing';

import { FetchCurrencyService } from './fetch-currency.service';

describe('FetchCurrencyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchCurrencyService = TestBed.get(FetchCurrencyService);
    expect(service).toBeTruthy();
  });
});
