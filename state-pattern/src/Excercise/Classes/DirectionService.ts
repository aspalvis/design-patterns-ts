import { ITravelMode } from "../Interfaces/TravelMode";

export class DirectionService implements ITravelMode {
  private _travelMode!: ITravelMode;
  public get travelMode(): ITravelMode {
    return this._travelMode;
  }
  public set travelMode(value: ITravelMode) {
    this._travelMode = value;
  }
  getDirection(): void {
    this._travelMode.getDirection();
  }
  getEta(): void {
    this._travelMode.getEta();
  }
}
