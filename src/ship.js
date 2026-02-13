class Ship {
  constructor(length = 1) {
    this.length = length;
    this.health = this.length;
  }

  hit() {
    this.health--;
  }
}

export { Ship };
