import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navbar from './components/navigation/Navbar';
import LoginForm from './components/loginForm/LoginForm';
import Jokes from './components/jokes/Jokes'
import axios from 'axios';
import Search from './components/jokes/Search'

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

  // async componentDidMount() {
  //   this.setState({loading: true });
    // const res = await axios.get('https://sv443.net/jokeapi/v2/joke/Any?type=single&amount=6')
    // this.setState({ jokes: res.data.jokes, loading: false });
  // }
  // search jokes

  searchJokes = async (text) =>{
    const res = await axios.get(`https://sv443.net/jokeapi/v2/joke/Any?contains=${text}`)
    console.log(res.data)
    this.setState({jokes: res.data.setup})
  };


  render() {
  return (
    <div className="App">
      <Navbar home="Mantis" favorites="Favorites" account="Account" icon="will add later"/>
      <div className="container">
    
      <LoginForm />  
      <Search searchJokes={this.searchJokes}/>
        <Jokes jokes={this.state.jokes} /> 
      </div>
      

      {/*
      <BusinessList />
      
      <LogoutForm />
      <Spinner /> } */}
      <Particles className='particles' params={particlesOptions} />
    </div>
  );
  }
}

export default App;
