import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import stinky3 from 'd3'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [{ name: "john",
            address:  "two",
            email: "three"
        }],
        dataUrl: './top10.csv'
  },
  mutations: {
    setData(state,payload) {
      state.data = payload;
      //console.log("store.setData: ", state.data)
    }
  },
  actions: {
    async setData(context, data ) {


      try {
        let response = await( axios.get('./top10.csv'));
        console.log("got data: ", typeof(response.data ));

        let addrArr = response.data.split('\n');

        console.log("addrArr 2: "+ addrArr[0] );
        addrArr.map( item =>{
         //console.log("Response line: ", item );
        }) 

      context.commit('setData', response.data);
      } catch (err){
        alert("Error loading data: "+ err )
      }

  /*    d3.csv ('./top10.csv', function (data) {
        console.log('d3 version: ', data )
      }) */

      d3.csv('top10.txt')
        .then(function(data) {
            // data is now whole data set
            console.log("Ouila mon ami: ", data );
            
            let output = data.map( row =>{
              let rowOut = []
              let keys = Object.keys(row)
              for(var i in keys){
                
                let k = keys[i]
                let value = row[k]
                if(value != ""){
                  rowOut.push(value)
                }
              }
              return rowOut.join(',')
            })
            console.log("output>",output)
            /*
            data.map( addr =>{
              console.log("An address: " , addr );
              return addr;
            } )*/

        })
        .catch(function(error){
          // handle error 
          console.log('ERROR: ', error )  
        })


    }//end set Data 
  }//end actions 
})//end export default
