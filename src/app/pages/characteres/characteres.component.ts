import { Component, OnInit } from '@angular/core';
import { PagesService } from '../services/pages.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characteres',
  templateUrl: './characteres.component.html',
  styleUrls: ['./characteres.component.scss']
})
export class CharacteresComponent implements OnInit {

  public obsCharacteres$ = new Observable<any>();

  constructor(
    private _pagesService: PagesService,
    private _router: Router,
  ){}

  ngOnInit(){
    this.obsCharacteres$ = this._pagesService.getCharacteres();
  }

  addFavorite(character:any){
    const body = {
      IdCharacter: character.id,
      IdUser: localStorage.getItem('userId'),
      nameCharacter: character.name,
      caracterUrlImagen: character.image,
      token: localStorage.getItem('token')
    }

    this._pagesService.addFavorite(body).subscribe(ok => {

      if(ok === true ){
        this._router.navigateByUrl('/pages/favorites');
      }
    })
  }

}
