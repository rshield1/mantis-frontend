import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navbar from './components/navigation/Navbar';
import Jokes from './components/jokes/Jokes'
import axios from 'axios';


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
  state = {
    jokes: [],
    loading: false
  }

  async componentDidMount() {

    this.setState({loading: true });

    const res = await axios.get('https://sv443.net/jokeapi/v2/joke/Any?type=single&amount=10')
    this.setState({ jokes: res.data.jokes, loading: false });
  }


  render() {
  return (
    <div className="App">
      <Navbar title="Mantis" icon="will add later"/>
      
      <div className="container">
        <Jokes loading={this.state.loading} jokes={this.state.jokes} /> 
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
