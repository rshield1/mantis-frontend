import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-dark">
                <p className='f3 link dim grey pa3 pointer'>{this.props.title}</p>    
            </nav>
        )
    }
}

export default Navbar
