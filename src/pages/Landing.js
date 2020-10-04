import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Landing extends Component {
    render() {
        return (
            <section className='landing'>
                  <h1 className='x-large'><i className="fab fa-accusoft" />Mantis</h1>
                    <p>
                    View and purchase stunning photos from around the world
                    </p>
                  <div className='buttons'>
                    <Link to='/register' className='btn btn-primary'>
                      Sign Up
                    </Link>
                    <Link to='/login' className='btn btn-success'>
                      Login
                    </Link>
                  </div>
            </section>
          )
    }
}

export default Landing;