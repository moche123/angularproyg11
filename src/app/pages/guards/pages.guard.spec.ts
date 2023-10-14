import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { pagesGuard } from './pages.guard';

describe('pagesGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => pagesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
