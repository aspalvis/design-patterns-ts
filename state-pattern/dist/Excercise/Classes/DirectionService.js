"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectionService = void 0;
class DirectionService {
    get travelMode() {
        return this._travelMode;
    }
    set travelMode(value) {
        this._travelMode = value;
    }
    getDirection() {
        this._travelMode.getDirection();
    }
    getEta() {
        this._travelMode.getEta();
    }
}
exports.DirectionService = DirectionService;
