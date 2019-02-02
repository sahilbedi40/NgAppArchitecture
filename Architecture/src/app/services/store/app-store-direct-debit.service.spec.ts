import { TestBed, inject } from '@angular/core/testing';

import { AppStoreDirectDebitService } from './app-store-direct-debit.service';

describe('AppStoreDirectDebitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppStoreDirectDebitService]
    });
  });

  it('should be created', inject([AppStoreDirectDebitService], (service: AppStoreDirectDebitService) => {
    expect(service).toBeTruthy();
  }));
});
