import React from 'react';
import { NavLink } from 'react-router-dom';
import About from './About';

export const Navs = () => {
    return (
        <div>
            <NavLink to="/Home">Home</NavLink>

            <NavLink to="/About">About</NavLink>
                     
          

        </div>
    );
};
