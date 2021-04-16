/* Proof-of-Work Blockchain
    creates blockchain with simple proof-of-work algorithm
*/
const sha256 = require('crypto-js/sha256');


class Transaction {
 
    constructor (fromAddress, toAddress, amount ){
           this.fromAddress = fromAddress;
           this.toAddress = toAddress;
           this.amount = amount;
     
       }//end constructor
     
    }//end Transaction

class Block {
    constructor (timestamp, transactions, previousHash ='') {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.createHash();
        //add nonce for mining
        this.nonce = 0;
        console.log("Internal class Block: ", transactions )
    }
    //getPreviousHash
  
    //getNewHash
    createHash() {
        return sha256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
        //return CryptoJS.SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)+ this.nonce ).toString()
    }//end createHash
  
    //Set up Proof of Work
    mineBlock(difficulty ) {
        console.log("Whistle while you work! "); 
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.createHash();
        }//end while
        console.log("New Block has been mined: ", this.hash );
    }//end mineBlock
  
 }//end Block
  
 export default class Blockchain {
    constructor () {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 0; // cooper s - setting this any however makes TOO difficult
        this.pendingTransactions = [];
        this.miningReward = 100;
    }
    //create genesis block
    createGenesisBlock () {
        const time = new Date().getTime();
        return new Block(time ,'Genesis Block' , '0' );
    }
    //get last block
    getLatestBlock() {
        //console.log("getLatestBlock: ", this.chain[this.chain.length-1] );
        return this.chain[this.chain.length - 1];
    }

    //mine transactions in the transaction queue
    minePendingTransactions (miningRewardAddress ) {
        console.log("mine transactions: ", miningRewardAddress );
        let block = new Block(Date.now(), this.pendingTransactions );
        // cooper s  - in the future rememeber to allow miners to pick their own transactions
        block.mineBlock(this.difficulty);

        this.chain.push(block);
        console.log("Block successfully mined: ", this.chain );

        this.pendingTransactions = [
            new Transaction(null, miningRewardAddress, this.miningAward )
        ];

    }//end mindPendingTransactions

    createTransaction(transaction) {
        this.pendingTransactions.push(transaction);
    }

    getBalanceOfAddress(address) {
        let balance = 0;
       for (const block of this.chain ) {
           for (const trans of block.transactions ) {
                if (trans.fromAddress === address) {
                    balance -= trans.amount;
                }//end if

                if (trans.toAddress === address) {
                    balance += trans.amount;
                }//end if
           }//end for 

       } //end for loop

       return balance;
    }//end getBalanceOfAddress

    // validate block
    validate() {
        for (let i=1 ; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];
           
            //console.log("validate = currentBlock: ", this.chain[i] );
            if ( currentBlock.hash !== currentBlock.createHash()) {
                return false;
            }//end iffy
  
            if (currentBlock.previousHash !== previousBlock.hash ) {
                return false;
            }
  
        }//end for
  
        // if we reach here, the chain is valid
        return true;
    }//end validate
    
    //Retrieve our blockchain whole
    getBlockChain () {
        console.log("Retrieve your blockchain here: ", this);
        const timestamp =  new Date().getTime();

        this.createTransaction(new Transaction('address1', 'address2', 100));
        this.createTransaction(new Transaction('address2','address1', 50));

        console.log("\n Let's start digging!");
        this.minePendingTransactions('test-address');

        console.log("\n Current wallet balance: ", this.getBalanceOfAddress('test-address'));

        console.log("\n Let's start digging!");
        this.minePendingTransactions('test-address');

        console.log("\n Current wallet balance: ", this.getBalanceOfAddress('test-address'));
        
        return this;
    }
  
 }//end Blockchain
 