import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img width='100%' src='https://i.imgur.com/c0BwyCg.jpg' alt='404' />
            <Link to='/'>Go Back Home</Link>
        </div>
    );
};

export default NotFound;