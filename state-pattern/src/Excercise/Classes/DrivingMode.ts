import { ITravelMode } from "../Interfaces/TravelMode";

export class DrivingMode implements ITravelMode {
  getDirection(): void {
    console.log("Calculating Direction('Driving')");
  }
  getEta(): void {
    console.log("Calculating ETA('Driving')");
  }
}
