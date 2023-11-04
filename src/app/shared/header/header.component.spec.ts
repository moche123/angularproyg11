import { Router } from '@angular/router';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let mockRouter = {
    navigateByUrl: jasmine.createSpy('navigateByUrl')
  }

  beforeEach(() => {
   component = new HeaderComponent(
    <Router>(<unknown>mockRouter),
   )
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test logout', () => {
    component.logout();
    const variable = localStorage.getItem('any');
    //! LOCALSTORAGE SE VACIA, NO DEBERIA HABER NADA AHI
    expect(variable).toBe(null);
    //! SE NAVEGÓ, A LA RUTA AUTH 
    expect(mockRouter.navigateByUrl).toHaveBeenCalled()
  });
});
