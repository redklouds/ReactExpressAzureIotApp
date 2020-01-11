import React from 'react';
//var iothub = require('azure-iothub');
//import Client from 'azure-iot-device' ;

import Button from '@material-ui/core/Button'

class FunComp extends React.Component{
    constructor(props) {
      super(props);
  
      this.state = {
        displayRes: "RandDOO"
      };
  
      this.happy2 = this.happy2.bind(this);
    }

    happy2(event) {
        console.log("in happy 2")
        fetch("/api/feeder/")
        
        .then(response => response.json()
            /*
            console.log(response.text());  
            console.log(response);
            console.log(response.status);
            console.log(response.json());
            
        */)
        .then(JsonData =>  {
            console.log(JsonData);
          this.setState({displayRes:JsonData.data});
          console.log(JsonData);
        }).catch(function(e) {
            console.log(e);
        });
     
      }

      feedPet(){
        console.log("feeding pet")
        fetch("/api/feedpet")
        .then(response => response.json())
        .then(JsonData =>  {
          this.setState({displayRes:JsonData.data.payload.data});
          console.log(JsonData);
        });
      }
        
    render(){
      
        return(
        <div>
  
        <Button variant="contained" color="secondary" className="App-link" onClick={this.happy2}>click ME2!</Button>
        <p>{this.state.displayRes}</p>
        <Button variant="contained" color="secondary" className="App-link" onClick={this.feedPet}>Feed Pet</Button>
        
        </div>)
      }

}

export default FunComp;
  