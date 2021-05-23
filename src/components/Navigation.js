import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({setSearchEntry}) => {

   const resetSearchEntry = () => {
       setSearchEntry('');
   }

  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink onClick={resetSearchEntry} to="/mountain">Mountain</NavLink></li>
        <li><NavLink onClick={resetSearchEntry} to="/beach">Beaches</NavLink></li>
        <li><NavLink onClick={resetSearchEntry} to="/bird">Birds</NavLink></li>
        <li><NavLink onClick={resetSearchEntry} to="/food">Food</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
