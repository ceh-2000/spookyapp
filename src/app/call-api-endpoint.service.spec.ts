import { TestBed } from '@angular/core/testing';

import { CallApiEndpointService } from './call-api-endpoint.service';

describe('CallApiEndpointService', () => {
  let service: CallApiEndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallApiEndpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
