import "./assets/style.css";
import { createBoard } from "./components/board";
import { Player } from "./core/player";

const main = document.querySelector("main");

const human = new Player("human");
const robot = new Player("robot");

const humanBoard = createBoard(human);
const robotBoard = createBoard(robot);

main.append(humanBoard, robotBoard);
