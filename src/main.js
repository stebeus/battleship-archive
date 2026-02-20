import "./assets/style.css";
import { Player } from "./core/player";
import { createBoard, updateBoard } from "./ui";

const main = document.querySelector("main");
const message = document.getElementById("message");

const human = new Player("human");
const robot = new Player("robot");

const humanBoard = createBoard(human);
const robotBoard = createBoard(robot);

main.insertBefore(humanBoard, message);
main.insertBefore(robotBoard, message);

human.gameBoard.place(human.gameBoard.fleet[6], 0, 2, "y");
robot.gameBoard.place(robot.gameBoard.fleet[8], 7, 5, "x");

updateBoard(human);
updateBoard(robot);
