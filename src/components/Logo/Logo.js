import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='tilt br2 shadow-2 w4'>
                    <h3>React Parallax Tilt 👀</h3>
            </Tilt>
        </div>
    );
};

export default Logo;