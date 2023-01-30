import { Character } from './Character';

export class King extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    public ruledYears: number
  ) {
    super(name, family, age);
  }
  toTell = () => {
    console.log('You are going to die');
  };
}
