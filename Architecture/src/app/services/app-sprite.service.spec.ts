import { TestBed, inject } from '@angular/core/testing';

import { AppSpriteService } from './app-sprite.service';

describe('AppSpriteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppSpriteService]
    });
  });

  it('should be created', inject([AppSpriteService], (service: AppSpriteService) => {
    expect(service).toBeTruthy();
  }));
});
