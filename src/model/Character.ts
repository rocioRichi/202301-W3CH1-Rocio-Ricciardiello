export abstract class Character {
  public alive: boolean = true;
  constructor(public name: string, public family: string, public age: number) {}

  die = () => {
    this.alive = false;
  };

  toTell = () => {
    console.log('I don´t know why, but I think I will die soon');
  };
}
