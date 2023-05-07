import { IIterator } from "../Interfaces/Iterator";

export class BrowserHistory {
  private urls: string[] = new Array();
  length() {
    return this.urls.length;
  }
  push(url: string) {
    this.urls.push(url);
  }
  pop(): string {
    return this.urls.pop() ?? "";
  }
  createIterator(): IIterator {
    return new BrowserHistory.ListIterator(this);
  }
  static ListIterator = class implements IIterator {
    private _history;
    private index = 0;

    constructor(_history: BrowserHistory) {
      this._history = _history;
    }
    hasNext(): boolean {
      return this.index <= this._history.urls.length - 1;
    }
    current(): string {
      return this._history.urls[this.index];
    }
    next(): void {
      this.index++;
    }
  };
}
