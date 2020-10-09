// house the data and methods of photos, etc
// connect the react component to the redux actions
import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { fetchAllPhotos } from '../actions/photosActions';
import Cart from '../pages/Cart'

class CartContainer extends Component {

    render() {
        return (
            <div>
                <Cart />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      cart: state.cart
    }
  }
   
  export default connect(mapStateToProps)(CartContainer);