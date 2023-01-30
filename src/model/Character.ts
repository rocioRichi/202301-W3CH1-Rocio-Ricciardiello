export abstract class Character {
  public alive: boolean = true;
  constructor(public name: string, public family: string, public age: number) {}

  die = () => {
    this.alive = false;
  };

  toTell = () => {};
}
