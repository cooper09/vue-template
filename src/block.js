
const sha256 = require('crypto-js/sha256');

export default class Block {
    constructor (index,timestamp, data, previousHash ='') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.createHash();
    }
    //getPreviousHash


    createHash() {
        //getNewHash
        return sha256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }//end createHash

}//end Block