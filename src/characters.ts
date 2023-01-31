import { Adviser } from './model/Adviser';
import { Character } from './model/Character';
import { Fighter } from './model/Fighter';
import { King } from './model/King';
import { Squire } from './model/Squire';

const yofri: King = new King('Yofri', 'Fernandez', 14, 3);
const jaime: Fighter = new Fighter('Jaime', 'Fernandez', 50, 'espumadera', 3);
const daniela: Fighter = new Fighter(
  'Daniela',
  'Gonzalez',
  30,
  'encendedor',
  6
);
const tiburcio: Adviser = new Adviser('Tiburcio', 'Fernandez', 50, daniela);
const bronca: Squire = new Squire('Bronca', '', 34, jaime, 2);

export const gang: Character[] = [yofri, jaime, daniela, tiburcio, bronca];
