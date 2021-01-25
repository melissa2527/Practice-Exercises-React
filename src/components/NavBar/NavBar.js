import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link to='/quotes'>Random Quotes</Link>
            <Link to='/login'>Login</Link>
            <Link to='/counter'>Counter</Link>
            <Link to='/images'>Image Slider</Link>
        </div>
    )
}
export default NavBar;