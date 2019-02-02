import { TestBed, inject } from '@angular/core/testing';

import { AppWidgetManagerService } from './app-widget-manager.service';

describe('AppWidgetManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppWidgetManagerService]
    });
  });

  it('should be created', inject([AppWidgetManagerService], (service: AppWidgetManagerService) => {
    expect(service).toBeTruthy();
  }));
});
