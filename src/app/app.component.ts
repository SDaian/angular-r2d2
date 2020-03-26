import { Component } from '@angular/core';
import { DataService } from './services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-r2d2';

  constructor(private dataService: DataService) {
    this.dataService.setMovies();
  }
}
