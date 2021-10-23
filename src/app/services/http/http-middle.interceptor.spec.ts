import { TestBed } from '@angular/core/testing';

import { HttpMiddleInterceptor } from './http-middle.interceptor';

describe('HttpMiddleInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpMiddleInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpMiddleInterceptor = TestBed.inject(HttpMiddleInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
