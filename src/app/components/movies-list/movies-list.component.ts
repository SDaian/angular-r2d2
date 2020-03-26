import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Movie } from 'src/app/models/movie';
import { extractId, extractMovieId } from 'src/app/utils/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];
  openingCrawl: string;
  openedCrawl: boolean = false;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }

  goToCharacters(movieUrl) {
    const id = extractMovieId(movieUrl);
    this.router.navigate([`/movies/${id}/characters`]);
  }

  showCrawl(openingCrawl: string) {
    console.log(openingCrawl);
    this.openedCrawl = true;
    this.openingCrawl = openingCrawl;
  }
}
