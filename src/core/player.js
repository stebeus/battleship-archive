import { GameBoard } from "./game-board";

class Player {
  constructor(name) {
    this.name = name;
    this.gameBoard = new GameBoard();
  }
}

const human = new Player("human");
const robot = new Player("robot");

export { Player, human, robot };
