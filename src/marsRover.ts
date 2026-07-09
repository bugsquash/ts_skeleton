import { Position } from "./position";

export class Rover {
  #position: Position;
  #direction: string;

  constructor(position: Position, direction: string) {
    this.#position = position;
    this.#direction = direction;
  }

  get position() {
    return this.#position;
  }

  get direction() {
    return this.#direction;
  }
}
