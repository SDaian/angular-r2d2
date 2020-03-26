import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {
  character;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.character = this.dataService.getSelectedCharacter();
    if(!this.character) {
      this.route.params.subscribe(params => {
        const id = Number(params.id);
        this.dataService
          .getCharacter(id)
          .subscribe(char => this.character = char);
      });
    }
  }

}
