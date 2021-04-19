import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testChain: [
      {
        id: "1", 
        hash: "0x1",
        prevHash: "0x0",
        timestamp: new Date()
      },
      {
        id: "2", 
        hash: "0x2",
        prevHash: "0x1",
        timestamp: new Date()
      }
    ],
    pendingTxs:[
      {
        id: "1",
        from: "me",
        to: "you",
        amount: 100,
        timestamp: new Date().getTime(),
        value: true
      },
      {
        id: "2",
        from: "the man",
        to: "to his girl",
        amount: 10099,
        timestamp: new Date().getTime(),
        value: false,
      }

    ],
    currentBlock: "Default Block", 
    currentDifficulty: "0",
    currentReward: 10,
    walletAddr: "", 
    selectedBlock: "test me",
    transactions:[],
    newTransaction:{},
    blockCoin:{}
  },
  mutations: {
    setBlockChain(state, data ) {
      console.log("mutations - setBlockChain: ", data )
      state.testChain = data;  
    },
    setWalletAddr(state, data) {
      console.log("mutation - setBlockChain: ", data )
      state.walletAddr = data;
    },
    setSelectedBlock (state, hash) {
      console.log("mutation - setSelectedBlock: ",hash )
      state.selectedBlock = hash;
    },
    setTransactions(state, transactions ) {
      console.log("mutation - setTransactions: ", transactions );
      state.transactions = transactions ;
    },
    newTx(state, transaction ) {
      console.log("mutation - newTx: ", transaction );
      state.newTransaction = transaction ;
    },
    setCoin(state, coin ) {
      console.log("mutation - setCoin: ", coin );
      state.newTransaction = coin ;
    }
  },
  actions: {
    setBlockChain ({commit}, data) {
      console.log("actions- setBlockChain: ", data )
      commit('setBlockChain', data);
    },
    setWalletAddr({commit}, data ) {
      console.log("actions- setWalletAddr: ", data )
      commit("setWalletAddr", data)
    },
    setSelectedBlock({commit}, hash ) {
      console.log("actions- setSelectedBlock ", hash )
      commit("setSelectedBlock", hash)
    },
    setTransactions({commit}, transactions ) {
      console.log("actions- setTransactions ", transactions )
      commit("setSelectedBlock", transactions)
    },
    newTx({commit}, transaction ) {
      console.log("actions- newTx ", transaction )
      commit("newTx", transaction)
    },
    setCoin({commit}, coin) {
      console.log("actions - setCoin ", coin )
      commit("setCoin", coin )
    }
  },
  getters: {
    newChain: state => state.testChain,
    getWallet: state => state.walletAddr,
    getTransactions: state => state.transactions,
    getPending: state => state.pendingTxs,
    getSelected: state => state.selectedBlock,
    getTransactions: state => state.transactions,
    getNewTx: state => state.newTransaction,
    getCoin: state => state.blockCoin
  },//end getters
  modules: {

  }//end modules
})//end store
