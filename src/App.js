import React from 'react';
import './App.css';
import Particles from 'react-particles-js';



const particlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#76EE00",
        blur: 5
      }
    },
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
    
  }
}



class App extends React.Component {
  render() {
  return (
    <div className="App">App

<Particles className='particles'
      params={particlesOptions} />
    
    </div>
  );

  }

}

export default App;
