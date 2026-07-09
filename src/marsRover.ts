export class Rover {
  #position: Position;

  constructor(position: Position) {
    this.#position = position;
  }

  get position() {
    return this.#position;
  }
}
type Position = {
  x: number;
  y: number;
};
