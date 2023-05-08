import { ITravelMode } from "../Interfaces/TravelMode";

export class WalkingMode implements ITravelMode {
  getDirection(): void {
    console.log("Calculating Direction('Walking')");
  }
  getEta(): void {
    console.log("Calculating ETA('Walking')");
  }
}
