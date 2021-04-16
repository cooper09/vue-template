/* Wallet/Signed Transactions Blockchain
    creates blockchain with simple proof-of-work, transactions queues and signed transactions
*/
const { toExponential } = require('core-js/fn/number/epsilon');
const sha256 = require('crypto-js/sha256');

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

class Transaction {
    constructor (fromAddress, toAddress, amount ){
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }//end constructor
  
    calculateHash() {
        return sha256(this.fromAddress + this.toAddress + this.amount).toString();
    }//end calculateHash

    signTransaction(keySignature ){
        console.log("signTransaction: ", keySignature.getPublic('hex') )
        //check public key to make sure we have the right wallet
    
    /* if(keySignature.getPublic('hex') !== this.fromAddress ) {
            throw new Error("This wallet cannot sign this transaction. Sorry!")
        }//end if
        */
        const hashTx = this.calculateHash();
        const signature = keySignature.sign(hashTx, 'base64');
        this.signature = signature.toDER('hex');

    }//end signTransaction

    isValid() {
        if ( this.fromAddress === null)  return true;

        if (!this.signature || this.signature.length === 0 ) {
            throw new Error ('This Transaction has not been signed')
        }

        

        const publicKey = ec.keyFromPublic(this.fromAddress, 'hex');

        return publicKey.verify(this.calculateHash(), this.signature );

    }//end isValid

 }//end Transaction
  
 class Block {
    constructor (timestamp, transactions, previousHash ='') {
        //this.index = index;
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.createHash();
        //add nonce for mining
        this.nonce = 0;
    }
    //getPreviousHash
  
    //getNewHash
    createHash() {
        return sha256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
        //return CryptoJS.SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)+ this.nonce ).toString()
    }//end createHash
  
    //Set up Proof of Work
    mineBlock(difficulty ) {
        console.log("Whistle while you work!");
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.createHash();
        }//end while
        console.log("New Block has been mined: ", this.hash );
    }//end mineBlock
  
    hasValidTransactions () {
        for ( const tx of this.transactions ) {
            if  (!tx.isValid()) {
                return false;
            } 
        }//end for loop
        return true;
    }//end hasValidTransactions

 }//end Block
  
class Blockchain {
    constructor () {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 0;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }
    //create genesis block
    createGenesisBlock () {
        const time = new Date().getTime();
        return new Block( time ,'Genesis Block' , '0' );
    }
    //get last block
    getLatestBlock() {
        //console.log("getLatestBlock: ", this.chain[this.chain.length-1] );
        return this.chain[this.chain.length - 1];
    }
    // create new block
  
    //Instead of mining block by block, queue them up as transactions and go from there...
    minePendingTransactions (miningRewardAddress) {
        
        //newBlock.previousHash = this.getLatestBlock().hash;
        let block = new Block(Date.now(), this.pendingTransactions);
        block.previousHash = this.getLatestBlock().hash;
        block.mineBlock(this.difficulty);
  
        console.log("Transaction block successfully mined.");
        this.chain.push(block);
  
        this.pendingTransactions = [
            new Transaction(null, miningRewardAddress,this.miningReward )
        ]
    }//end minePendingTransactions
  
    addTransaction(transaction) {

        if (!transaction.fromAddress || !transaction.toAddress ) {
            throw new Error('Transaction must include to and from address')
        }//end if

        if (!transaction.isValid() ) {
            throw new Error('Transaction is invalid. Cannot be added to blockchain')
        } //end if  

        this.pendingTransactions.push(transaction);
    }//end createTransaction
  
    getBalanceOfAddress (address) {
        console.log("Address balance: ", address )
        let balance = 0;
        for (const block of this.chain ) {
            for (const trans of block.transactions) {
                if (trans.fromAddress === address) {
                    balance -= trans.amount;
                }//end if
               
                if (trans.toAddress === address) {
                    balance += trans.amount;
                }//end if
            }//end for
        }//end for
        return balance;
    }//end getBalanceOf
  
    // validate block
    validate() {
        for (let i=1 ; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if (!currentBlock.hasValidTransactions()) {
                return false;
            }
           
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

                const EC = require('elliptic').ec;
                const ec = new EC('secp256k1');
            
                const walletKey = ec.keyFromPrivate('78c8c039744d8d863b4be8935c0d30aebc4c8c0932246eff4a901e6acf2b17fa');
                const walletAddress = walletKey.getPublic('hex');

                const timestamp =  new Date().getTime();

                const tx1 = new Transaction(walletKey, walletAddress, 10 )
                tx1.signTransaction(walletKey);
                this.addTransaction(tx1);
                
                console.log("\n Starting up the 7 dwarfs...");
                this.minePendingTransactions(walletAddress);
                
                console.log('\n Wallet Balance: ', this.getBalanceOfAddress(walletAddress));

                console.log("\n Starting up the 7 dwarfs...");
                this.minePendingTransactions(walletAddress);
                
                console.log('\n Wallet Balance: ', this.getBalanceOfAddress(walletAddress));
        
                return this;
             }//end getBlockChain
  
 }//end Blockchain
  
 module.exports.Blockchain = Blockchain;
 module.exports.Transaction = Transaction;
 
 