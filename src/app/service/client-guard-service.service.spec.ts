import { TestBed } from '@angular/core/testing';

import { ClientGuardServiceService } from './client-guard-service.service';

describe('ClientGuardServiceService', () => {
  let service: ClientGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
