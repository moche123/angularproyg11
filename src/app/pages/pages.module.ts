import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CharacteresComponent } from './characteres/characteres.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesService } from './services/pages.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CharacteresComponent,
    FavoritesComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    PagesService
  ]
})
export class PagesModule { }
