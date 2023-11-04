import { Router } from '@angular/router';
import { PagesService } from '../services/pages.service';
import { FavoritesComponent } from './favorites.component';
import { of } from 'rxjs';
import { fakeAsync, flush } from '@angular/core/testing';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;

  let mockRouter = {
    navigateByUrl: jasmine.createSpy('navigateByUrl')
  }


  let mockPagesServices = {
    getCharacteres: jasmine.createSpy('getCharacteres').and.returnValue(of({})),
    addFavorite: jasmine.createSpy('addFavorite').and.returnValue(of({})),
    getFavorites: jasmine.createSpy('getFavorites').and.returnValue(of([])),
    deleteFavorite: jasmine.createSpy('deleteFavorite').and.returnValue(of({}))
  }

  beforeEach(() => {
    component = new FavoritesComponent(
      <PagesService>(<unknown>mockPagesServices),
      <Router>(<unknown>mockRouter),
    )
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test ngOnInit', fakeAsync(() => {
    component.ngOnInit();
    flush();
    component.favorites$.subscribe(res => {
      expect(res).toBeDefined();
    })
  }));


  it('should test deleteFavorite', fakeAsync(() => {
    component.deleteFavorite({
      IdCharacter: 'asdas',
      IdUser: 'asdas',
    });
    flush();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/pages/characteres');
  }));

});
