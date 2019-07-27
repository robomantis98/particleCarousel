import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
const particleOpt = {
              particles: {
                number: {
                   value: 150,
                   density: {
                     enable: true, 
                     value_area: 800
                   }
                }
              }
             }
class App extends Component {
  render(){
    return (
      <div>
        <Particles 
           params={particleOpt}
              
            />
      </div>
    );
  }
}

export default App;
