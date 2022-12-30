import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='tilt br2 shadow-2 w4 h4'>
                <div className='pa3'>
                    <img src={brain} alt='brain'/>
                </div>
            </Tilt>
        </div>
    );
};

export default Logo;