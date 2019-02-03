import { TestBed, inject } from '@angular/core/testing';

import { AppProgressService } from './app-progress.service';

describe('AppProgressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppProgressService]
    });
  });

  it('should be created', inject([AppProgressService], (service: AppProgressService) => {
    expect(service).toBeTruthy();
  }));
});
