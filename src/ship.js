class Ship {
  constructor(length = 1) {
    this.length = length;
    this.health = this.length;
  }

  hit() {
    this.health--;
  }

  isWrecked() {
    return this.health === 0;
  }
}

export { Ship };
