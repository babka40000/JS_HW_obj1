import Character, {
  Bowman, Swordsman, Magician, Undead, Zombie, Daemon,
} from '../index';

test('name lenght', () => {
  expect(() => new Character('Q', 'Bowman', 20, 20)).toThrowError('Имя должно быть от 2 до 10 символов');
  expect(() => new Character('VeryLongName', 'Bowman', 20, 20)).toThrowError('Имя должно быть от 2 до 10 символов');
});

test('unknown character', () => {
  expect(() => new Character('Legolaz', 'Plotnik', 20, 20)).toThrowError('Неизвестный персонаж');
});

test('check skills', () => {
  const hero = new Character('name', 'Bowman', 100, 200);
  expect(hero.attack).toBe(100);
  expect(hero.defence).toBe(200);
});

test('check class Bowman', () => {
  const result = new Bowman('name');
  expect(result).toBeInstanceOf(Character);
});

test('check class Swordsman', () => {
  const result = new Swordsman('name');
  expect(result).toBeInstanceOf(Character);
});

test('check class Magician', () => {
  const result = new Magician('name');
  expect(result).toBeInstanceOf(Character);
});

test('check class Undead', () => {
  const result = new Undead('name');
  expect(result).toBeInstanceOf(Character);
});

test('check class Zombie', () => {
  const result = new Zombie('name');
  expect(result).toBeInstanceOf(Character);
});

test('check class Daemon', () => {
  const result = new Daemon('name');
  expect(result).toBeInstanceOf(Character);
});
