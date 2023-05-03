import { Tool } from "../Interfaces/Tool";

export class SelectionTool implements Tool {
  mouseDown(): void {
    console.log("Selection icon");
  }
  mouseUp(): void {
    console.log("Draw a dashed rectangle");
  }
}
