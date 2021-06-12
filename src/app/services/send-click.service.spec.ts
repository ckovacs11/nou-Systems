import { TestBed } from '@angular/core/testing';

import { SendClickService } from './send-click.service';

describe('SendClickService', () => {
  let service: SendClickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendClickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
