import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navbar from './components/navigation/Navbar';


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



class App extends Component {
  render() {
  return (
    <div className="App">App
    <Navbar />
    {/* { <Logo />
    <SearchField />
    <BusinessList />
    <BusinessItem />
    <LoginForm />
    <LogoutForm />
    <Spinner /> } */}


<Particles className='particles'
      params={particlesOptions} />
    
    </div>
  );

  }

}

export default App;
