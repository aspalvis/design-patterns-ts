import { Tool } from "./Tool";

export class Canvas {
  private _currentTool!: Tool;
  public get currentTool(): Tool {
    return this._currentTool;
  }
  public set currentTool(value: Tool) {
    this._currentTool = value;
  }
  mouseDown(): void {
    this.currentTool.mouseDown();
  }
  mouseUp(): void {
    this.currentTool.mouseUp();
  }
}
