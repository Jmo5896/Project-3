import React from 'react';
import './NavBar.css';

const NavBar = () => {

    return (
        <div>
            <nav >
                <ul className='clearfix' >
                    <li>
                        <a href='/' >PlanIt</a>
                    </li>
                    <li>
                        <a href='/' >Home</a>
                    </li>
                    <li>
                        <a href='/login' >Login</a>
                    </li>
                    <li>
                        <a href='/sign-up' >Sign Up</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;