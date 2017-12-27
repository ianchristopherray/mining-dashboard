import { TestBed, inject } from '@angular/core/testing';

import { PoolConnectionService } from './pool-connection.service';

describe('PoolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoolConnectionService]
    });
  });

  it('should be created', inject([PoolConnectionService], (service: PoolConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
