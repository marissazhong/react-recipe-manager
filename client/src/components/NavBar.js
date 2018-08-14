import React from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { NavLink } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom';
import logo from '../images/icons/logo.png';

const NavBar = () => {
    return (
      <div className="navbar" style={{ borderBottom: '2px solid grey', paddingTop: '10px', paddingBottom: '10px', marginBottom: '12px' }}>
        
        <NavLink className="nav-link"
          style={{ marginRight: '10px' }} 
          to="/"
        >
          <img src={logo} className="nav-item" alt="logo" height="40px"/>
        </NavLink>
        <NavLink className="nav-link"
          style={{ marginRight: '10px' }} 
          to="/recipes"
        >
          Your Recipes
        </NavLink>
      </div>
    );
  }
  
  export default NavBar;