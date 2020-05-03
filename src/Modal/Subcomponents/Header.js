import React from 'react';

const Header = ({ title, toggle }) => (
  <div className="white header">
    <h1>{title}</h1>
    <button className="btn close" onClick={() => toggle(false)}>
      X
    </button>
  </div>
);

export default Header;
