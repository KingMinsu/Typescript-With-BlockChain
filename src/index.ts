
class Block{
        public index:number;
        public hash: string;
        public previousHash: string;
        public data: string;
        public timestemp: number;
        constructor(index:number, hash:string, previousHash:string, data:string,timestemp:number){
                this.index = index;
                this.hash = hash;
                this.previousHash = previousHash;
                this.data = data;
                this.timestemp = timestemp;

        }

        

}
const geneisBlock: Block = new Block(0, "202020202","","Hello",123456);

let blockChain: [Block] = [geneisBlock];

console.log(blockChain);
export{};