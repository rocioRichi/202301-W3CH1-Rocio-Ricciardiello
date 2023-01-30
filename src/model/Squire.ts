import { Character } from './Character';
import { Fighter } from './fighter';
import { King } from './King';
import { Adviser } from './adviser';

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
