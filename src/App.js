import React from 'react';
import Navbar from './components/Navbar';
import {Switch, Route } from "react-router-dom"
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";
import Footer from "./components/Footer"
import Landing from "./pages/Landing"

function App() {    
  return (
      <div>
          <Navbar />
          <Switch>
              <Route exact path="/">
                  <Photos />
              </Route>
              <Route exact path="/landing">
                  <Landing />
              </Route>
              
              <Route path="/cart">
                  <Cart />
              </Route>
          </Switch>
          <Footer/>
      </div>
  )
}

export default App;
