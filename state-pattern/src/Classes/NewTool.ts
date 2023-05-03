import { Tool } from "../Interfaces/Tool";

export class SomeNewTool implements Tool {
  mouseDown(): void {
    console.log("Some icon");
  }
  mouseUp(): void {
    console.log("Some action");
  }
}
