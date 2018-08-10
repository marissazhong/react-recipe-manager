import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to="/"
        >
          Browse Recipes
        </NavLink>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to="/recipes"
        >
          Your Recipes
        </NavLink>
      </div>
    );
  }
  
  export default NavBar;