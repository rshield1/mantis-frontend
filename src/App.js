import React from 'react';
import Navbar from './components/Navbar';
import {Switch, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Landing from "./pages/Landing"
import PhotosContainer from './containers/PhotosContainer';
import CartContainer from './containers/CartContainer';


function App() {    
  return (
      <div>
      
          <Navbar />
          <Switch>
              <Route exact path="/">
                  <Landing />
              </Route>

              <Route path="/photos">
              <PhotosContainer />
              </Route>

              
              <Route path="/cart">
              <CartContainer />
              </Route>
          </Switch>
          <Footer/>
      </div>
  )
}

export default App;
