import { ITravelMode } from "../Interfaces/TravelMode";

export class FlyingMode implements ITravelMode {
  getDirection(): void {
    console.log("Calculating Direction('Flying')");
  }
  getEta(): void {
    console.log("Calculating ETA('Flying')");
  }
}
