import "mocha"
import { strict as assert } from "assert";
import {describe, it} from "node:test";

import { position } from "../src/position";
import { Rover } from "../src/Rover";

describe("Initialise Rover", () => {
  it("Rover is initialised succesfully", () => {
    const rover = new Rover(position(2, 4));
    assert.deepStrictEqual(rover.position, {x: 2, y: 4});
  })
})


