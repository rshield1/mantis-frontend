import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Landing extends Component {
    render() {
        return (
            <section className='landing'>
            <div className='landing-inner'>
                  <h1 className='x-large'><i className="fab fa-accusoft" />Mantis</h1>
                  <p className='lead'>
                    View and purchase stunning photos from around the world
                    </p>
                  <div className='buttons'>
                    <Link to='/' className='btn btn-success'>
                      View our Collection
                    </Link>
                  </div>
              </div>
            </section>
          )
    }
}

export default Landing;