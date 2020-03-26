import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { CharactersDetailsComponent } from './components/characters-details/characters-details.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';


const routes: Routes = [
  {path: 'movies', component: MoviesListComponent},
  {path: 'movies/:id/characters', component: CharactersListComponent},
  {path: 'characters/:id', component: CharactersDetailsComponent},
  {path: '', redirectTo: '/movies', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
