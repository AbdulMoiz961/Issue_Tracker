import React from 'react';

import Contents from './Contents.jsx';

function NavBar() {
  return (
    <nav>
      <a href="/">HOME</a>
      {' | '}
      <a href="/#/issues">ISSUE LIST</a>
      {' | '}
      <a href="/#/report">REPORT</a>
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
