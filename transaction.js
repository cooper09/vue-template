
const sha256 = require('crypto-js/sha256');

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

export default class Transaction {
    constructor (fromAddress, toAddress, amount ){
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }//end constructor
  
    calculateHash() {
        return sha256(this.fromAddress + this.toAddress + this.amount).toString();
    }//end calculateHash

    signTransaction(keySignature ){
    
       //console.log("signTransaction- public key: ", keySignature.getPublic('hex') )
       //console.log("signTransaction- private key: ", keySignature.getPrivate('hex') )
        //check public key to make sure we have the right wallet
    
        // cooper s - this is supposed to work but doesn't - why?
    /* if(keySignature.getPublic('hex') !== this.fromAddress ) {
            throw new Error("This wallet cannot sign this transaction. Sorry!")
        }//end if
        */
        const hashTx = this.calculateHash();
        const signature = keySignature.sign(hashTx, 'base64');
        this.signature = signature.toDER('hex');

    }//end signTransaction

    isValid() {
        console.log("Transaction.isValid: ", this );
        if ( this.fromAddress === null)  return true;

        if (!this.signature || this.signature.length === 0 ) {
            throw new Error ('This Transaction has not been signed')
        }

        const publicKey = ec.keyFromPublic(this.fromAddress, 'hex');

        return publicKey.verify(this.calculateHash(), this.signature );

    }//end isValid

 }//end Transaction