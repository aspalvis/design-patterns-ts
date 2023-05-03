import { Tool } from "../Interfaces/Tool";

export class Canvas {
  private _currentTool!: Tool;
  get currentTool(): Tool {
    return this._currentTool;
  }
  set currentTool(value: Tool) {
    console.log("Tool Changed");
    this._currentTool = value;
  }
  mouseDown(): void {
    this.currentTool.mouseDown();
  }
  mouseUp(): void {
    this.currentTool.mouseUp();
  }
}
