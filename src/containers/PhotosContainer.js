// house the data and methods of photos, etc
// connect the react component to the redux actions
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchAllPhotos } from '../actions/photosActions';
import Photos from '../pages/Photos'

class PhotosContainer extends Component {

    componentDidMount(){
        this.props.fetchAllPhotos()
    }
    render() {
        return (
            <div>
                <Photos />
            </div>
        )
    }
}


export default connect(null, { fetchAllPhotos })(PhotosContainer)