import { createGrid } from "./grid";

function createBoard({ name, gameBoard: { grid } }) {
  const template = document.getElementById("board-template");
  const content = template.content.cloneNode(true);

  const board = content.querySelector(".board");
  const playerName = content.querySelector(".board__player-name");
  const playerGrid = content.querySelector(".grid");

  board.dataset.player = name;
  playerName.textContent = name;

  createGrid(playerGrid, grid);

  return content;
}

export { createBoard };
