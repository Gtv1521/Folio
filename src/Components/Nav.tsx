import React from 'react'
import { Link, /*Outlet*/ } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <div className="content-navbar">
                <section className="logo">
                    <Link to="/">
                        Portafolio
                    </Link>
                </section>
                <section className='nav-menu'>
                    <section className="toggle-menu">
                        <a href="#"><i className="fas fa-bars"></i></a>
                    </section>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>
                    </ul>
                </section>
            </div>
            {/* <Outlet /> */}
        </div>
    )
}

export default Nav