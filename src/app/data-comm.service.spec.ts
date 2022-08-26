import { TestBed } from '@angular/core/testing';

import { DataCommService } from './data-comm.service';

describe('DataCommService', () => {
  let service: DataCommService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCommService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
