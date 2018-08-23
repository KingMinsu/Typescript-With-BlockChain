import * as CryptoJS from "crypto-js";


class Block{
        public index:number;
        public hash: string;
        public previousHash: string;
        public data: string;
        public timestemp: number;

        static calculateBlockHash = (index:number
                ,previousHash:string
                ,data:string
                ,timestemp:number
        ): string => CryptoJS.SHA256(index 
                + previousHash 
                + timestemp 
                + data).toString();
        
        static validateStructure = (aBlock:Block) : boolean=> 
                typeof aBlock.index === "number" && 
                typeof aBlock.hash ==="string" && 
                typeof aBlock.previousHash==="string" &&
                typeof aBlock.data ==="string" &&
                typeof aBlock.timestemp==="number";
               
        

        constructor(index:number, hash:string, previousHash:string, data:string,timestemp:number){
                this.index = index;
                this.hash = hash;
                this.previousHash = previousHash;
                this.data = data;
                this.timestemp = timestemp;

        }

        

}
const geneisBlock: Block = new Block(0, "202020202","","Hello",123456);

let blockChain: Block[] = [geneisBlock];


//블록 불러오기
const getBlockchain = () : Block[] =>blockChain;

//마지막 블록 가지고오기
const getLatestBlock = () :Block => blockChain[blockChain.length-1];

//시간구하기
const getNewTimeStemp = () :number => Math.round(new Date().getDate()/1000);


//새로운 블록 만들기
const createNewBlock = (data:string):Block =>{
        const previousBlock: Block = getLatestBlock();
        const newIndex : number = previousBlock.index +1;
        const newTimestemp : number = getNewTimeStemp();
        const newHash : string = Block.calculateBlockHash(newIndex
                ,previousBlock.hash
                ,data
                ,newTimestemp
        );
        const newBlock : Block = new Block(newIndex
                ,newHash
                ,previousBlock.hash
                ,data
                ,newTimestemp
        );
        addBlock(newBlock);
        return newBlock;
};

const getHashForBlock = (aBlock:Block) :string =>Block.calculateBlockHash(aBlock.index,aBlock.previousHash, aBlock.data,aBlock.timestemp);

//제공되는 블록이 유효한지.. 유효성검사
const isBlockValid= (candidateBlock : Block, previousBlock:Block) : boolean =>{
        if(!Block.validateStructure(candidateBlock)){
                return false;
        } else if(previousBlock.index+1 !== candidateBlock.index){
                return false;
        } else if(previousBlock.hash !== candidateBlock.previousHash){
                return false;
        } else if(getHashForBlock(candidateBlock) !== candidateBlock.hash){
                return false
        }
        return true;
}

const addBlock = (candidateBlock: Block) : void =>{
        if(isBlockValid(candidateBlock, getLatestBlock())){
                blockChain.push(candidateBlock);
        }
};

createNewBlock("second block");
createNewBlock("third block");
createNewBlock("forth block");

console.log(blockChain);

export{};