"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = void 0;
class History {
    constructor() {
        this.states = [];
    }
    get currentState() {
        return this.states[this.states.length];
    }
}
exports.History = History;
