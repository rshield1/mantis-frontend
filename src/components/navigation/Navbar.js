import React from 'react'

const Navbar = ({home, favorites, account}) => {
        return (
            <nav className="navbar bg-dark">
                <p className='f3 link dim grey pa3 pointer'>{home}</p>
                <p className='f3 link dim grey pa3 pointer'>{favorites}</p>
                <p className='f3 link dim grey pa3 pointer'>{account}</p>
             
            </nav>
        )

}

export default Navbar
