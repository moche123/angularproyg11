import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class PagesGuard {
  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    // alert('POR FAVOR LOGUEARSE');
    this.authService.returnToLogin();
    return false;
  }
}