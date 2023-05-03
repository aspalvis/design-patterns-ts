import { EditorState } from "./EditorState";

export class History {
  states: EditorState[] = [];
  get currentState() {
    return this.states[this.states.length];
  }
}
