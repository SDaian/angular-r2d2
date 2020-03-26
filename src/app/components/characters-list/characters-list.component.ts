import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';
import { Movie } from 'src/app/models/movie';
import { extractId } from 'src/app/utils/utils';
import { Location } from '@angular/common';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  characters: Character[] = [];
  movies: Movie[];
  p = 1;
  filterargs = {};
  eyeColors: any [] = [
    {value: null, viewValue: 'None'},
    {value: 'brown', viewValue: 'Brown'},
    {value: 'blue', viewValue: 'Blue'},
    {value: 'blue-gray', viewValue: 'Blue gray'},
    {value: 'yellow', viewValue: 'Yellow'}
  ];
  genders: any[] = [
    {value: null, viewValue: 'None'},
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'hermaphrodite', viewValue: 'Hermaphrodite'}
  ];
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.getMovies().subscribe((data) => {
      this.movies = data;
    });
    this.dataService.getCharactersByMovie(id).subscribe(resp => {
      resp.characters.map(data => {
        this.dataService.getCharacter(extractId(data)).subscribe((character: Character) => {
          this.characters.push(character);
        });
      });
    });
  }

  getMovieName(movieUrl) {
    return this.movies
      .filter((movie) => movie.url === movieUrl)
      .map((movies) => {
        return movies.title;
      });
  }

  selectGender(gender: string) {
    this.p = 1;
    this.filterargs = {...this.filterargs, gender};
  }

  selectEyeColor(eyeColor: string) {
    this.p = 1;
    this.filterargs = {...this.filterargs, eyeColor};
  }

  selectMovie(movie: string) {
    this.p = 1;
    this.filterargs = {...this.filterargs, movie};
  }

  goBack(): void {
    this.location.back();
  }
}
