import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import SignUpComponent from '../components/SignUpComponent'
import { autoLogin } from '../actions/userActions'


class Landing extends Component {

    render() {
        return (
            <section className='landing'>
            <div className='landing-inner'>
                  <h1 className='x-large'><i className="fas fa-camera-retro" />  Mantis</h1>
                  <p className='lead'>
                    View and purchase stunning photos from around the world
                  </p>
                    <SignUpComponent/>
                    
                  <div>
                    <Link to='/photos' className='btn btn-primary'>
                      View Collection
                    </Link>
                  </div>
              </div>
            </section>
          )
    }
}


const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);