import { fakeAsync, flush } from '@angular/core/testing';
import { PagesGuard } from './pages.guard';
import { AuthService } from 'src/app/auth/services/auth.service';

const mockAuthService = {
  isLoggedIn: jasmine.createSpy('isLoggedIn'),
  returnToLogin: jasmine.createSpy('returnToLogin')
}

describe('PagesGuard', () => {
  let guard: PagesGuard;


  beforeEach(() => {
    guard = new PagesGuard(
    
      <AuthService>(<unknown>mockAuthService),

    )
    
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  })

  it('should allow access when user is logged in', fakeAsync(() => {
   
    mockAuthService.isLoggedIn.and.returnValue(true)
    const result = guard.canActivate();
    flush()
    expect(result).toBe(true);
    expect(mockAuthService.isLoggedIn).toHaveBeenCalled();
    expect(mockAuthService.returnToLogin).not.toHaveBeenCalled();
  }));


  
  it('should return to login if it is failed', () => {
   
    mockAuthService.isLoggedIn.and.returnValue(false)
    const result = guard.canActivate();
    expect(result).toBe(false);
    expect(mockAuthService.isLoggedIn).toHaveBeenCalled();
    expect(mockAuthService.returnToLogin).toHaveBeenCalled();
  });

});