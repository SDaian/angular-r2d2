export class Character {
  name: string;
  homeworld: string;
  eyeColor: string;
  height: string;
  mass: string;
  gender: string;
  films: string[];

  constructor(name: string, homeworld: string, eyeColor: string, height: string, mass: string, gender: string, films: string[]) {
    this.name = name;
    this.homeworld = homeworld;
    this.eyeColor = eyeColor;
    this.height = height;
    this.mass = mass;
    this.gender = gender;
    this.films = films;
  }
}
