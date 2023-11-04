import { HttpClient } from '@angular/common/http';
import { PagesService } from './pages.service';
import { of } from 'rxjs';

describe('PagesService', () => {
  let service: PagesService;

  const mockHttp = {
    get: jasmine.createSpy('get'),
    post:jasmine.createSpy('post'),
    delete: jasmine.createSpy('delete').and.returnValue(of({}))
  }

  beforeEach(() => {
    service = new PagesService(
      <HttpClient>(<unknown>mockHttp)
    )
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should test getCharacteres', () => {
    mockHttp.get.and.returnValue(of({
      results: []
    }))
    const obs$ = service.getCharacteres();

    obs$.subscribe(res => {



      expect(res.length).toBe(0);
    })
  });

  it('should test addFavorite', () => {
    mockHttp.post.and.returnValue(of({ok:true}))
    const obs$ = service.addFavorite({});
    obs$.subscribe(finalRes => {
      expect(finalRes).toBe(true);
    })
  });


  it('should test addFavorite CATCHERROR', () => {
    mockHttp.post.and.returnValue(of({error:'Hay error'}))
    const obs$ = service.addFavorite({});
    obs$.subscribe(finalRes => {
      expect(finalRes).toBe('Error no condition achieved');
    })
  });

});
