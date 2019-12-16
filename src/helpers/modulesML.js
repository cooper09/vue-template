import { VAppBarNavIcon } from "vuetify/lib";

var modulesML = {

  

  Test(data) {
    console.log("makeaDecision.Test: "+ data );
    return data;
  },
  decisionTree(data) {
    console.log("makeaDecision.decisionTree: "+ data );

    const brain = require('brain.js');

    const trainingData = [
      [10,9,8,7,6,5,4,3,2,1]
    ]

    const network = new brain.recurrent.LSTMTimeStep();

    network.train(trainingData , {
      log: stats => {
        console.log(stats)
      }
    })

    return data;
  },
  LSTM (data) {
    console.log("makeaDecision.LSTM: "+ data );
    
    const brain = require('brain.js');

    const trainingData = [
      [10,9,8,7,6,5,4,3,2,1]
    ]
    const network = new brain.recurrent.LSTM();

    network.train(trainingData , {
      log: stats => {
        console.log(stats)
      }
    })
    alert("ASDFAESF")
    console.log(network.run([10,9,8]))
    
    return data; 
  },
  neuralNet(data) {
    console.log("makeaDecision.neuralNet: "+ data );
    return data;
  },
  //cooper s - within7dys is the "Boucher" check
doYourThing(conversion, trainingData ) {
  alert("Run a decision tree: " + conversion[0].age);
  console.log("makeaDecision - test data passed: ", trainingData );
      //cooper s - loop through our conversions to see if we can find a matching date
      
    var finalArr = [];
      var config = {
        trainingSet: trainingData, 
        categoryAttr: 'Total_Conversion',
        ignoredAttributes: ['ad_id']
      };

  // Building Decision Tree
  var decisionTree = new dt.DecisionTree(config);
  console.log("decisionTree-category: ", decisionTree.category  );
    
  // Building Random Forest
  var numberOfTrees = 3;
  var randomForest = new dt.RandomForest(config, numberOfTrees);

  var decisionTreePrediction = decisionTree.predict(conversion[0]);
  console.log("decisionTreePrediction: ",  decisionTreePrediction );

  var randomForestPrediction = randomForest.predict(conversion[0]);
  
  console.log("randomForestPrediction: " , randomForestPrediction );
      
/*  conversions.forEach(conversion =>  {
      console.log("forEach: ", conversion );
   
        var randomForestPrediction = randomForest.predict(conversion);
  
        console.log("randomForestPrediction: " , randomForestPrediction );
        
        if (randomForestPrediction.true === 3 ) {  
          finalArr.push(conversion)
        }
      })//end foreach */
      
      finalArr=["a","b","c"]
   
      console.log("Load Data: ", decisionTreePrediction );
      return finalArr; 

//

  }//end doyourthing
}//end makeadecision

export default modulesML