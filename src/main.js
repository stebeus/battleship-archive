import "./assets/style.css";
import { createBoard } from "./components/board";
import { Player } from "./core/player";

const main = document.querySelector("main");
const message = document.getElementById("message");

const human = new Player("human");
const robot = new Player("robot");

const humanBoard = createBoard(human);
const robotBoard = createBoard(robot);

main.insertBefore(humanBoard, message);
main.insertBefore(robotBoard, message);
