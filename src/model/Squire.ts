import { Character } from './Character';
import { Fighter } from './Fighter';

export class Squire extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    public Lord: Fighter,
    public loyalty: number
  ) {
    super(name, family, age);
  }
  toTell = () => {
    console.log('I am a loser');
  };
}
