import React from 'react';
import { NavLink } from 'react-router-dom';

import Contents from './Contents.jsx';

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">HOME</NavLink>
      {' | '}
      <NavLink to="/issues">ISSUE LIST</NavLink>
      {' | '}
      <NavLink to="/report">REPORT</NavLink>
    </nav>
  );
}

export default function Page() {
  return (
    <div>
      <NavBar />
      <Contents />
    </div>
  );
}
