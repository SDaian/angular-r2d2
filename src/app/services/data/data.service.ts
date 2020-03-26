import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/models/movie';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Character } from 'src/app/models/character';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  movies: BehaviorSubject<Movie[]> = new BehaviorSubject([]);


  selectedCharacter: any;
  baseUrl = 'https://swapi.co/api';
  constructor(private httpClient: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    const movies: Movie[] = [];
    return this.httpClient.get(`${this.baseUrl}/films/`).pipe(
      map((response) => {
        response['results'].map((data) => {
          const chars: any[] = [];
          data.characters.map(characterUrl => {
            this.httpClient.get(characterUrl).subscribe((character => {
              chars.push(character);
            }));
          });
          movies.push(new Movie(data.episode_id, data.director, data.title, chars, data.url, data.opening_crawl));
        });
        return movies;
      })
    );
  }

  setMovies() {
    const movies: Movie[] = [];
    this.httpClient.get(`${this.baseUrl}/films/`).subscribe((response) => {
      response['results'].map((data) => {
        movies.push(new Movie(data.episode_id, data.director, data.title, data.characters, data.url, data.opening_crawl));
      });
      this.movies.next(movies);
      });
  }

  getMovies() {
    return this.movies.asObservable();
  }



  getCharactersByMovie(id: string) {
    let movies: Movie;
    const chars: Character[] = [];
    return this.httpClient.get(`${this.baseUrl}/films/${id}/`).pipe(
      map((response: Movie) => {
        movies = new Movie(response['episode_id'], response.director, response.title, response.characters, response.url, response['opening_crawl']);
        return movies;
      })
    );
  }

  getCharacter(id) {
    return this.httpClient.get(`${this.baseUrl}/people/${id}`).pipe(
      map((data) => {
        return new Character(data['name'], data['homeworld'], data['eye_color'],  data['height'], data['mass'], data['gender'], data['films'] );
      })
    );
  }

  onSelectCharacter(char) {
    this.selectedCharacter = char;
  }

  getSelectedCharacter() {
    return this.selectedCharacter;
  }
}
