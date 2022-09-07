import React from 'react'
import avatar from '../img/avatar.png';
import {NavLink} from 'react-router-dom';

function NavBar({navToggle}) {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                </div>
                <ul className="nav-items" onClick={() => {navToggle(false)}}>
                    <li className="nav-item">
                        <NavLink to='/' exact activeClassName='active '>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/about' exact activeClassName='active '>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/portfolio' exact activeClassName='active '>
                            Portfolio
                        </NavLink>
                    </li> 
                    <li className="nav-item">
                        <NavLink to='/blog' exact activeClassName='active '>
                            Blog
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>@2021 byteword</p>
                </footer>
            </nav>
        </div>
    )
}

export default NavBar
