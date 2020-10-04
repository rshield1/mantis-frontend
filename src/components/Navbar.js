import React, { useContext } from "react"
import {Link} from "react-router-dom"

import {Context} from '../Context'

function Navbar() {
    const {cartItems} = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <header>
            <Link to="/"><h2><i className="fab fa-accusoft" /> Mantis</h2></Link>
            <Link to="/landing"><h2>Landing</h2></Link>
            <Link to="/cart">
                <i className={`${cartClassName} ri-fw ri-2x`}></i></Link>
        </header>
    )
}

export default Navbar
