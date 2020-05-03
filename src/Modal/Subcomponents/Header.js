import React from 'react';

const Header = ({ title, toggle }) => (
  <div className="white header" onClick={(e) => e.stopPropagation()}>
    {title}
    <button onClick={() => toggle(false)}>Close Modal</button>
  </div>
);

export default Header;
