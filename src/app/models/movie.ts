export class Movie {
  episodeId: number;
  director: string;
  title: string;
  openingCrawl: string;
  characters: any[];
  url: string;

  constructor(episodeId: number, director: string, title: string, chars: any[], url: string, openingCrawl: string) {
    this.episodeId = episodeId;
    this.director = director;
    this.title = title;
    this.characters = chars;
    this.url = url;
    this.openingCrawl = openingCrawl;
  }
}
