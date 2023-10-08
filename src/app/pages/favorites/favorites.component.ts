import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PagesService } from '../services/pages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  public obsCharacteres$ = new Observable<any>();

  constructor(
    private _pagesService: PagesService,
    private _router: Router,
  ){}

  ngOnInit(){
    this.obsCharacteres$ = this._pagesService.getCharacteres();
  }

  deleteFavorite(character:any){
    this._router.navigateByUrl('/pages/characteres')
  }
}
