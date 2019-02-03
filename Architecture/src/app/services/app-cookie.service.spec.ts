import { TestBed, inject } from '@angular/core/testing';

import { AppCookieService } from './app-cookie.service';

describe('AppCookieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppCookieService]
    });
  });

  it('should be created', inject([AppCookieService], (service: AppCookieService) => {
    expect(service).toBeTruthy();
  }));
});
