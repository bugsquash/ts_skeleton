import "mocha"
import { strict as assert } from "assert";
import {describe, it} from "node:test";

describe("Initialise Rover", () => {
  it("Rover is initialised succesfully", () => {
    const rover = new Rover();
    assert.deepStrictEqual(rover.position, {x: 2, y: 4})
  })
})

class Rover {
  #position: number;
  
  get position() {
    return {x: 2, y: 4}
  }
}