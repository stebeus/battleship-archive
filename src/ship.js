class Ship {
  constructor(length = 1) {
    this.length = length;
    this.health = this.length;
  }

  isWrecked() {
    return this.health === 0;
  }

  hit() {
    return --this.health;
  }
}

export { Ship };
