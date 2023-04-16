export default class Character {
  constructor(name, type, attack, defence) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть от 2 до 10 символов');
    }

    this.level = 1;
    this.health = 100;
    this.type = type;

    this.attack = attack;
    this.defence = defence;

    const types = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];

    if (!types.includes(type)) {
      throw new Error('Неизвестный персонаж');
    }
  }
}

export class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman', 25, 25);
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman', 40, 10);
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician', 10, 40);
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead', 25, 25);
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie', 40, 10);
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon', 10, 40);
  }
}
