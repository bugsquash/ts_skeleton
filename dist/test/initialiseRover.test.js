"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const assert_1 = require("assert");
const node_test_1 = require("node:test");
const position_1 = require("../src/position");
const marsRover_1 = require("../src/marsRover");
(0, node_test_1.describe)("Initialise Rover", () => {
    (0, node_test_1.it)("Rover is initialised succesfully", () => {
        const rover = new marsRover_1.Rover((0, position_1.position)(2, 4));
        assert_1.strict.deepStrictEqual(rover.position, { x: 2, y: 4 });
    });
});
