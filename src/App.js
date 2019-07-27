import React, { Component } from 'react';
//import './App.css';
import {images} from './images'
import Particles from 'react-particles-js';
import {Gallery, GalleryImage } from 'react-gesture-gallery'

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
const INITIAL_INDEX = 0
//class App extends Component {
function App(){
    const [index, setIndex] = React.useState(0)
    
    React.useEffect(()=>{
      const interval = setInterval(() => {
        if(index === images.length -1){
          setIndex(INITIAL_INDEX)
        } else{
          setIndex(index + 1)
        }
      }, 2500)
      return () => clearInterval(interval)
    },[index])

//  render(){
    return (
      
      <div >
        
          
        
          <div className="gal" style= {{marginLeft:'320px', width : '100vh', display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
              <Gallery
                style={{
                  height: '100vh', 
                  width: '100vh', 
                  background: 'black',
                 
                }}
                index={index}
                onRequestChange={i => {
                  setIndex(i);
                }}
              >
                {images.map(image => (
                  <GalleryImage key={image.toString()} objectFit="contain" src= {image}/>
                ))}
              </Gallery>
          </div>
          
             
            
        
        <Particles 
            canvasClassName="particles"
            params={particleOpt}
            
          />
      </div>
    );
  }
//}

export default App;
