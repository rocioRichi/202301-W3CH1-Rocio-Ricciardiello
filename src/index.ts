import { Card } from './components/card/card';
import { Page } from './components/page/page';
import { gang } from './characters';

const page = new Page('#root');

gang.forEach((character) => {
  const card = new Card('.characters-list', character);
});
