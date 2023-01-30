import { Character } from './Character';

export class Fighter extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    public weapon: string,
    public skill: number
  ) {
    super(name, family, age);
  }
  toTell = () => {
    console.log('First I punch and then I ask');
  };
}
