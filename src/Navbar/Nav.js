import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='topnav'>
            <Link to='/'>Home</Link>
            <Link to='/todoapp'>Todo App</Link>
        </div>
    );
};

export default Nav;