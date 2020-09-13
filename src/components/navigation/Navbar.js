import React from 'react'

const Navbar = (props) => {
        return (
            <nav className="navbar bg-dark">
                <p className='f3 link dim grey pa3 pointer'>{props.title}</p>    
            </nav>
        )

}

export default Navbar
