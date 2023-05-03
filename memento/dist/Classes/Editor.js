"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = void 0;
const EditorState_1 = require("./EditorState");
const History_1 = require("./History");
class Editor extends History_1.History {
    constructor() {
        super();
        this._content = "";
    }
    get content() {
        return this._content;
    }
    set content(value) {
        this._content = value;
        this.saveState();
    }
    createState() {
        return new EditorState_1.EditorState(this.content);
    }
    undo() {
        var _a, _b;
        this.states.pop();
        this.content = (_b = (_a = this.states.pop()) === null || _a === void 0 ? void 0 : _a.content) !== null && _b !== void 0 ? _b : "";
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
exports.Editor = Editor;
