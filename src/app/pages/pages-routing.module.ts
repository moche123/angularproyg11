import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacteresComponent } from './characteres/characteres.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PagesComponent } from './pages.component';
import { PagesGuard } from './guards/pages.guard';

const routes: Routes = [
  {
    path:'',
    component: PagesComponent,
    children: [
      {
        path: 'characteres',
        component: CharacteresComponent,
        canActivate: [PagesGuard]
      },
      {
        path: 'favorites',
        component: FavoritesComponent,
        canActivate: [PagesGuard]
      },
      {
        path: '',
        redirectTo: 'characteres',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'characteres',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
