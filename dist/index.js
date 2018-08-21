"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestemp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestemp = timestemp;
    }
}
const geneisBlock = new Block(0, "202020202", "", "Hello", 123456);
let blockChain = [geneisBlock];
console.log(blockChain);
//# sourceMappingURL=index.js.map