class Ship {
  constructor(length = 1) {
    this.length = length;
    this.health = this.length;
  }

  isWrecked() {
    return this.health === 0;
  }

  hit() {
    if (this.isWrecked()) return this.health;
    return --this.health;
  }
}

export { Ship };
