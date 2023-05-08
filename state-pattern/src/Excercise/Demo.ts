import { DirectionService } from "./Classes/DirectionService";
import { DrivingMode } from "./Classes/DrivingMode";
export const demo = () => {
  const directionService = new DirectionService();
  directionService.travelMode = new DrivingMode();
  directionService.getDirection();
  directionService.getEta();
};
