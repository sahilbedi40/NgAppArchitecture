import { TestBed, inject } from '@angular/core/testing';

import { AppStoreCacheService } from './app-store-cache.service';

describe('AppStoreCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppStoreCacheService]
    });
  });

  it('should be created', inject([AppStoreCacheService], (service: AppStoreCacheService) => {
    expect(service).toBeTruthy();
  }));
});
