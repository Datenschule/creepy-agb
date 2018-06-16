import { TestBed, inject } from '@angular/core/testing';

import { AgbService } from './agb.service';

describe('AgbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgbService]
    });
  });

  it('should be created', inject([AgbService], (service: AgbService) => {
    expect(service).toBeTruthy();
  }));
});
