import React from 'react';
import Navbar from './components/Navbar';
import {Switch, Route } from "react-router-dom"
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

function App() {    
  return (
      <div>
          <Navbar />
          <Switch>
              <Route exact path="/">
                  <Photos />
              </Route>
              
              <Route path="/cart">
                  <Cart />
              </Route>
          </Switch>
      </div>
  )
}

export default App;
