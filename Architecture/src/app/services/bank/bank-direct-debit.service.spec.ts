import { TestBed, inject } from '@angular/core/testing';

import { BankDirectDebitService } from './bank-direct-debit.service';

describe('BankDirectDebitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankDirectDebitService]
    });
  });

  it('should be created', inject([BankDirectDebitService], (service: BankDirectDebitService) => {
    expect(service).toBeTruthy();
  }));
});
