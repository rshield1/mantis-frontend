import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navbar from './components/navigation/Navbar';
import Businesses from './components/Businesses/Businesses'


const particlesOptions = {
  particles: {
    line_linked: {
      shadow: { enable: true, color: "#76EE00", blur: 5 }
    },
    number: {
      value: 100,
      density: { enable: true, value_area: 800 }
    } 
  }
}

class App extends Component {

  componentDidMount() {

  }

  
  render() {
  return (
    <div className="App">
      <Navbar title="Mantis" icon="will add later"/>
      
      <div className="container">
        <Businesses/> 
      </div>
      

      {/*<SearchField />
      <BusinessList />
      <LoginForm />
      <LogoutForm />
      <Spinner /> } */}
      <Particles className='particles' params={particlesOptions} />
    </div>
  );
  }
}

export default App;
