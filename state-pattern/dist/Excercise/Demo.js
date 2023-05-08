"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demo = void 0;
const DirectionService_1 = require("./Classes/DirectionService");
const DrivingMode_1 = require("./Classes/DrivingMode");
const demo = () => {
    const directionService = new DirectionService_1.DirectionService();
    directionService.travelMode = new DrivingMode_1.DrivingMode();
    directionService.getDirection();
    directionService.getEta();
};
exports.demo = demo;
