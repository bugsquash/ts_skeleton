import "mocha"
import { strict as assert } from "assert";
import {describe, it} from "node:test";

describe("Initialise Rover", () => {
  it("Rover is initialised succesfully", () => {
    const rover = new Rover(position(2, 4));
    assert.deepStrictEqual(rover.position, {x: 2, y: 4});
  })
})

class Rover {
  #position: Position;

  constructor(position: Position) {
    this.#position = position;
  }
  
  get position() {
    return this.#position;
  }
}

type Position = {
  x: number
  y: number
}

function position(x: number, y: number) {
  return {
    x,
    y
  }
}

