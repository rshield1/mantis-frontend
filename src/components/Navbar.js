import React from "react"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <header><Link to="/"><h2>Mantis</h2></Link>
            
            <Link to="/cart"><i className="ri-shopping-cart-line ri-fw ri-2x"></i></Link>
        </header>
    )
}

export default Navbar
