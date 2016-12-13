import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import SensorList from './components/SensorList';
import SensValList from './components/SensValList';
import * as mqtt from './mqtt';


class App extends Component {

    constructor() {
        super();
        this.state = ({
            sensors: [],
            sensVal: [],

        });
        this.getBroker = this.getBroker.bind(this);
        this.processSensor = this.processSensor.bind(this);
        this.getSens = this.getSens.bind(this);
        this.processVal = this.processVal.bind(this);
    }

    getBroker(url) {
        mqtt.getBroker(url,this.processSensor);
    }

    processSensor(payload) {
        this.setState({
            sensors: payload,
            sensVal: [],
        });
    }

    getSens(id) {
        for(let i = 0; i < this.state.sensors.length; i++) {
            if(id === this.state.sensors[i].id) {
                let tabSens = [this.state.sensors[i]];
                this.processVal(tabSens);
            }
        }
    }

    processVal(payload) {

        console.log("Allow ?")
        this.setState({
            sensVal: payload,
        });
    }


    render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <SearchBar getBroker={this.getBroker}/>
          <SensorList sensors={this.state.sensors} getSens={this.getSens}/>
          <SensValList sensVal={this.state.sensVal}  />
      </div>
    );
  }
}

export default App;
