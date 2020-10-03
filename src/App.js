import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default App;
