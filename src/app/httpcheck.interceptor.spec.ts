import { TestBed } from '@angular/core/testing';

import { HttpcheckInterceptor } from './httpcheck.interceptor';

describe('HttpcheckInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpcheckInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpcheckInterceptor = TestBed.inject(HttpcheckInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
