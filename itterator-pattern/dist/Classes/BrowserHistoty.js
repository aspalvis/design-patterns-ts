"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserHistory = void 0;
class BrowserHistory {
    constructor() {
        this.urls = new Array();
    }
    length() {
        return this.urls.length;
    }
    push(url) {
        this.urls.push(url);
    }
    pop() {
        var _a;
        return (_a = this.urls.pop()) !== null && _a !== void 0 ? _a : "";
    }
    createIterator() {
        return new BrowserHistory.ListIterator(this);
    }
}
BrowserHistory.ListIterator = class {
    constructor(_history) {
        this.index = 0;
        this._history = _history;
    }
    hasNext() {
        return this.index <= this._history.urls.length - 1;
    }
    current() {
        return this._history.urls[this.index];
    }
    next() {
        this.index++;
    }
};
exports.BrowserHistory = BrowserHistory;
//# sourceMappingURL=BrowserHistoty.js.map