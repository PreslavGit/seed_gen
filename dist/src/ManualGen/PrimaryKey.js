"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimaryKeyGen = void 0;
class PrimaryKeyGen {
    constructor() {
        this.counter = 0;
    }
    get() { return ++this.counter; }
    peek() { return this.counter; }
}
exports.PrimaryKeyGen = PrimaryKeyGen;
