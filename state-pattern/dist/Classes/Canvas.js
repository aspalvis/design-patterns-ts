"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
class Canvas {
    get currentTool() {
        return this._currentTool;
    }
    set currentTool(value) {
        this._currentTool = value;
    }
    mouseDown() {
        this.currentTool.mouseDown();
    }
    mouseUp() {
        this.currentTool.mouseUp();
    }
}
exports.Canvas = Canvas;
