import { BrushTool } from "./Classes/BrushTool";
import { Canvas } from "./Classes/Canvas";
import { SomeNewTool } from "./Classes/NewTool";
import { demo } from "./Excercise/Demo";

const canvas = new Canvas();
canvas.currentTool = new BrushTool();
canvas.mouseDown();
canvas.mouseUp();
canvas.currentTool = new SomeNewTool();
canvas.mouseDown();
canvas.mouseUp();
console.log("\nExercise:");
demo();
