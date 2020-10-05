// house the data and methods of photos, etc
// connect the react component to the redux actions
import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import { fetchAllPhotos } from '../actions/photosActions';
import Cart from '../pages/Cart'

class CartContainer extends Component {

    // componentDidMount(){
    //     this.props.fetchAllPhotos()
    // }
    render() {
        return (
            <div>
                <Cart />
            </div>
        )
    }
}


// export default connect(null, { fetchAllPhotos })(CartContainer)

export default CartContainer