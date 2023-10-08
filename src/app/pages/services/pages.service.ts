import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class PagesService {

  constructor(
    private _http:HttpClient
  ) { }

  getCharacteres(){
    return this._http.get('https://rickandmortyapi.com/api/character/')
                      .pipe(
                          map( (el:any) => el.results )

                      )
  }

}
