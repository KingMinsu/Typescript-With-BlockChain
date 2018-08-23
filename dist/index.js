"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestemp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestemp = timestemp;
    }
}
Block.calculateBlockHash = (index, previousHash, data, timestemp) => CryptoJS.SHA256(index
    + previousHash
    + timestemp
    + data).toString();
Block.validateStructure = (aBlock) => typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.data === "string" &&
    typeof aBlock.timestemp === "number";
const geneisBlock = new Block(0, "202020202", "", "Hello", 123456);
let blockChain = [geneisBlock];
//블록 불러오기
const getBlockchain = () => blockChain;
//마지막 블록 가지고오기
const getLatestBlock = () => blockChain[blockChain.length - 1];
//시간구하기
const getNewTimeStemp = () => Math.round(new Date().getDate() / 1000);
//새로운 블록 만들기
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestemp = getNewTimeStemp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, data, newTimestemp);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestemp);
    addBlock(newBlock);
    return newBlock;
};
const getHashForBlock = (aBlock) => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.data, aBlock.timestemp);
//제공되는 블록이 유효한지.. 유효성검사
const isBlockValid = (candidateBlock, previousBlock) => {
    if (!Block.validateStructure(candidateBlock)) {
        return false;
    }
    else if (previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    }
    else if (previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    }
    else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    }
    return true;
};
const addBlock = (candidateBlock) => {
    if (isBlockValid(candidateBlock, getLatestBlock())) {
        blockChain.push(candidateBlock);
    }
};
createNewBlock("second block");
createNewBlock("third block");
createNewBlock("forth block");
console.log(blockChain);
//# sourceMappingURL=index.js.map