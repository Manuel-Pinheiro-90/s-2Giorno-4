import { TestBed } from '@angular/core/testing';

import { MadmaxInterceptor } from './madmax.interceptor';

describe('MadmaxInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MadmaxInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MadmaxInterceptor = TestBed.inject(MadmaxInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
