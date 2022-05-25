import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './NavbarElements';

const Navbar = () => {
return (
    <>
    <Nav className='navBar'>
        <Bars />
        <NavMenu>
            <NavLink to='/'>
                    home
                </NavLink>
            <NavLink to='/about'>
                about
            </NavLink>
            <NavLink to='/main'>
                life tours
            </NavLink>
            <NavLink to='/contactUs'>
                contact us
            </NavLink>
        </NavMenu>
        <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </Nav>
    </>
    );
};

export default Navbar;