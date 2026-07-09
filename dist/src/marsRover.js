"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rover = void 0;
class Rover {
    #position;
    constructor(position) {
        this.#position = position;
    }
    get position() {
        return this.#position;
    }
}
exports.Rover = Rover;
