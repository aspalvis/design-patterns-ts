import { EditorState } from "./EditorState";
import { History } from "./History";

export class Editor extends History {
  constructor() {
    super();
  }
  private _content = "";
  public get content() {
    return this._content;
  }
  public set content(value) {
    this._content = value;
    this.saveState();
  }

  createState() {
    return new EditorState(this.content);
  }
  undo() {
    this.states.pop();
    this.content = this.states.pop()?.content ?? "";
  }

  saveState() {
    this.states.push(this.createState());
  }
  start() {
    this.content = "1";
    this.content = "2";
    this.content = "3";
    this.undo();
    this.content = "4";

    console.log(this.content);
    console.log(this.states);
  }
}
