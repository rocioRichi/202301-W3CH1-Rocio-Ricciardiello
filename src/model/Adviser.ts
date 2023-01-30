import { Character } from './Character';
import { Fighter } from './Fighter';
import { King } from './King';
import { Squire } from './Squire';

export class Adviser extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    public chief: King | Adviser | Fighter | Squire
  ) {
    super(name, family, age);
  }
  toTell = () => {
    console.log('I don´t know why, but I think I will die soon');
  };
}
